import AuthForm from "@/components/auth-form";
import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <div className="text-gray-200">
      <h1 className="text-center text-2xl font-bold">Log in</h1>
      <AuthForm type="login" />
      <p className="mt-6 text-sm ">
        No accaunt yet?{" "}
        <Link href="/signup" className="text-zinc-500">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
