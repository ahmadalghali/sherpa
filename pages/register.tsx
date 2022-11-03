import { useRouter } from "next/router";
import React from "react";

type Props = {};

export default function Register({}: Props) {
  const router = useRouter();

  const register = () => {
    console.log("Signing up...");
  };
  return (
    <>
      <form className='h-screen flex flex-col justify-center max-w-lg mx-auto'>
        <input type='email' className='p-3 bg-white text-black rounded-xl' placeholder='Email' />
        <input type='password' className='p-3 bg-white text-black rounded-xl mt-5' placeholder='Password' />
        <input type='password' className='p-3 bg-white text-black rounded-xl mt-5' placeholder='Confirm Password' />
        <button type='submit' onClick={() => register} className='w-full btn btn-primary mt-10'>
          Sign up
        </button>

        <p className='text-lg text-center mt-10'>
          Already have an account?{" "}
          <span className='text-brand cursor-pointer hover:underline' onClick={() => router.push("/login")}>
            Log in
          </span>
        </p>
      </form>
    </>
  );
}
