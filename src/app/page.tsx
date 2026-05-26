import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10 flex flex-col items-center text-gray-200">
      <h1 className="text-4xl font-bold">Welcome to the Finance Tracker App</h1>
      <p className="mt-4 text-lg">
        This app helps you track your expenses, set budgets, and visualize your
        spending habits. Get started by logging in or signing up!
      </p>
      <Image
        src="/finance-illustration.png"
        alt="Finance Illustration"
        width={600}
        height={400}
        className="mt-6 rounded-lg shadow-lg"
      />
      <Link
        href="/login"
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Get Started
      </Link>
    </div>
  );
}
