'use client'

import { JobFormData } from "@/app/lib/elements"
import Link from "next/link";
import { useEffect, useState } from "react"
import { TailSpin } from "react-loader-spinner";

export default function JobDetails({jobid}:{jobid: string | number | undefined}){
    const [job, setJob] = useState<JobFormData|null>(null)
    // const [count, setCount] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    // For Getting Job's Details
    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getJobs/jobDetails`, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify(jobid),
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch job details');
                }

                const matchedJob: JobFormData[] = await response.json();
                setJob(matchedJob[0]); // Set the job data in state
            } catch (error) {
                console.error('Error fetching job details:', error);
            }
        };

        fetchJobDetails();
        setLoading(false)
    },[jobid])


// eslint-disable-next-line
    const handleStatusChangeCall = async (id: string, status: any) => {
        const action = status === 'active' ? 'Not active' : 'Active';

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getAdmin/setStatus`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ jobid: id, status: action })
        });

        if (res.ok) {
            console.log('Status updated');
            window.location.reload()
        } else {
            console.error('Failed to update status');
        }
    };


    const handleDeleteCall = async(jobid:string) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getAdmin/editJob`, {
            method: 'DELETE',
            body: JSON.stringify(jobid),
        })
        if(res.status === 200){
            window.location.reload();
        }
    }

    return(
        <div className="container w-[88%] lg:w-[67%] 2xl:w-[57%] lg:min-h-[80vh] pt-8 pb-14 lg:py-14">
            {
                loading ? 
                <div className='w-full h-[80vh] flex flex-col items-center justify-center'>
                    <TailSpin visible={true} height={50} width={50} color='#0C4A6E' ariaLabel='tail-spin-loading' radius={1} />
                    <h3 className='text-md text-orange-500 font-semibold tracking-wide text-center'>Loading..</h3>                          
                </div>
                :
                <div className='grid grid-cols-[15%,85%]'>
                    <h3 className="text-md font-normal p-4 border ">Job title:</h3>
                    <h3 className="text-md font-normal p-4 border ">{job?.title}</h3>

                    <h3 className="text-md font-normal p-4 border ">Total Applicants:</h3>
                    <h3 className="text-md font-normal p-4 border ">{job?.applications}</h3>

                    <h3 className="text-md font-normal p-4 border ">Salary range:</h3>
                    <h3 className="text-md font-normal p-4 border ">{job?.salary}</h3>

                    <h3 className="text-md font-normal p-4 border ">Timing:</h3>
                    <h3 className="text-md font-normal p-4 border ">{job?.timing}</h3>

                    <h3 className="text-md font-normal p-4 border ">Work type:</h3>
                    <h3 className="text-md font-normal p-4 border ">{job?.worktype}</h3>

                    <h3 className="text-md font-normal p-4 border ">Contract:</h3>
                    <h3 className="text-md font-normal p-4 border ">{job?.contract}</h3>

                    <h3 className="text-md font-normal p-4 border ">Department:</h3>
                    <h3 className="text-md font-normal p-4 border ">{job?.department}</h3>

                    <h3 className="text-md font-normal p-4 border ">Job positions:</h3>
                    <h3 className="text-md font-normal p-4 border ">{job?.positions}</h3>

                    <h3 className="text-md font-normal p-4 border ">Job intro:</h3>
                    <h3 className="text-md font-normal p-4 border ">{job?.intro}</h3>

                    <h3 className="text-md font-normal p-4 border ">Description:</h3>
                    <ul className="list-disc p-4 pl-8 overflow-auto border">
                        {job?.description.split("\n").map((line, index) => (
                            line.trim() && <li className='text-md font-normal ' key={index}>{line}</li>
                        ))}
                    </ul>

                    <h3 className="text-md font-normal p-4 border ">Skills required:</h3>
                    <ul className="list-disc p-4 pl-8 overflow-auto border">
                        {job?.skills.split("\n").map((line, index) => (
                            line.trim() && <li className='text-md font-normal ' key={index}>{line}</li>
                        ))}
                    </ul>

                    <h3 className="text-md font-normal p-4 border ">Compensations:</h3>
                    <ul className="list-disc p-4 pl-8 overflow-auto border">
                        {job?.compensations.split("\n").map((line, index) => (
                            line.trim() && <li className='text-md font-normal ' key={index}>{line}</li>
                        ))}
                    </ul>

                    <h3 className="text-md font-normal p-4 border ">Qualifications:</h3>
                    <ul className="list-disc p-4 pl-8 overflow-auto border">
                        {job?.qualifications.split("\n").map((line, index) => (
                            line.trim() && <li className='text-md font-normal ' key={index}>{line}</li>
                        ))}
                    </ul>

                    <h3 className="text-md font-normal p-4 border ">Applicants will gain:</h3>
                    <ul className="list-disc p-4 pl-8 overflow-auto border">
                        {job?.whatyouwillgain.split("\n").map((line, index) => (
                            line.trim() && <li className='text-md font-normal ' key={index}>{line}</li>
                        ))}
                    </ul>

                    <h3 className="text-md font-normal p-4 border ">Join invite:</h3>
                    <h3 className="text-md font-normal p-4 border ">{job?.jointagline}</h3>

                    <h3 className="text-md font-normal p-4 border ">Job status:</h3>
                    <h3 className="text-md font-normal p-4 border ">{job?.status}</h3>

                    <div className='col-span-full flex items-center py-8 gap-8 justify-center'>
                        <Link href={`/portal/dashboard/jobs-list/whjob_${jobid}/edit`} className='px-4 py-2 bg-sky-900 font-semibold text-md text-gray-100 tracking-wider rounded-lg transition-transform duration-500 ease-in-out hover:scale-[1.03] shadow-lg'>Edit</Link>
                        <button className='px-4 py-2 bg-sky-900 font-semibold text-md text-gray-100 tracking-wider rounded-lg transition-transform duration-500 ease-in-out hover:scale-[1.03] shadow-lg' onClick={() => handleStatusChangeCall(job?.jobid, job?.status)}>{job?.status === 'Active' ? 'Deactivate':'Make it live'}</button>
                        <button className='px-4 py-2 bg-sky-900 font-semibold text-md text-gray-100 tracking-wider rounded-lg transition-transform duration-500 ease-in-out hover:scale-[1.03] shadow-lg' onClick={() => handleDeleteCall(job?.jobid)}>Delete</button>
                    </div>
                                
                </div>
            }
        </div>
    )
}