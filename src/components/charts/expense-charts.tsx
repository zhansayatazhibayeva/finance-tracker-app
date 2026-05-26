"use client";

import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Expense } from "@prisma/client";

const COLORS = ["#38bdf8", "#fb7185", "#fb923c", "#a78bfa", "#4ade80"];

export default function ExpenseCharts({ expenses }: { expenses: Expense[] }) {
  const byCategory = Object.values(
    expenses.reduce<Record<string, { name: string; value: number }>>(
      (acc, expense) => {
        if (!acc[expense.category]) {
          acc[expense.category] = {
            name: expense.category,
            value: 0,
          };
        }

        acc[expense.category].value += expense.amount;
        return acc;
      },
      {},
    ),
  );
  const byDate = Object.values(
    expenses.reduce<Record<string, { date: string; total: number }>>(
      (acc, expense) => {
        const date = new Date(expense.createdAt).toLocaleDateString();

        if (!acc[date]) {
          acc[date] = {
            date,
            total: 0,
          };
        }

        acc[date].total += expense.amount;
        return acc;
      },
      {},
    ),
  );
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
      <div className="border border-gray-700 rounded-xl p-5">
        <h2 className="font-bold text-xl mb-4">By Category</h2>

        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={byCategory}
              dataKey="value"
              nameKey="name"
              outerRadius={130}
            >
              {byCategory.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="border border-gray-700 rounded-xl p-5">
        <h2 className="font-bold text-xl mb-4">Spending Over Time</h2>

        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={byDate}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
