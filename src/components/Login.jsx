import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import serviceObj from "@/appwrite/config";
import { login as authLogin } from "@/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import authService from "@/appwrite/auth";
import { Toaster, toast } from 'sonner'


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //register and handleSubmit are main in
  //react hook form
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState({});

  const loginSubmit = async (data) => {
    setError({});
    try {
      //data will be an object with {email,password}
      const session = await authService.login(data);
      if (session.success != false) {
        const userData = await authService.getCurrentUser();
        //once user is logged in change the login state
        //in the store to true by calling the login method

        if (userData) {
          dispatch(authLogin(userData));
        }
        // Toaster("Success", { description: "Login successful!" });
        // /Brown
        navigate("/");
      }
      else throw session;
    } catch (error) {
        const errorObj = {
            message: error?.message || "An unknown error occurred",
            type: error?.type || "unknown_error",
            code: error?.code || 500
          }
        toast.error(`${errorObj.message}`)
        setError(errorObj);
        
    }
  };

  return (
    <div className="flex flex-col py-10 items-center justify-center w-full">
      {/* <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">Logo</span>
        </div>
      </div> */}

      <div className="py-5">
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>

        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
          // /Brown
            to="/sign-up"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error.message}</p>}
      </div>
      {/* REAT HOOK FORM FROM HERE  */}

      <form onSubmit={handleSubmit(loginSubmit)}>
        <div className="space-y-5">
          <Input
        
            label="Email: "
            placeholder="Enter your Email"
            type="email"
            {...register("email", {
              required: true,
              validate: {
                matchPattern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be a valid address",
              },
            })}
            
          />

          <Input
          
            label="Password: "
            type="password"
            placeholder="Enter your Password"
            {...register("password", {
              required: true,
            })}
          />

          <Button type="submit">Sign In</Button>
          <Toaster richColors position="top-right" />
        </div>
      </form>
    </div>
  );
};

export default Login;
