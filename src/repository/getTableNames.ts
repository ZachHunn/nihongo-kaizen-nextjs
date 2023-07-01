import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getTableNames = async () => {
  return prisma.$queryRaw`SELECT table_name
    FROM information_schema.tables
    WHERE table_schema = 'public'
    AND table_type = 'BASE TABLE';`;
};
