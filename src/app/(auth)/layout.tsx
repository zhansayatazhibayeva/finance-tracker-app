import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-y-5 justify-center items-center min-h-screen text-gray-200">
      <h1 className="text-3xl font-bold">The Finance Tracker</h1>
      <div>{children}</div>
    </div>
  );
}
