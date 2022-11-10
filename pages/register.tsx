import { useRouter } from "next/router";
import React from "react";
import { useMutation } from "react-query";
import NotLoggedInLayout from "../components/NotLoggedInLayout";
import useAuth from "../hooks/useAuth";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string
  username: string
  password: string
  confirmPassword: string
};

type Props = {};

export default function Register({ }: Props) {
  const router = useRouter();

  const { register: signUp } = useAuth()
  const { mutate, isLoading } = useMutation(signUp);

  const { register, handleSubmit, watch, formState: { errors }, setError } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({ email, username, confirmPassword, password }) => {
    if (confirmPassword !== password) return setError("confirmPassword", { message: "Passwords do not match" })
    mutate({ email, username, password })

  }

  return (
    <div className="py-32 grid content-center space-y-16 max-w-sm mx-auto">
      <h1 className="text-4xl text-center font-bold">Join us</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-5">

          <div>
            <label htmlFor="email" className="ml-2">Email</label>
            <input type="email" className='input mt-1' {...register("email", {
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })} />
            {errors.email && <p className="text-red-600 ml-2 mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="username" className="ml-2">Username</label>
            <input type="text" className='input mt-1'{...register("username", {
              required: "Required",
            })} />
            {errors.username && <p className="text-red-600 ml-2 mt-1">{errors.username.message}</p>}
          </div>


          <div>
            <label htmlFor="password" className="ml-2">Password</label>
            <input type="password" className='input mt-1'              {...register("password", { required: "Required", minLength: { value: 6, message: `Minimum 6 characters` } })} />
            {errors.password && <p className="text-red-600 ml-2 mt-1">{errors.password.message}</p>}
          </div>


          <div>
            <label htmlFor="confirmPassword" className="ml-2">Confirm Password</label>
            <input type="password" className='input mt-1'
              {...register("confirmPassword", { required: "Required", minLength: { value: 6, message: `Minimum 6 characters` } })} />
            {errors.confirmPassword && <p className="text-red-600 ml-2 mt-1">{errors.confirmPassword.message}</p>}
          </div>
        </div>

        <ul className="hint text-sm text-gray-400 list-disc ml-5 mt-10">
          <li>Password must be 6 characters or more</li>
        </ul>

        <button type='submit' className='w-full btn btn-primary mt-10'>
          Sign up
        </button>

        <p className='text-lg text-center mt-10'>
          Already have an account?{" "}
          <span className='text-brand cursor-pointer hover:underline' onClick={() => router.push("/login")}>
            Log in
          </span>
        </p>
      </form>
    </div>
  );
}


Register.getLayout = function getLayout(page: any) {
  return (

    <NotLoggedInLayout>
      {page}
    </NotLoggedInLayout>
  )
}
