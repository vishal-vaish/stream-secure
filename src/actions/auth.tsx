"use server";

import {loginSchema, loginSchemaType} from "@/lib/schema";
import {validUserData} from "@/lib/data";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

export async function LoginUser(form: loginSchemaType) {
  const {success, data} = loginSchema.safeParse(form);

  if (!success) {
    throw new Error("Invalid form data");
  }

  const {username, password} = data;
  const cookieStore = cookies();

  if (username === validUserData.username && password === validUserData.password) {
    cookieStore.set("auth_token", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    })
    redirect("/");
  } else {
    throw new Error("Invalid username or password");
  }
}

export async function Logout() {
  const cookieStore = cookies();

  cookieStore.set("auth_token", "false", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  })

  redirect("/login");
}