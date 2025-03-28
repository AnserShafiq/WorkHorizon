'use client'

import { JobApplications } from "@/app/lib/elements"
import { ArrowRightSquare, Asterisk } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react"
import { TailSpin } from "react-loader-spinner";

export default function ApplicantsView(){

    const [newApplicants, setNewApplicants] = useState<JobApplications[]>([]);
    const [loading, setLoading]=useState<boolean>(true)
    useEffect(() => {
        const GetApplicants = async() =>{ 
            const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getAllApplicants/limit`)
            const applicants = await resp.json()
            console.log('Applicants => ', applicants)
            setNewApplicants(applicants);
            setLoading(false)
        } 
        GetApplicants();
    },[])

    return(
        <div className='w-[85%] my-4 bg-gray-200 rounded-3xl p-8 mx-auto shadow-xl shadow-gray-300'>
            <div className='bg-gray-100 h-full flex flex-col items-center rounded-3xl py-3 relative'>  
                <h3 className="w-fit mx-auto mt-2 text-2xl font-semibold text-sky-900 border-b border-orange-500">Latest Applicants </h3>
                <div className='mx-4 mt-4 w-[88%] min-h-[200px] max-h-[200px] 2xl:max-h-[250px] 2xl:min-h-[250px]'>
                    {

                        loading ? 
                        <div className="w-full h-full flex flex-col justify-center items-center ">
                            <TailSpin visible={true} height={50} width={50} color='#0C4A6E' ariaLabel='tail-spin-loading' radius={1} />
                        </div>
                        :
                        newApplicants.map((app) => 
                            <div key={app.jobid} className="grid items-center border-b border-gray-200 text-lg mb-1 grid-cols-[13%,87%]">
                                <h4 className="py-2 px-3 text-orange-500 "><ArrowRightSquare /> </h4>
                                <Link href={`/portal/dashboard/jobs-list/whjob_${app.id}`} className={`flex relative w-fit py-2 ${app.status === 'New' ? 'text-sky-900 font-semibold ':'' } hover:text-sky-900 hover:underline transition-all ease-in-out duration-300 hover:scale-[1.02] `}>{`${app.firstname} ${app.lastname}`}{app.status === 'New' ? <Asterisk className="text-red-600 absolute -right-3 w-3 h-auto" /> : ''}</Link>
                            </div>
                        )
                    }
                </div>
                <Link href='/portal/dashboard/applicants' className="mt-6 px-4 py-2 text-gray-100 rounded-xl font-semibold tracking-wide bg-sky-900 border-2 border-transparent hover:border-sky-900 hover:text-sky-900 hover:bg-transparent w-fit mx-auto transition-transform ease-in-out duration-300 hover:scale-[1.03]">View All</Link>
            </div>
        </div>
    )
}