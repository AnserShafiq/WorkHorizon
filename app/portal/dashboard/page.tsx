'use client'
import JobPostingForm from '@/app/ui/portal/jobpostingform';
import { signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function Dashboard() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [user, setUser] = useState<any>({});
    useEffect(() => {
        const fetchUser = async () => {
            const resp = await fetch('/api/getAdmin/activeUser').then(res => res.json());
            setUser(resp)
        }
        fetchUser();
    },[])
    console.log('User =>', user);

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Welcome to Dashboard, {user?.name}</h1>
            <JobPostingForm />
            <div className="flex justify-between items-center">
                <p className="text-gray-600">You are successfully logged in.</p>
                
                <button 
                    onClick={() => signOut({callbackUrl: '/portal'})} 
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition-colors"
                >
                    Sign Out
                </button>
            </div>
        </div>
    )
}