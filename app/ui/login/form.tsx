"use client"

import { authentication } from "@/app/lib/authenticate"

// import{useSession} from 'next-auth/react'

export default function LoginForm(){
    // const {data:session} = useSession()
    const formAction = async(formData: FormData) => {
        const result = authentication(undefined, formData);
        console.log('Result from Authentication=> ', result);
    }
    return(
        <div className="container w-[88%] lg:w-full">
            Login Form
            <form className="flex flex-col">
                <label>
                    Admin Id
                </label>
                <input className="bg-gray-200" type='text' name='adminid' id='adminid' placeholder="enter your admin id"/>
                <label>
                    Password
                </label>
                <input className="bg-gray-200" type='text' name='password' id='password' placeholder="enter your password"/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}