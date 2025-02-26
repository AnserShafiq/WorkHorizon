import type { NextAuthConfig } from 'next-auth';
 
export const authConfig: NextAuthConfig = {
    secret: process.env.AUTH_SECRET,
    pages:{
        signIn: '/portal',
        signOut: '/portal',
    },
    session:{
        strategy: 'jwt',
        maxAge: 60*5, // 60sec x 5
        updateAge: 60, //60secs
    },
    providers:[],
}