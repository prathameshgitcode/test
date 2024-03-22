'use client'
import { refreshToken } from "@/lib/actions/auth.actions";
import { useSession } from "next-auth/react"; // Import getSession

export default function Update() {
  const { data: session, update } = useSession(); // Use 'mutate' instead of 'update'

  async function updateSession() {
    try {
     
      update({
        ...session,
        user: {
          ...session?.user,
          data: {
            ...session?.user.data,
            access_token: await refreshToken(session?.user.data.access_token)
          }
        }
      }); // Set revalidate to false to prevent automatic revalidation

      console.log("Session updated successfully with refreshed access token.");
    } catch (error) {
      console.error("Error updating session:", error);
    }
  }

  return (
    <div className="flex flex-wrap gap-5">
      <button
        className="border bg-violet-600 text-white rounded px-4 py-2"
        onClick={updateSession}
      >
        Update Session
      </button>
      <button
        className="border bg-violet-600 text-white rounded px-4 py-2"
        onClick={() => console.log({ session })}
      >
        Log Session
      </button>
    </div>
  );
}
