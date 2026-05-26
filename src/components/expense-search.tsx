import React from "react";

export default function ExpenseSearch() {
  return (
    <form className="p-3 flex justify-between">
      <label className="text-2xl font-bold">Expense List</label>
      <input
        type="text"
        placeholder="Search expenses..."
        className="bg-gray-800 text-gray-200 placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </form>
  );
}
