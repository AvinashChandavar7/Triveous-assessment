"use client";

import React, { useEffect } from "react";
import Login from "@/components/Login";
import News from "@/components/News";

import { auth } from "@/utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";


const Home = () => {

  // const [user, loading, error] = useAuthState(auth);


  // useEffect(() => {
  //   // console.log("user", user);

  // }, [user])


  return (
    <div className="w-full max-w-7xl mx-auto px-8">
      <div className="flex flex-wrap -mx-2 mt-32 gap-y-8">
        <div className="w-full flex justify-center">
          {/* {user ? (
            <div className="max-w-md">
              <News />
            </div>
          ) : ( */}
          <Login />
          {/*  )} */}
        </div>
      </div>
    </div>
  );
}

export default Home;