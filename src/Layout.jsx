import React from "react";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./features/auth/authSlice";
import { Progress } from "./components/ui/progress";
import RTE from "./components/RTE";

const Layout = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        // console.log(userData)
        if (userData && userData?.$id) return dispatch(login({ userData: userData }));
        else return dispatch(logout());
      })
      .catch((error) => console.log("Error fetching user:", error));


    //  -------------------------
    //LOADER LOGIC :-
    // Gradually increase progress
    let interval = setInterval(() => {
      //get the previous progress value
      //if greater than 100 retun 100 or else
      //increment by 10
      //loader will stop automatically at 100
      //so it will not come here in setInterval

      /*
        NOTE :- settimeout time should at 10 times 
        the setinterval time as it will increase 
        in amout of 10 so if setineterval time 
        is 200 then settimeout time should be 
        at 2000 so that loader can complete 

        HERE IN OUR CASE LOADER IS JUST FOR UI 
        SINCE NO TYPE OF DATABASE CALL IS BEING MADE 
        WE ARE JUST MAKING THE USER WAIT FOR UI 
        JUST MAKING HIM SEE THE LOADER IF WE 
        WANT WE COULD ALSO DIRECTLY MAKE SETLODER AS FALSE
         */
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return oldProgress + 10; // Increase by 10 every 100ms
      });
    }, 200);

    // Set loading false after 1 second
    setTimeout(() => {
      clearInterval(interval);
      setLoading(false);
    }, 2000);

    /*clearInterval(interval) stops the interval 
    when the USEeffect is cleaned up. 
    so that setInterval doenot keep running even 
    after the useEffect is done*/
    return () => clearInterval(interval);
    //  -------------------------
  }, [dispatch]);

  return loading ? (
    <div>
      <Progress value={progress} />
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <div className="relative w-16 h-16 border-4 border-gray-500 border-t-white rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-medium">Please wait...</p>
      </div>
    </div>
  ) : (
    <>
      {/* <Header/>
      <Outlet/>
      <Footer/> */}
      <div className="layout min-h-screen flex flex-col">
        <Header />
        <main className="content flex-grow">
          <Outlet />
        </main>
        <Footer className="mt-auto" />
      </div>
    </>
  );
};

export default Layout;
