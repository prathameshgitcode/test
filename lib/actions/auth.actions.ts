"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { emailVerifyResponse, forgotPasswordResponse, resetPasswordForm, resetPasswordResponse, refreshTokenResponse } from "@/types";
import { getServerSession } from "next-auth";

export async function logout() {
  const token = await getAccessToken();
  const res = await fetch("https://api-dash.powerelay.softcell.com/v1/auth/logout", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const user = await res.json();
  console.log(user);
}

export async function forgotPassword(email: string) {
  const res = await fetch(
    "https://api-dash.powerelay.softcell.com/v1/auth/forgotpassword",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    }
  );
  const data: forgotPasswordResponse = await res.json();
  return data;
}

export async function resetPassword(token: string, data: resetPasswordForm) {
  const res = await fetch(
    `https://api-dash.powerelay.softcell.com/v1/auth/resetpassword/${token}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: data.password,
        confirm_password: data.confirm_password,
      }),
    }
  );

  const response: resetPasswordResponse = await res.json();
  return response;
}

export async function verifyEmail(token: string) {
  const res = await fetch(
    `https://api-dash.powerelay.softcell.com/v1/auth/verifyemail/${token}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data: emailVerifyResponse = await res.json();
  return data;
}

// export async function refreshToken(token: string) {
//   const res = await fetch(
//     `https://api-dash.powerelay.softcell.com/v1/auth/refresh/${token}`,
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     const user = await res.json();
//     console.log(user);
// }

export async function refreshToken(token:string) {
  const res = await fetch('https://api-dash.powerelay.softcell.com/v1/auth/refresh', {
    method: "GET",
    headers: { "Content-Type": "application/json" ,
    Authorization: `Bearer ${token}`,

  },
  });
  const data = await res.json();
    return data.access_token;
}

interface UserData {
  id: string;
  name: string;
  email: string;
  data:string;
  account: string;
  verified: boolean;
  created_at: string;
  updated_at: string;
 
}

export async function userData(): Promise<UserData> {
  const token = await getAccessToken();
  const user = await fetch("https://api-dash.powerelay.softcell.com/v1/users/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const data = await user.json();
  return data;
}

export async function getAccessToken() {
  const session = await getServerSession(authOptions);
  const token: string = session?.user.data.access_token;
  return token;
}
