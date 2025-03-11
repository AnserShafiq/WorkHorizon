'use client'
import { signOut } from "next-auth/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"


export default function PortalHeader(){
    const Menu = [
        {
            name: 'Dashboard',
            link: '/portal/dashboard',
            active:false,
        },{
            name: 'Add New Job',
            link: '/portal/dashboard/new-job-addition',
            active:false,
        },{
            name: 'Jobs List',
            link: '',
            active:false,
        },{
            name: 'All Applicants',
            link: '',
            active:false,
        },
    ]
    const [onLogin, setOnLogin] = useState<boolean>(false);
    const pathname = usePathname()
    

    useEffect(() => {
        if(pathname === '/portal'){
            setOnLogin(true)
        }else{
            setOnLogin(false)
        }
    },[pathname])

    return(
        <div className='flex justify-end items-center gap-7'>
            {
                onLogin ? 
                <h3 className="text-xl text-sky-900 font-[500] italic capitalize tracking-wide border-b border-orange-500 pb-1 px-1">Let's get Login !!!</h3>
                :
                <>
                    {
                        Menu.map((item, index) => 
                            <Link href={item.link} key={index} className={`relative text-lg xl:text-lg font-semibold tracking-wide transitive-underline ${item.active ? 'text-[#F7801E]' : 'text-sky-900'} hover:text-sky-800`} >{item.name}</Link>
                        )
                    }
                    <button 
                        onClick={() => signOut({callbackUrl: '/portal'})} 
                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition-colors"
                        >
                        Sign Out
                    </button>
                </>
            }
        </div>
    )
}