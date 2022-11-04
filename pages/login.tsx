import Router, { useRouter } from "next/router";
import React, { useState } from "react";
import { useQuery, useMutation } from "react-query";
import { api } from "../api";
type Props = {};

type AuthRequest = { email: string; password: string };
type AuthResponse = { accessToken: string; refreshToken: string };

export default function Login({}: Props) {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: submitDetails, isLoading } = useMutation(login);

  async function login({ email, password }: AuthRequest) {
    router.push("/dashboard");
    return;
    const { data: response } = await api.post<AuthResponse>("/authentication/login/", {
      username: email,
      password: password,
    });

    if (response.accessToken) {
    } else {
      alert("Login unsuccessful");
    }

    console.log("response :>> ", response);
  }

  return (
    <>
      <form className='h-screen flex flex-col justify-center max-w-lg mx-auto'>
        <input type='text' className='input' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <input
          type='password'
          className='input mt-5'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type='button'
          onClick={() => submitDetails({ email, password })}
          className='w-full btn btn-primary mt-10'
        >
          Log in
        </button>

        <p className='text-lg text-center mt-10'>
          Don&apos;t have an account?{" "}
          <span className='text-brand cursor-pointer hover:underline' onClick={() => router.push("/register")}>
            Sign up
          </span>
        </p>
      </form>
    </>
  );
}
