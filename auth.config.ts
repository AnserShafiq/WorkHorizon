import type { NextAuthConfig } from 'next-auth';
 
export const authConfig: NextAuthConfig = {
    secret: process.env.AUTH_SECRET,
    pages:{
        signIn: '/portal',
        signOut: '/',
    },
    session:{
        strategy: 'jwt',
        maxAge: 60*60*5, // 60sec x 5
        updateAge: 60, //60secs
    },
    
    callbacks:{
        session: async({ session, token })=> {
            if(token){
                // console.log(token)
                session.user = {
                    ...session.user,
                    name: token.name || '',
                    email: token.email || '',
                    id: typeof token.id === 'string' ? token.id : '',
                }
            }
            return session;
        },
        jwt: async( { token, user } )=>{
            // console.log('user token => ',user)
            if (user) {
                token.id = user?.id;
                token.name = user?.name;
                token.email = user?.email;
            }
            return token;
        },
        authorized({ auth, request: { nextUrl } }) {

            const isLoggedIn = auth?.user;

            const isOnPortal = nextUrl.pathname === '/portal'

            const isOnDashboard = nextUrl.pathname === '/portal/dashboard'
            if (isOnDashboard) {
              if (isLoggedIn) return true;
              return false; // Redirect unauthenticated users to the login page
            }
            if (isLoggedIn && isOnPortal) {
              return Response.redirect(new URL('/portal/dashboard', nextUrl));
            }
            return true;
        },
    },
    providers:[],
}