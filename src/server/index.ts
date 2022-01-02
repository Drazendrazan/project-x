import './setup'
import { PrismaClient } from '@prisma/client'

import rpc from 'rage-rpc'

const prisma = new PrismaClient()

async function main() {}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

rpc.register('TEST', () => {})
