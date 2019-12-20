import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export default nodemailer.createTransport({
  host: process.env.MAILTRAP_URL,
  port: process.env.MAILTRAP_PORT,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASSWORD
  }
});
