'use client'
import { JobFormData } from "@/app/lib/elements";
import Link from "next/link";
import { useEffect, useState } from "react"
import {TailSpin} from 'react-loader-spinner'

export default function JobsList(){
    const [loading, setLoading] = useState<boolean>(true);
    const [jobsList, setJobsList] = useState<JobFormData[]>([])

    useEffect(() => {
        const jobsList = async () => {
            const data = await fetch('/api/getJobs');
            const List = await data.json();
            console.log('List of jobs: ', List)
            setJobsList(List);
            setLoading(false)
        };
    
        const timeoutId = setTimeout(() => {
            jobsList();
        }, 3000);
    
        return () => clearTimeout(timeoutId);
    }, []); 
    

    return(
        <div className='container w-[88%] lg:w-[77%] 2xl:w-[70%] lg:min-h-[80vh] pt-8 pb-14 lg:py-14'>
            <h3>Jobs List</h3>
            <table className='w-full'>
                <thead className=''>
                    <tr className='bg-gray-100 rounded-t-xl grid grid-cols-[30%,30%,20%,20%] w-full'>
                        <th className="border rounded-tl-xl px-4 py-5 text-lg lg:text-lg capitalize tracking-wide">Job title</th>
                        <th className="border px-4 py-5 text-lg lg:text-lg capitalize tracking-wide">Department</th>
                        <th className="border px-4 py-5 text-lg lg:text-lg capitalize tracking-wide">Applicants</th>
                        <th className="border rounded-tr-xl px-4 py-5 text-lg lg:text-lg capitalize tracking-wide">Status</th>
                    </tr>
                </thead>
                <tbody className="">
                    {
                        loading ? 
                        <tr>
                        <td className="col-span-full min-h-[50vh] flex flex-col gap-2 items-center justify-center">
                            <TailSpin visible={true} height={50} width={50} color='#0C4A6E' ariaLabel='tail-spin-loading' radius={1}/>
                            <h3 className='text-md text-orange-500 font-semibold tracking-wide text-center'>Loading..</h3>
                        </td>
                        </tr>
                        : 
                        
                        jobsList.map((job, index) => 
                        <tr key={index} onClick={() => window.location.href = `/portal/dashboard/jobs-list/WHJOB_${job.jobid}`} className="cursor-pointer grid grid-cols-1 lg:grid-cols-[30%,30%,20%,20%] items-center w-full border-b border-gray-300 hover:bg-gray-100 py-2">
                            <td className="px-4 py-1 lg:py-3 font-semibold capitalize text-sky-900 text-lg lg:text-lg">
                                    <Link href={`/careers/jobs/${job.jobid}`} className="hover:underline">
                                        {job.title}
                                    </Link>
                                </td>
                                <td className="px-4 py-1 lg:py-3 text-start lg:text-center text-md">
                                    <span className="font-semibold mr-2 inline-flex lg:hidden">Department: </span>
                                    {job.department}
                                </td>
                                <td className="px-4 py-1 lg:py-3 text-start lg:text-center text-md">
                                <span className="font-semibold mr-2 inline-flex lg:hidden">Applicants: </span>
                                    1
                                </td>
                                <td className="px-4 py-1 lg:py-3 text-start lg:text-center text-md capitalize">
                                    <span className="font-semibold mr-2 inline-flex lg:hidden">Status: </span>
                                    {job.status}
                                </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}