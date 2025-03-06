'use client'

import Image from "next/image";
import Link from "next/link";
import ActiveSectionMenu from "./activeSection";
import { JobOptions } from "@/app/lib/joboptions";
import { Dot } from "lucide-react";

export default function SingleJobHead({jobid, activeSection, setActiveSection}:{jobid:string, activeSection:string, setActiveSection: Function}){

    const matchedJob = JobOptions.filter((job) => job.jobid === jobid)
    const Job = matchedJob[0]
    return(
        <div className='bg-neutral-100 w-full shadow-md shadow-gray-200'>
            
            <div className='container w-[88%] relative flex flex-col bg-neutral-100 items-center justify-center lg:w-full py-10 lg:pt-8 lg:pb-0'>
                <Link href={'/careers/jobs'}><Image className="mb-5 lg:w-[300px] lg:h-auto object-cover" src={'/assets/Logo.png'} width={300} height={200} alt="Work Horizon"/></Link>
                <h3 className="text-xl lg:text-2xl 2xl:text-3xl capitalize mb-3">{Job.title}</h3>
                <div className='flex justify-center items-center gap-4 mb-2'>
                    <h4 className="text-md text-gray-600 font-[500]">{Job.worktype}</h4>
                    <Dot className="text-gray-600"/>
                    <h4 className="text-md text-gray-600 font-[500]">{Job.department}</h4>
                    <Dot className="text-gray-600"/>
                    <h4 className="text-md text-gray-600 font-[500]">{Job.jobtype === 'p' ? 'Permanent' : 'Contractual'}</h4>
                </div>
                <ActiveSectionMenu activeSection={activeSection} setActiveSection={setActiveSection}/>
            </div>
        </div>
    )
}