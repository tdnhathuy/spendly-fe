import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  console.log("session -------- ", session);

  if (session) {
    redirect("/home");
  }

  redirect("auth");
}
