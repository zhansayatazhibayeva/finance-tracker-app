import { addExpense } from "@/actions/actions";
import React from "react";

export default function AddExpense() {
  return (
    <div className="border border-gray-300 rounded-md py-2 px-3">
      <h2 className="text-xl font-bold mb-4">Add Expense</h2>
      <form action={addExpense} className="space-y-4 text-gray-200">
        <div>
          <label
            htmlFor="description"
            className="text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <input
            name="description"
            required
            type="text"
            id="description"
            placeholder="e.g., Groceries"
            className="border w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>
        </div>
        <div className="flex flex-row gap-4">
          <div>
            <label
              htmlFor="amount"
              className="text-sm font-medium text-gray-700"
            >
              Amount
            </label>
            <input
              required
              name="amount"
              type="number"
              id="amount"
              placeholder="0.00"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></input>
          </div>
          <div>
            <label htmlFor="date" className="text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              required
              name="date"
              type="date"
              id="date"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></input>
          </div>
        </div>
        <div>
          <label
            htmlFor="category"
            className="text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <select
            required
            name="category"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Food">Food</option>
            <option value="Transportation">Transportation</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Utilities">Utilities</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Rent">Rent</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-950 cursor-pointer text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
}
