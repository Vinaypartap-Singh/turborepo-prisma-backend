import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient({
  log: ["error", "query"],
});

export default prisma;
