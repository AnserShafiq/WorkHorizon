'use client'
import { User } from '@/app/lib/elements';
import DashboardBody from '@/app/ui/portal/dashboard';
import { signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function Dashboard() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [user, setUser] = useState<User | null>(null);
    useEffect(() => {
        const fetchUser = async () => {
            const resp = await fetch('/api/getAdmin/activeUser').then(res => res.json());
            setUser(resp)
        }
        fetchUser();
    },[])
    // console.log('User =>', user);

    return (
        <>
            <DashboardBody user={user}/>
        </>
    )
}