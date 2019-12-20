import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export default async function jwtVerify(token) {
  if (!token) {
    return null;
  }

  const result = await jwt.verify(token, process.env.JWT_SECRET);
  if (result) {
    return result.userID;
  } else {
    return null;
  }
}
