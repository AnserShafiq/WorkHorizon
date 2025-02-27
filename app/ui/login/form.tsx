"use client"

import { authentication } from "@/app/lib/authenticate";
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
        <div className="container w-[88%] lg:w-full">
            <h2>Login Form</h2>
            <form onSubmit={formAction} className="flex flex-col">
                <label>Admin Id</label>
                <input
                    className="bg-gray-200"
                    type="text"
                    name="admin_id"
                    id="admin_id"
                    placeholder="Enter your admin ID"
                />
                
                <label>Password</label>
                <input
                    className="bg-gray-200"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                />
                
                <button aria-disabled={checking} disabled={checking} type="submit">{
                    checking ? 'Logging In...' : 'Login'
            }</button>
            </form>
            {
                errors && <p>Invalid id or password</p>
            }
        </div>
    );
}
