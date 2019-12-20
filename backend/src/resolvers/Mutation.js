import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { promisify } from "util";
import randomBytes from "randombytes";
import { NOTIFICATION_ADDED } from "./Subscription";
import storeImages from "../lib/CloudinaryStoreImages";
import transporter from "../mail";
import emailBody from "../mjml";
dotenv.config();

const Mutations = {
  async createUser(parent, args, { db }, info) {
    return await db.mutation.createUser(
      {
        data: {
          ...args.data
        }
      },
      info
    );
  },

  async createService(
    parent,
    {
      data: { images, title, description, maxPayment, category }
    },
    { db, request },
    info
  ) {
    //Check if the user is logged
    if (!request.userID)
      return new Error("You must be logged to create a new Service!");

    console.log("Start Creating Service");
    //Store images on Cloudinary Storage
    const images_array = await storeImages(images);
    return await db.mutation.createService(
      {
        data: {
          title,
          description,
          maxPayment,
          category,
          images: { set: images_array },
          author: { connect: { id: request.userID } }
        }
      },
      info
    );
  },

  async updateService(
    parent,
    {
      data,
      where: { id }
    },
    { db, request },
    info
  ) {
    //Check if the user is logged
    if (!request.userID)
      return new Error("You must be logged to create a new Service!");
    //Check if user can edit the requested service
    const service = await db.query.service({ where: { id } }, `{author{id}}`);
    if (!service || service.author.id !== request.userID) {
      return new Error("You must be the author to edit this post!");
    }
    console.log("Start Updating Service");
    //Store image on Cloudinary
    const images_array = await storeImages(data.images);
    //Connect the category and the new images to the data object
    data.category = data.category && { connect: { id: data.category } };
    data.images = data.images && { set: images_array };
    //Rerturn the updated Service
    return await db.mutation.updateService(
      {
        data: { ...data },
        where: { id }
      },
      info
    );
  },

  async deleteService(parent, { where }, { db }, info) {
    return await db.mutation.deleteService({ where: { id: where.id } }, info);
  },

  async signup(parent, { data }, { db, response }, info) {
    //Verify if the email is already in use
    const user = await db.query.user({ where: { email: data.email } });

    if (user) {
      return new Error("Email already in use. Do you have a different one?");
    } else {
      //Create new user if email is not found
      const password = await bcrypt.hash(data.password, 10);

      const newUser = await db.mutation.createUser(
        {
          data: { ...data, password, permissions: { set: ["USER"] } }
        },
        info
      );

      //Create a token
      const token = jwt.sign(
        {
          userID: newUser.id
        },
        process.env.JWT_SECRET,
        { expiresIn: 60 * 60 * 60 }
      );

      //Create a cookie with the token
      response.cookie("token", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24
      });
      return newUser;
    }
  },

  async signin(parent, { email, password }, { response, db }, info) {
    const user = await db.query.user({ where: { email } });
    //Check if user was found
    if (user) {
      const result = await bcrypt.compare(password, user.password);
      //Check if password matches
      if (!result) return new Error("Email or password invalid! Try Again!");

      //Create a token
      const token = jwt.sign(
        {
          userID: user.id
        },
        process.env.JWT_SECRET,
        { expiresIn: 60 * 60 * 60 }
      );

      //Create a cookie with the token
      response.cookie("token", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24
      });

      return user;
    } else {
      return new Error("Email or password invalid! Try Again!");
    }
  },

  signout(parent, args, { db, response }, info) {
    //Clear cookie in the response
    response.clearCookie("token");
    //Return successful message
    return { message: "You have been signed out successfully." };
  },

  async requestReset(parent, { email }, { db }, info) {
    //if not email provided throw an error
    if (!email) return new Error("Have you provided a valid email?");
    //try to find a user with the email provided
    const user = await db.query.user({ where: { email } });
    //if not user found throw error
    if (!user) return new Error("Have you provided a valid email?");
    //if user found, set a reset token
    const randombytes = promisify(randomBytes);
    const resetToken = (await randombytes(20)).toString("hex");
    const resetTokenExpiry = Date.now() + 3600000;
    //save token in the database
    const updateduser = await db.mutation.updateUser({
      data: { resetToken, resetTokenExpiry },
      where: { id: user.id }
    });
    //Send user email

    const { html } = await emailBody(
      `${process.env.FRONTEND_URL}/resetPassword?resetToken=${resetToken}`
    );

    transporter.sendMail(
      {
        from: "noreply@helpmates.com",
        to: user.email,
        subject: "Reset password instructions!",
        html
      },
      (err, info) => {
        console.log(err);
      }
    );
    return { message: `Check your email ${user.email} for a reset email.` };
  },
  async resetPassword(
    parent,
    { password, confirm, resetToken },
    { db, response },
    info
  ) {
    //Check if passwords match
    if (password !== confirm)
      return new Error("Password and confirm password don't match.");
    //Check if token was found
    const user = await db.query.user({ where: { resetToken } });

    //Check wether the reset token is expired
    if (!user || Date.now() > user.resetTokenExpiry)
      return new Error(
        "Sorry, the provided token is incorrect or expired. Please, request a new password reset email."
      );
    //Hash password sent by the user
    const newPassword = await bcrypt.hash(password, 10);

    const updatedUser = await db.mutation.updateUser({
      where: { id: user.id },
      data: {
        password: newPassword,
        resetToken: null,
        resetTokenExpiry: null
      }
    });

    //Create a token
    const token = jwt.sign(
      {
        userID: user.id
      },
      process.env.JWT_SECRET,
      { expiresIn: 60 * 60 * 60 }
    );

    //Create a cookie with the token
    response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 // 1 day cookie
    });

    return updatedUser;
  },
  async addComment(
    parent,
    { question, service },
    { request, db, pubsub },
    info
  ) {
    //Verify if user is logged
    if (!request.userID)
      return new Error("You must logged to add a new comment!");
    //Create Comment
    const comment = await db.mutation.createComment(
      {
        data: {
          question,
          service: { connect: { id: service } },
          author: { connect: { id: request.userID } }
        }
      },
      info
    );
    //Get the service author
    const authorService = await db.query.service(
      { where: { id: service } },
      `{author{id}}`
    );
    //Create Notification
    const notification = await db.mutation.createNotification(
      {
        data: {
          to: { connect: { id: authorService.author.id } },
          label: `${comment.author.fname} added a comment to your service!`,
          type: "COMMENT",
          service: { connect: { id: service } },
          message: question
        }
      },
      `{id, to{id}, label, createdAt, message, viewedAt, service{ title, id }}`
    );
    //Dispatch Event NOTIFICATION_ADDED
    pubsub.publish(NOTIFICATION_ADDED, {
      notificationAdded: notification,
      requestID: request.userID
    });
    return comment;
  },
  async markNotificationViewed(parent, { id }, { db, request }, info) {
    if (!request.userID)
      return new Error("You must logged to add a new comment!");
    let date = new Date().toISOString();
    const notification = await db.mutation.updateNotification(
      {
        where: { id },
        data: {
          viewedAt: date
        }
      },
      info
    );
    return notification;
  },
  async addBid(
    parent,
    {
      data: { service, payment, possibleDate }
    },
    { db, request, pubsub },
    info
  ) {
    if (!request.userID) return new Error("You must logged to add a new bid!");
    if (possibleDate < Date.now())
      return new Error("Your date cannot be previous then today!");
    if (payment <= 0)
      return new Error("Your bid cannot be equal 0, please increase your bid.");

    const currentService = await db.query.service(
      { where: { id: service } },
      `{id, author{id}}`
    );
    if (!currentService)
      return new Error(
        "Invalid Service! Are you sure you are in a real service?"
      );
    const bid = await db.mutation.createBid(
      {
        data: {
          author: { connect: { id: request.userID } },
          service: { connect: { id: currentService.id } },
          payment,
          possibleDate
        }
      },
      info
    );

    //Create Notification
    const notification = await db.mutation.createNotification(
      {
        data: {
          to: { connect: { id: currentService.author.id } },
          label: `${request.user.fname} added a bid to your service!`,
          service: { connect: { id: currentService.id } },
          message: `Bid: CA$ ${payment.toFixed(2)}`,
          type: "BID"
        }
      },
      `{id, to{id}, label, createdAt, message, viewedAt, service{ title, id }}`
    );

    //Dispatch Event NOTIFICATION_ADDED
    pubsub.publish(NOTIFICATION_ADDED, {
      notificationAdded: notification,
      requestID: request.userID
    });

    return bid;
  }
};

export default Mutations;
