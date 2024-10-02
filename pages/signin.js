import SeoHead from "../components/SeoHead";
import authButton from "../components/misc/authButton";
import { getServerSession } from "next-auth";
import { authConfig } from "../lib/auth";
import { redirect } from "next/navigation";
import { getCsrfToken } from "next-auth/react";

export default function Signin() {
  const session = await getServerSession(authConfig);

  console.log("Session: ", session);

  if (session) return redirect("/dash");
  
  return (
    <>
    <SeoHead title='RonzzAPI - Sign In' />
<section class="bg-gray-50 min-h-screen flex items-center justify-center">

  <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">

    <div class="md:w-1/2 px-8 md:px-16">
      <h2 class="font-bold text-2xl text-[#002D74]">Sign In</h2>
      <p class="text-xs mt-4 text-[#002D74]">If you are already a member, easily sign in</p>

      <form action="/auth/signin" method="post" class="flex flex-col gap-4">
        <input class="p-2 mt-8 rounded-xl border" type="password" id="apikey" name="apikey" autocomplete="current-password" placeholder="ApiKey" />
        <button class="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Sign In</button>
      </form>

      <div class="mt-6 grid grid-cols-3 items-center text-gray-400">
        <hr class="border-gray-400" />
        <p class="text-center text-sm">OR</p>
        <hr class="border-gray-400" />
      </div>

      <authButton />

      <div class="mt-3 text-xs flex justify-between items-center text-[#002D74]">
        <p>Don't have an account?</p>
        <a href="/signup">
          <button class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Sign Up</button>
        </a>
      </div>
    </div>

    <div class="md:block hidden w-1/2">
      <img class="rounded-2xl" src="https://img.freepik.com/premium-vector/guardian-digital-realm-mans-vigilance-login-gate_1134661-21312.jpg?w=826" />
    </div>
  </div>
</section>
    </>
  );
}
