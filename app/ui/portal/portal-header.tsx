'use client'
import { signOut } from "next-auth/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import DropDown from "../dropdown"


export default function PortalHeader(){
    const [allowAgents, setAllowAgents]=useState<boolean>(false)
    const Menu = [
        {
            name: 'Dashboard',
            link: '/portal/dashboard',
            active:false,
        },{
            name: 'Job Options',
            link: '/portal/dashboard/jobs-list',
            active:false,
            dropdown : [
                {
                    name: 'All Jobs',
                    link: '/portal/dashboard/jobs-list',
                },{
                    name: 'Add New Job',
                    link: '/portal/dashboard/new-job-addition',
                }
            ]
        },{
            name: 'All Applicants',
            link: '/portal/dashboard/applicants',
            active:false,
        },{
            name: 'Messages',
            link: '/portal/dashboard/contact-messages',
            active:false,
        }
    ]
    const [onLogin, setOnLogin] = useState<boolean>(false);
    const pathname = usePathname()    

    useEffect(() => {
        const AgentsAllowed = async() => {
            const User = await fetch('/api/getAdmin/activeUser').then(res => res.json());
            if(User?.post === 'admin' || User?.post==='Pak HR'){
                setAllowAgents(true);
            }
            else{
                setAllowAgents(false)
            }
        }
        if(pathname === '/portal'){
            setOnLogin(true)
        }else{
            setOnLogin(false)
            AgentsAllowed();
        }
    },[pathname])



    return(
        <div className='flex justify-end items-center gap-7'>
            {
                onLogin ? 
                <h3 className="text-xl text-sky-900 font-[500] italic capitalize tracking-wide border-b border-orange-500 pb-1 px-1">{`Let's get Login !!!`}</h3>
                :
                <>

                    {
                        Menu.map((item, index) => 
                            item.dropdown ? <DropDown mainMenu={item} key={index} /> : <Link href={item.link} key={index} className={`relative text-xl font-semibold tracking-wide transitive-underline ${item.active ? 'text-[#F7801E]' : 'text-sky-900'} hover:text-sky-800`} >{item.name}</Link>
                        )
                    }
                    {
                        allowAgents ? <Link href={'/portal/dashboard/agents'} className={`relative text-xl font-semibold tracking-wide transitive-underline text-sky-900 hover:text-sky-800`} >Agents</Link> : null
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