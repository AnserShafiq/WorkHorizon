'use client'
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


export default function JobsHead(){

    const pathname = usePathname();
    const [singleJob, setSingleJob] =  useState<boolean>(false);
    useEffect(() => {
        if(pathname.includes('/jobs/')){
            setSingleJob(true)
            console.log('pathname => ', pathname)
        }else{
            setSingleJob(false)
        }
    },[pathname])
    return(
        <div className='bg-neutral-100 w-full shadow-md shadow-gray-200'>
            <div className={`container w-[88%] lg:w-[77%] 2xl:w-[70%] flex pt-6 ${singleJob ? 'hidden':''}`}>
                    <Link href={'/'} className="hidden lg:block text-gray-500 font-semibold text-sm underline">Home</Link>
                    <ArrowRight className="w-4 h-auto text-gray-500 mr-2 lg:mx-3 rotate-180 lg:rotate-0"/>
                    <Link href={'/careers'} className="text-gray-500 font-semibold text-sm underline">Careers</Link>
                    <ArrowRight className="hidden lg:block w-4 h-auto text-gray-500 mx-3"/>
                    <Link href={'/careers/jobs'} className="hidden lg:block text-orange-500 font-semibold text-sm underline">Jobs</Link>
                </div>
            <div className='container w-[88%] flex flex-col bg-neutral-100 items-center justify-center lg:w-full py-8 lg:pt-8 lg:pb-12'>
                
                <Link href={'/careers/jobs'}><Image className="mb-3 w-[250px] lg:w-[300px] h-auto object-cover" src={'/assets/Logo.png'} width={300} height={200} alt="Work Horizon"/></Link>
                {
                    !singleJob ?
                    <>
                        <h3 className="text-3xl 2xl:text-4xl capitalize text-sky-900 font-bold mb-4 text-center">Job options at <br className='block lg:hidden'/>Work Horizon</h3>
                        <p className="text-md lg:text-lg 2xl:text-xl font-normal tracking-wide text-center lg:mx-[20%]">{`We're eager to connect with talented individuals. Below, you'll find the current openings at Work Horizon where we’re looking for new team members.`}</p> 
                    </>
                    : null
                }
            </div>
        </div>
    )
}