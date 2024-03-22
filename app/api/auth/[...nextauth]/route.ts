import { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: "email"},
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials as { email: string; password: string };

        try {
          const res = await fetch('https://api-dash.powerelay.softcell.com/v1/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });

          if (!res.ok) {
            // Handle failed login attempt
            const errorResponse = await res.json();
            
            throw new Error(errorResponse.message || 'Login failed');
          }
          // const response = await res.json();

          const user = await res.json();

          if (res.status === 200 && user) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.error('Error during authorization:', error);
          throw new Error('Error during authorization');
        }
      },
    }),
  ],

  
  callbacks: {
    async jwt({ token, user, trigger, session, mutate }) {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }
     
    //   if (Date.now() < (session?.user.data.exp * 1000)) {
    //     console.log(refreshToken);
        
    //     return refreshToken(user);
    // }
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  
  },
  secret: 'supersecret',
  pages: {
    signIn: '/',
  },

 
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };




