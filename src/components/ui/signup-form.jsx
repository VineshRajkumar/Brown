import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import serviceObj from "@/appwrite/config";
import { login as authLogin } from "@/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import authService from "@/appwrite/auth";
import { Toaster, toast } from 'sonner'
import { useSelector } from "react-redux";

export function SignUpForm({ className, ...props }) {
    const session = useSelector((state) => state.status);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //register and handleSubmit are main in
  //react hook form
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState({});

  const create = async (data) => {
    setError({});
    try {
      //data will be an object with {email,password}
      const userData = await authService.createAccount(data);
      if (userData.success != false) {
        const currData = await authService.getCurrentUser();
        //once user is logged in change the login state
        //in the store to true by calling the login method

        if (currData) {
          dispatch(authLogin({userData:currData}));
          // console.log(session)
          toast.success("Account Created Successfully !")
        }
        setTimeout(() => {
            navigate("/");
       }, 3000);
        
      } 
      else throw userData;
    } catch (error) {
      const errorObj = {
        message: error?.message || "An unknown error occurred",
        type: error?.type || "unknown_error",
        code: error?.code || 500,
      };
      toast.error(`${errorObj.message}`)
      setError(errorObj);
      
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        
        <CardContent>
          {/* <form> */}
          <div className="grid gap-6">
            <form onSubmit={handleSubmit(create)}>
              <div className="grid gap-6">
                {/* USERNAME */}
              <div className="grid gap-3">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    placeholder="username"
                    {...register("name", {
                      required: true
                    })}
                  />
                </div>

                {/* EMAIL */}
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    {...register("email", {
                      required: true,
                      validate: {
                        matchPatern: (value) =>
                          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                            value
                          ) || "Email address must be a valid address",
                      },
                    })}
                  />
                </div>

                {/* PASSWORD  */}
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    {...register("password", {
                      required: true,
                    })}
                  />
                </div>

                {/* LOGIN BUTTON  */}
                <Button type="submit" className="w-full">
                  SignUp
                </Button>
                <Toaster richColors position="top-right" />
              </div>
            </form>
          </div>
          {/* </form> */}
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}