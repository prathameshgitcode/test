import React from "react";
import Image from "next/image";
import Navbar from "@/components/layout/navbar";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full">
      {/* Left side page */}
      {/* <div className="relative w-1/2">
        <div className="bg-img h-full w-full ">
        
        </div>
      </div> */}

      {/* Right side page */}
      <div className="sticky left-10 flex flex-1 flex-col">
            <Navbar  />
        {children}</div>
    </div>
  );
}