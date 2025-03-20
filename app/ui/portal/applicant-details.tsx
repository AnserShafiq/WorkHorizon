'use client'

import { JobApplications } from "@/app/lib/elements"
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react"
import { TailSpin } from "react-loader-spinner";


export default function ApplicantDetails({id}:{id:string | undefined}){

    const [applicant, setApplicant] = useState<JobApplications | null>(null);
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        const GetApplicant = async () => {
            try {
                const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getAllApplicants/getApplicant?id=${id}`);
                const received = await resp.json();
                // console.log(received);
                setApplicant(received[0]) // Uncomment this when needed
                setLoading(false)
            } catch (error) {
                console.error("Error fetching applicant:", error);
            }
        };
    
        if (id) GetApplicant();  // Ensure id is defined before making the request
    }, [id]);
    
    // eslint-disable-next-line
    const SplitDateAndTime = (datePlusTime: any) => {
        const target = datePlusTime.toString();
        const [date, fullTime] = target ? target.split(',') : ['', ''];
        const time = fullTime ? fullTime.split('.')[0] : '';
        return `Date: ${date}, Time: ${time}`;
    }

    return(
        <div className="container w-[88%] lg:w-[67%] 2xl:w-[57%] lg:min-h-[88vh] relative flex flex-col items-center justify-center pt-8 pb-14 lg:py-14">
            {
                loading ? 
                <div className='w-full h-[80vh] flex flex-col items-center justify-center'>
                    <TailSpin visible={true} height={50} width={50} color='#0C4A6E' ariaLabel='tail-spin-loading' radius={1} />
                    <h3 className='text-md text-orange-500 font-semibold tracking-wide text-center'>Loading..</h3>                          
                </div>
                :
                <>
                
                <Link className="flex gap-1 absolute top-10 left-0 text-md text-sky-900 border-b border-orange-500 " href='/portal/dashboard/applicants'><ArrowLeft className="w-4 h-auto" /> Back</Link>

                <div className='grid grid-cols-[20%,80%] w-full'>
                    <h3 className="text-md font-normal p-4 border ">Applicant name:</h3>
                    <h3 className="text-md font-normal p-4 border ">{`${applicant?.firstname} ${applicant?.lastname}`}</h3>

                    <h3 className="text-md font-normal p-4 border ">Job applied for:</h3>
                    <h3 className="text-md font-normal p-4 border ">{applicant?.jobtitle}</h3>

                    <h3 className="text-md font-normal p-4 border ">Email:</h3>
                    <h3 className="text-md font-normal p-4 border ">{applicant?.email}</h3>

                    <h3 className="text-md font-normal p-4 border ">Contact number:</h3>
                    <h3 className="text-md font-normal p-4 border ">{applicant?.contactnumber}</h3>

                    <h3 className="text-md font-normal p-4 border ">Address:</h3>
                    <h3 className="text-md font-normal p-4 border ">{applicant?.address}</h3>

                    <h3 className="text-md font-normal p-4 border ">Experience:</h3>
                    <h3 className="text-md font-normal p-4 border ">{applicant?.experience}</h3>

                    <h3 className="text-md font-normal p-4 border ">Summary:</h3>
                    <h3 className="text-md font-normal p-4 border ">{applicant?.summary}</h3>

                    <h3 className="text-md font-normal p-4 border ">Joining Date:</h3>
                    <h3 className="text-md font-normal p-4 border ">{applicant?.joiningdate}</h3>

                    <h3 className="text-md font-normal p-4 border ">Resume:</h3>
                    <div className="p-4 border  ">
                    <Link href={applicant?.resumelink || ''} className="underline text-md font-normal text-sky-900">View</Link>
                    </div>

                    <h3 className="text-md font-normal p-4 border ">Applied on:</h3>
                    <h3 className="text-md font-normal p-4 border ">{SplitDateAndTime(applicant?.submissiondate.split('T'))}</h3>

                </div>

                </>
            }
        </div>
    )
}