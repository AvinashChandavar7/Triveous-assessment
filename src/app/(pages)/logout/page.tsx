"use client";

import { auth } from "@/utils/firebase";
import { signOut } from "firebase/auth";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const LogoutPage = () => {
  const router = useRouter();


  useEffect(() => {
    signOut(auth)
      .then((val) => {
        // console.log(val, "logged out");
        router.replace("/");
      })
  }, [router]);

  return (
    <></>
  )
}


export default LogoutPage;
