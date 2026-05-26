"use client";

import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { logIn, signUp } from "@/actions/actions";
import { useActionState } from "react";
type AuthFormProps = {
  type: "login" | "signup";
};

export default function AuthForm({ type }: AuthFormProps) {
  const action = type === "login" ? logIn : signUp;
  const [state, formAction] = useActionState(action, null);
  return (
    <form action={formAction} className="space-y-5 text-gray-200 w-[300px]">
      <div className="space-y-1">
        <Label htmlFor="email"> Email</Label>
        <Input id="email" name="email" type="email"></Input>
      </div>
      <div className="space-y-1">
        <Label htmlFor="password"> Password</Label>
        <Input id="password" name="password" type="password"></Input>
      </div>
      {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}
      <Button>{type === "login" ? "Log In" : "Sign Up"}</Button>
    </form>
  );
}
