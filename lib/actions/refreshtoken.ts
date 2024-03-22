"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

interface Session {
    user:{  
        data: {
            access_token: string;
          };
    }
  
}


// GET LOGIN USER DETAILS
export default async function fetchReports() {
  const session: Session = (await getServerSession(authOptions))!; 
  const token = session?.user?.data?.access_token;
  console.log(token, 'ttt');

  const res = await fetch("https://api-dash.powerelay.softcell.com/v1/auth/refresh", {
    credentials: 'include',
    method: "GET",
    headers: {
        "Cookie": `access_token=${token}`, 
        "Content-Type": "application/json",
    },
  });

  return await res.json();
}




