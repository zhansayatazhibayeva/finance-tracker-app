import AddExpense from "@/components/add-expense";
import FilterExpenses from "@/components/filter-expenses";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import ExpenseTable from "@/components/expense-table";
import Section from "@/components/section";
import { Prisma } from "@prisma/client";
import Link from "next/link";
import ExpenseCharts from "@/components/charts/expense-charts";
import ExpenseSearch from "@/components/expense-search";
import Sidebar from "@/components/sidebar";

type DashboardProps = {
  searchParams: Promise<{
    category?: string;
    start?: string;
    end?: string;
  }>;
};

export default async function Dashboard({ searchParams }: DashboardProps) {
  const params = await searchParams;
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  const where: Prisma.ExpenseWhereInput = {
    userId: Number(session.user.id),
  };

  if (params.category) {
    where.category = params.category;
  }

  if (params.start || params.end) {
    where.createdAt = {};

    if (params.start) {
      where.createdAt.gte = new Date(params.start);
    }

    if (params.end) {
      where.createdAt.lte = new Date(params.end);
    }
  }

  const expenses = await prisma.expense.findMany({
    where,
    orderBy: {
      createdAt: "desc",
    },
  });

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="h-screen bg-gray-900 text-gray-200 flex overflow-hidden">
      <Sidebar />

      <main className="flex-1 overflow-y-auto p-10">
        <div className="mb-10 text-right">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="my-5">
            Track spending, filter by date/category, and visualize your expenses
          </p>
        </div>

        <Section>
          <div className="flex gap-4">
            <FilterExpenses
              start={params.start}
              end={params.end}
              category={params.category}
            />
            <AddExpense />
          </div>
          <div className="mt-8">
            <span>You spent: </span>
            <span className="ml-2  font-bold text-xl rounded-xl border-gray-300 py-2 px-3  ">
              {total.toFixed(2)} tg
            </span>
          </div>
          <div className="mt-6">
            <ExpenseTable expenses={expenses} />
          </div>
          <ExpenseCharts expenses={expenses} />
        </Section>
      </main>
    </div>
  );
}
