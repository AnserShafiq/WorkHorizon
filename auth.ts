import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { authConfig } from "./auth.config";
export const{handlers, signIn, signOut, auth} = NextAuth({
    ...authConfig,
    providers:[
        Credentials({
            credentials:{
                adminid:{type:'text'},
                password:{type:'password'},
            },
            async authourize(credentials) {
                const credentialsFromLoginForm = z.object({
                    adminid:z.string(),
                    password:z.string(),
                }).safeParse(credentials);
            }
        })
    ]
})