// This file connects with the prisma remote database
import { Prisma } from "prisma-binding";
import dotenv from "dotenv";
dotenv.config();

const prisma = new Prisma({
  typeDefs: "dist/generated/prisma.graphql",
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false
});

export default prisma;
