import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
        data:{
            access_token: string,
            roles:[]
        }
        message: string;
        success: boolean;
     
    };
  }
}