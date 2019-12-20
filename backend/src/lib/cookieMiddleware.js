import jwtVerify from "./jwtVerify";
import db from "../db";

export const cookieMiddleware = async (req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const result = await jwtVerify(token);
    if (result) {
      req.user = await db.query.user({ where: { id: result } });
      req.userID = result;
      next();
    } else {
      next();
    }
  } else {
    next();
  }
};
