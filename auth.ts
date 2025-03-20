import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { authConfig } from "./auth.config";

async function getAdmin(admin_email: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getAdmin/${admin_email}`);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    const [data] = await response.json();
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
        admin_email: { type: 'string' },
        password: { type: 'password' },
      },
      async authorize(credentials) {
        const credentialsFromLoginForm = z.object({
          admin_email: z.string(),
          password: z.string(),
        }).safeParse(credentials);
      
        if (!credentialsFromLoginForm.success) {
          throw new Error("Invalid input format");
        }
      
        const { admin_email, password } = credentialsFromLoginForm.data;
        // console.log("Attempting login with admin ID:", admin_id);
      
        try {
          let user = await getAdmin(admin_email);
        //   console.log("User from DB:", user);
      
          if (!user) {
            throw new Error("User not found");
          }
      
          if (password !== user.password) {
            console.log("Invalid password");
            throw new Error("Invalid password");
          }
      
          return {
            status: "success",
            id: user.id,
            name: user.name,
            email:user.email,
          };
          
        } catch (error) {
          console.error("Authentication error from Auth.ts");
          throw new Error("Authentication failed!!!!!!!!!!");
        }
      }
      
    })
  ]
});