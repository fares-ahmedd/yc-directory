"use server";
import { signIn, signOut } from "@/auth";

export async function loginAction() {
  await signIn("github");
}

export async function logoutAction() {
  await signOut();
}
