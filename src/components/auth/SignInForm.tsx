"use client";

import { SigninReq } from "@/lib/dtos/auth.dto";
import { SigninValidation } from "@/lib/validators/auth.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@mui/material";
import { Label } from "@radix-ui/react-label";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface SignInFormProps {
  onSubmit: SubmitHandler<SigninReq>;
}

export default function SignInForm({ onSubmit }: SignInFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninReq>({ resolver: zodResolver(SigninValidation) });

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <Label htmlFor="email-address" className="sr-only">
            Email address
          </Label>
          <Input
            id="email-address"
            {...register("email", { required: true })}
            type="email"
            autoComplete="email"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        <div>
          <Label htmlFor="password" className="sr-only">
            Password
          </Label>
          <Input
            id="password"
            {...register("password", { required: true })}
            type="password"
            autoComplete="current-password"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
          />
          {errors.password && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <div className="text-sm">
          <Link
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Forgot your password?
          </Link>
        </div>
      </div>

      <div>
        <Button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign in
          <ArrowRight className="ml-2 -mr-1 h-4 w-4" />
        </Button>
      </div>
    </form>
  );
}
