import React from "react";
import { useDispatch } from "react-redux";
import authService from "@/appwrite/auth";
import { logout as authLogout } from "@/features/auth/authSlice";
import { Button } from "../ui/button";


const LogoutBtn = () => {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        //calling method logout for appwrite 
        //handle appwrite with promises
        authService.logout()
        .then(()=>{
            //dispath here will update the state 
            //as false 
            
            const check = dispatch(authLogout())
            // console.log(check)
        })
        .catch((error)=>(console.log("Error Logging Out User LogoutBtn.jsx :: LogoutBtn :: error", error) ))
    }
  return (
    <>
      <div className="flex flex-row gap-x-4">
        <Button 
        className="rounded-3xl font-roboto text-sm font-medium "
        onClick = {logoutHandler}
        >
          Logout
        </Button>

        <img
          className="w-10 h-10 rounded-full"
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        />
      </div>
    </>
  );
};

export default LogoutBtn;
