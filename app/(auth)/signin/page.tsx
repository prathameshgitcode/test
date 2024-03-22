"use client";

import Login from "@/components/form/signin";
import SigninForm from "@/components/form/signin";


interface Props{
  searchParams:{
    callbackUrl?: string;
  }
}

const Signin = ({searchParams}: Props) => {  
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <SigninForm  callbackUrl= {searchParams.callbackUrl}  />
      </div>
    </>
  );
};

export default Signin;
