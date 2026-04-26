import { PrismaClient } from '@prisma/client' // <--- IMPORTANT : importez depuis le package, pas un chemin relatif

const globalForPrisma = globalThis

const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export { prisma }
