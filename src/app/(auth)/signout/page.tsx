import { logOut } from "@/actions/actions";
import Link from "next/link";

export default function SignOut() {
  return (
    <div className="text-gray-200">
      <p className="mt-6 text-2xl">Are you sure you want to sign out?</p>

      <div className="flex mt-6">
        <form action={logOut}>
          <button className="bg-blue-950 text-white py-2 px-4 rounded-md hover:bg-blue-800">
            Yes, Sign Out
          </button>
        </form>

        <Link
          href="/app/dashboard"
          className="ml-4 bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600"
        >
          No, Stay Signed In
        </Link>
      </div>
    </div>
  );
}
