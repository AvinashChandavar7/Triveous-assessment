"use client";

import Header from "@/components/Header";
import React from "react";


const ProtectedLayout = ({ children, }: { children: React.ReactNode }) => {

  return (
    <>
      <Header />
      <main className="px-2 py-4">
        {children}
      </main>
    </>
  )

}

export default ProtectedLayout;