import { forwardTo } from "prisma-binding";

const Query = {
  // async users(parent, args, { request }, info) {
  //   const users = await cxt.db.query.users();
  //   return users;
  // },
  services: forwardTo("db"),
  categories: forwardTo("db"),
  service: forwardTo("db"),
  servicesConnection: forwardTo("db"),
  async myServices(parent, { orderBy }, { request, db }, info) {
    if (!request.userID)
      return new Error("You must be logged to see your services list.");

    const services = await db.query.services(
      {
        where: { author: { id: request.userID } },
        orderBy
      },
      info
    );

    return services;
  },
  async provinces(parent, args, { request, db }, info) {
    return await db.query.provinces(info);
  },
  async loggedUser(parent, args, { request, db }, info) {
    if (request.userID) {
      const user = await db.query.user({ where: { id: request.userID } }, info);
      return user;
    } else {
      return null;
    }
  },
  canEditPost: async function(
    parent,
    { where: { id } },
    { request, db },
    info
  ) {
    if (!request.userID) return false;
    const service = await db.query.service({ where: { id } }, `{author{id}}`);
    if (!service) return false;
    if (request.userID !== service.author.id) return false;
    return true;
  },
  async notifications(parent, { where }, { request, db }, info) {
    if (!request.userID)
      return new Error("You must be logged to access your notifications.");
    let notifications = null;
    if (where) {
      notifications = await db.query.notifications(
        {
          where: {
            AND: { to: { id: request.userID }, viewedAt: where.viewedAt }
          },
          orderBy: "createdAt_DESC"
        },
        info
      );
    } else {
      notifications = await db.query.notifications(
        {
          where: { to: { id: request.userID } },
          orderBy: "createdAt_DESC"
        },
        info
      );
    }
    console.log(notifications);
    return notifications;
  }
};

export default Query;
