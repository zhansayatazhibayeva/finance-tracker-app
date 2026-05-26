"use client";

import { Expense } from "@prisma/client";
import React from "react";
import { deleteExpense } from "@/actions/actions";

const categoryColors: Record<string, string> = {
  Food: "bg-red-900 text-red-200",
  Transportation: "bg-blue-900 text-blue-200",
  Entertainment: "bg-green-900 text-green-200",
  Utilities: "bg-yellow-900 text-yellow-200",
  Healthcare: "bg-purple-900 text-purple-200",
  Other: "bg-gray-900 text-gray-200",
};

export default function ExpenseTable({ expenses }: { expenses: Expense[] }) {
  const [query, setQuery] = React.useState("");
  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.description.toLowerCase().includes(query.toLowerCase()) ||
      expense.category.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <div>
      <form
        action="/app/dashboard"
        method="GET"
        className="flex mb-6 justify-between "
      >
        <label className="text-2xl font-bold">Expense List</label>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search expenses..."
          className="bg-gray-800 pl-2 text-gray-200 rounded  placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </form>

      <div className="max-h-[800px] overflow-y-auto border border-gray-700 rounded-lg">
        <table className="w-full table-auto  border-collapse border px-2 gap-4 border-gray-700">
          <thead className="bg-gray-800 sticky top-0 p-[20px] text-left">
            <tr>
              <th className="py-2.5 px-4">Date</th>
              <th className="py-2.5 px-4">Description</th>
              <th className="py-2.5 px-4">Category</th>
              <th className="py-2.5 px-4">Amount</th>
              <th className="py-2.5 px-4">Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {filteredExpenses.map((expense) => (
              <tr key={expense.id}>
                <td className="py-2.5 px-4">
                  {expense.createdAt.toLocaleDateString()}
                </td>
                <td className="py-2.5 px-4">{expense.description}</td>
                <td className="py-2.5 px-4 ">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[expense.category]}`}
                  >
                    {expense.category}
                  </span>
                </td>
                <td className="py-2.5 px-4">{expense.amount.toFixed(2)} tg</td>
                <td className="py-2.5 px-4">
                  <form action={deleteExpense}>
                    <input type="hidden" name="expenseId" value={expense.id} />

                    <button
                      type="submit"
                      className="p-2 bg-red-700 rounded-lg text-white hover:bg-red-500"
                    >
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
