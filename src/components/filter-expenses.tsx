import Link from "next/link";

type FilterExpensesProps = {
  start?: string;
  end?: string;
  category?: string;
};

export default function FilterExpenses({
  start,
  end,
  category,
}: FilterExpensesProps) {
  return (
    <div className="w-[70%] border border-gray-300 rounded-md py-3 px-5">
      <h2 className="font-bold text-2xl mb-5">Filter</h2>

      <form
        action="/app/dashboard"
        method="GET"
        className="flex flex-col gap-4"
      >
        <div className="flex flex-row gap-4">
          <div>
            <label htmlFor="start">Start</label>
            <input
              className="w-full outline rounded-2xl border-gray-300 py-2 px-3"
              type="date"
              id="start"
              name="start"
              defaultValue={start}
            />
          </div>

          <div>
            <label htmlFor="end">End</label>
            <input
              className="w-full outline rounded-2xl border-gray-300 py-2 px-3"
              type="date"
              id="end"
              name="end"
              defaultValue={end}
            />
          </div>

          <div className="w-full">
            <label htmlFor="category">Category</label>
            <select
              className="w-full outline rounded-2xl border-gray-300 py-2 px-3"
              name="category"
              id="category"
              defaultValue={category}
            >
              <option value="">All Categories</option>
              <option value="Food">Food</option>
              <option value="Transportation">Transportation</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Utilities">Utilities</option>
              <option value="Rent">Rent</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            className="w-[20%] cursor-pointer bg-blue-950 text-white py-2 rounded-md hover:bg-blue-800"
          >
            Apply Filters
          </button>

          <Link
            href="/app/dashboard"
            className="w-[20%] text-center cursor-pointer bg-gray-700 text-white py-2 rounded-md hover:bg-gray-600"
          >
            Clear Filters
          </Link>
        </div>
      </form>
    </div>
  );
}
