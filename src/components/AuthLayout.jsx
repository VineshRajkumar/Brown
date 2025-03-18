import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Progress } from "./ui/progress";

const Protected = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const [loader, setloader] = useState(true);
  const [progress, setProgress] = useState(0);
  const authStatus = useSelector((state) => state.status);

  //basically this useeffect is protect the application
  //so that unautheicated users cannot use application
  useEffect(() => {
    /*Basically this is written here
        in little bit complex way :-
        if(authStatus===true) navigate('/')
        else if(authStatus===false) navigate('/login')
        */
    /*
       CASE 1 :- 
       If authentication = T and authStatus = F 
       T !== F so go to /login 
       
       CASE 2 :-
       If authentication = F and authStatus = T 
       F !== T so go to /dashboard

       BASICALLY WE ARE FOLLOWING AUTHSTATUS HERE 
       authentication variable is just added so that there are 
       no mismatches when opened in seperate tab 
       */
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/dashboard");
    }

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
    }, 100);

    // Set loading false after 1 second
    setTimeout(() => {
      clearInterval(interval);
      setloader(false);
    }, 1000);

    /*clearInterval(interval) stops the interval 
    when the USEeffect is cleaned up. 
    so that setInterval doenot keep running even 
    after the useEffect is done*/
    return () => clearInterval(interval);
    //  -------------------------
  }, [authStatus, navigate, authentication]);

  return loader ? (
    <div>
      <Progress value={progress} />
      <div className="flex flex-col items-center justify-center min-h-[83vh] bg-black text-white">
        <div className="relative w-16 h-16 border-4 border-gray-500 border-t-white rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-medium">Please wait...</p>
      </div>
    </div>
  ) : (
    <> {children} </>
  );
};

export default Protected;
