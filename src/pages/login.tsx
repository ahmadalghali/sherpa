import { useRouter } from "next/router";
import React from "react";
import { useMutation } from "react-query";
import NotLoggedInLayout from "../common/components/layouts/NotLoggedInLayout";
import useAuth from "../hooks/useAuth";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  username: string
  password: string
};

type Props = {};


export default function Login({ }: Props) {
  const router = useRouter();
  const { login } = useAuth()

  const { mutate, isLoading } = useMutation(login);


  const { register, handleSubmit, watch, formState: { errors }, setError } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({ username, password }) => {
    mutate({ username, password })

  }

  return (
    <div className="h-screen grid content-center space-y-16 mx-auto max-w-sm">
      <h1 className="text-4xl text-center font-bold">Welcome back</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-5">


          <div className="">
            <label htmlFor="username" className="ml-2">Username</label>
            <input type="text" className='input mt-1'{...register("username", {
              required: "Required",
            })} />
            {errors.username && <p className="text-red-600 ml-2 mt-1">{errors.username.message}</p>}
          </div>


          <div>
            <label htmlFor="password" className="ml-2">Password</label>
            <input type="password" className='input mt-1'  {...register("password", { required: "Required" })} />
            {errors.password && <p className="text-red-600 ml-2 mt-1">{errors.password.message}</p>}
          </div>

        </div>

        <button
          type='submit'
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
    </div>
  );
}


Login.getLayout = function getLayout(page: any) {
  return (
    <NotLoggedInLayout>
      {page}
    </NotLoggedInLayout>
  )
}
