import SeoHead from "../components/SeoHead";

export default function Signup() {
  return (
    <>
    <SeoHead title='RonzzAPI - Sign Up' />
<section class="bg-gray-50 min-h-screen flex items-center justify-center">

  <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">

    <div class="md:w-1/2 px-8 md:px-16">
      <h2 class="font-bold text-2xl text-[#002D74]">Sign Up</h2>
      <p class="text-xs mt-4 text-[#002D74]">If you're not yet a member, sign up easily</p>

      <a href="/auth/google">
        <button type="submit" class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
          <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
          </svg>
          Sign Up with Google
        </button>
      </a>

      <div class="mt-3 text-xs flex justify-between items-center text-[#002D74]">
        <p>Already have an account?</p>
        <a href="/signin">
          <button class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Sign In</button>
        </a>
      </div>
    </div>

    <div class="md:block hidden w-1/2">
      <img class="rounded-2xl" src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-27396.jpg?t=st=1727792299~exp=1727795899~hmac=9516a904b27ae37e99011f69ecb8754d128f36fc5f794ce0a468eeae7145f96c&w=826" />
    </div>
  </div>
</section>
    </>
  );
}
