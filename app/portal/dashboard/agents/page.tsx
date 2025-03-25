'use client'
import { User } from "@/app/lib/elements";
import AgentsPage from "@/app/ui/portal/agents/agents";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";

export default function Agents() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                console.log('Fetching user...');
                const resp = await fetch('/api/getAdmin/activeUser');
                if (!resp.ok) throw new Error('Failed to fetch user');
                
                const data = await resp.json();
                setUser(data);
            } catch (error) {
                console.error('Error fetching user:', error);
                setUser(null);
            } finally {
                setLoading(false); // Ensure loading state is always updated
            }
        };
        fetchUser();
    }, []);

    useEffect(() => {
        if (loading) return; // Avoid running before user is fetched

        if (!user || (user.post !== 'Pak HR' && user.post !== 'admin')) {
            console.warn('Unauthorized user, redirecting...');
            window.location.href = '/portal/dashboard';
        }
    }, [user, loading]);

    return (
        <>
            {loading ? (
                <div className='flex flex-col items-center justify-center w-full h-[90vh]'>
                    <TailSpin visible={true} height={50} width={50} color='#0C4A6E' ariaLabel='tail-spin-loading' radius={1} />
                    <h3 className='text-md text-orange-500 font-semibold tracking-wide text-center'>Loading..</h3>                     
                </div>
            ) : (
                <AgentsPage user={user}/> 
            )}
        </>
    );
}
