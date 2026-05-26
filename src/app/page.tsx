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
      <Link
        href="/login"
        className="mt-6 bg-blue-500 text-white px-8 py-4 rounded"
      >
        Get Started
      </Link>
      <Image
        src="/image.png"
        alt="Finance Illustration"
        width={1000}
        height={800}
        className="mt-6 rounded-lg shadow-lg"
      />
    </div>
  );
}
