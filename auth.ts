import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { authConfig } from "./auth.config";

async function getAdmin(admin_id: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getAdmin/${admin_id}`);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    const [data] = await response.json();
    console.log('Admin data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching admin:', error);
    return null;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        admin_id: { type: 'string' },
        password: { type: 'password' },
      },
      async authorize(credentials) {
        const credentialsFromLoginForm = z.object({
          admin_id: z.string(),
          password: z.string(),
        }).safeParse(credentials);
      
        if (!credentialsFromLoginForm.success) {
          throw new Error("Invalid input format");
        }
      
        const { admin_id, password } = credentialsFromLoginForm.data;
        // console.log("Attempting login with admin ID:", admin_id);
      
        try {
          let user = await getAdmin(admin_id);
        //   console.log("User from DB:", user);
      
          if (!user) {
            throw new Error("User not found");
          }
      
          if (password !== user.PASSWORD) {
            console.log("Invalid password");
            throw new Error("Invalid password");
          }
      
          return {
            status: "success",
            id: user.ID,
            name: user.NAME,
            email:user.EMAIL,
          };
          
        } catch (error) {
          console.error("Authentication error from Auth.ts");
          throw new Error("Authentication failed!!!!!!!!!!");
        }
      }
      
    })
  ]
});