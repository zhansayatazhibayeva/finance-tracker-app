"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { signIn, auth, signOut } from "@/lib/auth";
import { AuthError } from "next-auth";

export async function logIn(
  prevState: { error?: string } | null,
  formData: FormData,
) {
  try {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirectTo: "/app/dashboard",
    });

    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: "Invalid email or password" };
    }

    throw error;
  }
}

export async function addExpense(formData: FormData) {
  const session = await auth();

  if (!session?.user?.email) {
    throw new Error("Unauthenticated");
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    throw new Error("User not found");
  }

  await prisma.expense.create({
    data: {
      description: formData.get("description") as string,
      amount: Number(formData.get("amount")),
      category: formData.get("category") as string,
      userId: user.id,
    },
  });

  revalidatePath("/app/dashboard");
}

export async function deleteExpense(formData: FormData) {
  const expenseId = Number(formData.get("expenseId"));

  const session = await auth();
  if (!session?.user?.email) {
    throw new Error("Unauthenticated");
  }
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  if (!user) {
    throw new Error("User not found");
  }
  await prisma.expense.deleteMany({
    where: {
      id: expenseId,
      userId: user.id,
    },
  });
  revalidatePath("/app/dashboard");
}

export async function signUp(
  prevState: { error?: string; success?: boolean } | null,
  formData: FormData,
) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Email and password are required" };
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return { error: "User already exists" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      email,
      hashedPassword,
    },
  });

  redirect("/login");
}

export async function logOut() {
  await signOut({
    redirectTo: "/",
  });
}
