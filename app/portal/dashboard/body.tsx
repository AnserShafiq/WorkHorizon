'use client'
import { User } from '@/app/lib/elements';
import DashboardBody from '@/app/ui/portal/dashboard';
import { useEffect, useState } from 'react';

export default function DashboardMainBody() {

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