import { useRouter } from "next/router";
import React from "react";

type Props = {};

export default function Login({}: Props) {

  const router = useRouter()


  const login = () => {
    console.log('logging in...');
  }
  return (
    <>
      <form className="h-screen flex flex-col justify-center max-w-lg mx-auto">
        <input type="email" className="p-3 bg-gray-200 text-black rounded-xl" placeholder="Email" />
        <input type="password" className="p-3 bg-gray-200 text-black rounded-xl mt-5" placeholder="Password"/>
        <button type="submit" onClick={() => login} className="w-full btn btn-primary mt-10">Log in</button>

        <p className="text-lg text-center mt-10">Don't have an account? <span className="text-brand" onClick={() => router.push('/register')}>Sign up</span></p>
      </form>
    </>
  );
}
