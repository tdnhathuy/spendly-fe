import { signIn } from "@/auth";
import { getSession } from "next-auth/react";

export default async function () {
  const session = await getSession();
  console.log("session -------- ", session);

  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
  );
}
