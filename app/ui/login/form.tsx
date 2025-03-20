"use client"

import { authentication } from "@/app/lib/authenticate";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
    const router = useRouter();
    const [errors, setErrors] = useState<boolean>(false);
    const [checking, setChecking] = useState<boolean>(false);
    const formAction = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setChecking(true);
        const formData = new FormData(e.currentTarget)
        const result = await authentication(formData);
        console.log("Result from Authentication => ", result);

        if (result?.success) {
            router.push("/portal/dashboard");
            setChecking(false);
        } else {
            setErrors(true);
            setChecking(false);
        }
    };

    return (
        <div className="container w-[88%] lg:w-full min-h-[90vh] flex flex-col items-center justify-top py-10">
            <Image src={'/assets/login-anime.png'} className="2xl:w-[70%] h-auto mb-12" width={3000} height={1000} alt="Work Horizon - Login page" />
            <h2 className='text-2xl lg:text-3xl font-semibold capitalize text-sky-900 border-b border-orange-500 px-1 pb-1'>{`Welcome to Work Horizon's Portal`}</h2>
            <form onSubmit={formAction} className="flex flex-col border border-gray-300 rounded-lg mt-6 shadow-md p-6 w-[40%]">
                <label className="text-lg lg:text-xl font-[500] mb-1">Email Id:</label>
                <input
                    className="bg-gray-200 px-3 py-1 rounded-lg shadow-md"
                    type="text"
                    name="admin_email"
                    id="admin_email"
                    placeholder="Enter your email"
                />
                
                <label className="text-lg lg:text-xl font-[500] mb-1 mt-4">Password:</label>
                <input
                    className="bg-gray-200 px-3 py-1 rounded-lg shadow-md"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                />
                {
                    errors && <p className="text-md text-red-700 mt-2 ml-1">Invalid user-id or password. </p>
                }
                <button className={`text-lg lg:text-xl font-semibold mt-5 px-6 py-1 w-fit border-2 border-transparent rounded-lg tracking-wide mx-auto ${checking ? 'bg-gray-200 text-gray-700': 'bg-sky-900 text-gray-100 hover:text-sky-900 hover:border-sky-900 hover:bg-transparent'}`} aria-disabled={checking} disabled={checking} type="submit">{
                    checking ? 'Logging In...' : 'Login'
                }</button>
            </form>
            
        </div>
    );
}
