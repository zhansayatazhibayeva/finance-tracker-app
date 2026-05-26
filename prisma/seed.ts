import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.expense.deleteMany();
  await prisma.user.deleteMany();
  const hashedPassword = await bcrypt.hash("password123", 10);

  const user1 = await prisma.user.create({
    data: {
      email: "user1@gmail.com",
      hashedPassword: hashedPassword,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: "user2@gmail.com",
      hashedPassword: hashedPassword,
    },
  });

  await prisma.expense.createMany({
    data: [
      {
        amount: 2500,
        description: "Coffee and snacks",
        category: "Food",
        userId: user1.id,
      },
      {
        amount: 12000,
        description: "Taxi",
        category: "Transportation",
        userId: user1.id,
      },
      {
        amount: 4500,
        description: "Movie ticket",
        category: "Entertainment",
        userId: user1.id,
      },
      {
        amount: 30000,
        description: "Rent payment",
        category: "Rent",
        userId: user2.id,
      },
      {
        amount: 8000,
        description: "Groceries",
        category: "Food",
        userId: user2.id,
      },
    ],
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
