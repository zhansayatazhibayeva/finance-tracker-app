import AuthForm from "@/components/auth-form";
import Link from "next/link";
import React from "react";

export default function Signup() {
  return (
    <div className="text-gray-200">
      <h1 className="text-center  text-2xl font-bold">Sign Up</h1>
      <AuthForm type="signup" />
      <p className="mt-6 text-sm ">
        Already have an accaunt?{" "}
        <Link href="/login" className="text-zinc-500">
          Log In
        </Link>
      </p>
    </div>
  );
}
