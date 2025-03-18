'use client'

import { JobFormData } from "@/app/lib/elements"
import Link from "next/link";
import { useEffect, useState } from "react"

export default function JobDetails({jobid}:{jobid: string | number | undefined}){
    const [job, setJob] = useState<JobFormData|null>(null)
    const [count, setCount] = useState<number>(0);
    
    // For Getting Job's Details
    useEffect(() => {
        const baseUrl = window.location.origin; // Get the base URL dynamically
        const fetchJobDetails = async () => {
            try {
                const response = await fetch(`${baseUrl}/api/getJobs/jobDetails`, {
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

        const fetchCount = async () => {
            try {
                if (!jobid) {
                    console.error("Job ID is missing!");
                    return;
                }
        
                const url = `${process.env.NEXT_PUBLIC_API_URL}/api/getJobs/applicantscount`;
                console.log("Fetching count from:", url);
                
                const response = await fetch(url,{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({jobid})
                });
                
                if (!response.ok) {
                    throw new Error(`API returned status ${response.status}`);
                }
                
                const output = await response.json();
                console.log("Fetched count:", output?.count);
                setCount(output.count);
            } catch (error) {
                console.error("Unable to count applicants, Error:", error);
            }
        };
        

        fetchJobDetails();
        fetchCount();

    },[jobid])
    return(
        <div className="container w-[88%] lg:w-[77%] 2xl:w-[70%] lg:min-h-[80vh] pt-8 pb-14 lg:py-14">
            <div className='grid grid-cols-[15%,85%]'>
                <h3 className="text-xl font-normal p-4 border ">Job title:</h3>
                <h3 className="text-xl font-normal p-4 border ">{job?.title}</h3>

                <h3 className="text-xl font-normal p-4 border ">Total Applicants:</h3>
                <h3 className="text-xl font-normal p-4 border ">{count}</h3>

                <h3 className="text-xl font-normal p-4 border ">Salary range:</h3>
                <h3 className="text-xl font-normal p-4 border ">{job?.salary}</h3>

                <h3 className="text-xl font-normal p-4 border ">Timing:</h3>
                <h3 className="text-xl font-normal p-4 border ">{job?.timing}</h3>

                <h3 className="text-xl font-normal p-4 border ">Work type:</h3>
                <h3 className="text-xl font-normal p-4 border ">{job?.worktype}</h3>

                <h3 className="text-xl font-normal p-4 border ">Contract:</h3>
                <h3 className="text-xl font-normal p-4 border ">{job?.contract}</h3>

                <h3 className="text-xl font-normal p-4 border ">Department:</h3>
                <h3 className="text-xl font-normal p-4 border ">{job?.department}</h3>

                <h3 className="text-xl font-normal p-4 border ">Job positions:</h3>
                <h3 className="text-xl font-normal p-4 border ">{job?.positions}</h3>

                <h3 className="text-xl font-normal p-4 border ">Job intro:</h3>
                <h3 className="text-xl font-normal p-4 border ">{job?.intro}</h3>

                <h3 className="text-xl font-normal p-4 border ">Description:</h3>
                <ul className="list-disc p-4 pl-8 overflow-auto border">
                    {job?.description.split("\n").map((line, index) => (
                        line.trim() && <li className='text-xl font-normal ' key={index}>{line}</li>
                    ))}
                </ul>

                <h3 className="text-xl font-normal p-4 border ">Skills required:</h3>
                <ul className="list-disc p-4 pl-8 overflow-auto border">
                    {job?.skills.split("\n").map((line, index) => (
                        line.trim() && <li className='text-xl font-normal ' key={index}>{line}</li>
                    ))}
                </ul>

                <h3 className="text-xl font-normal p-4 border ">Compensations:</h3>
                <ul className="list-disc p-4 pl-8 overflow-auto border">
                    {job?.compensations.split("\n").map((line, index) => (
                        line.trim() && <li className='text-xl font-normal ' key={index}>{line}</li>
                    ))}
                </ul>

                <h3 className="text-xl font-normal p-4 border ">Qualifications:</h3>
                <ul className="list-disc p-4 pl-8 overflow-auto border">
                    {job?.qualifications.split("\n").map((line, index) => (
                        line.trim() && <li className='text-xl font-normal ' key={index}>{line}</li>
                    ))}
                </ul>

                <h3 className="text-xl font-normal p-4 border ">Applicants will gain:</h3>
                <ul className="list-disc p-4 pl-8 overflow-auto border">
                    {job?.whatyouwillgain.split("\n").map((line, index) => (
                        line.trim() && <li className='text-xl font-normal ' key={index}>{line}</li>
                    ))}
                </ul>

                <h3 className="text-xl font-normal p-4 border ">Join invite:</h3>
                <h3 className="text-xl font-normal p-4 border ">{job?.jointagline}</h3>

                <h3 className="text-xl font-normal p-4 border ">Job status:</h3>
                <h3 className="text-xl font-normal p-4 border ">{job?.status}</h3>

                <div className='col-span-full flex items-center py-8 gap-8 justify-center'>
                    <Link href={`/portal/dashboard/jobs-list/whjob_${jobid}/edit`} className='px-4 py-2 bg-sky-900 font-semibold text-xl text-gray-100 tracking-wider rounded-lg transition-transform duration-500 ease-in-out hover:scale-[1.03] shadow-lg'>Edit</Link>
                    <button className='px-4 py-2 bg-sky-900 font-semibold text-xl text-gray-100 tracking-wider rounded-lg transition-transform duration-500 ease-in-out hover:scale-[1.03] shadow-lg'>De-active</button>
                    <button className='px-4 py-2 bg-sky-900 font-semibold text-xl text-gray-100 tracking-wider rounded-lg transition-transform duration-500 ease-in-out hover:scale-[1.03] shadow-lg'>Make it live</button>
                    <button className='px-4 py-2 bg-sky-900 font-semibold text-xl text-gray-100 tracking-wider rounded-lg transition-transform duration-500 ease-in-out hover:scale-[1.03] shadow-lg'>Delete</button>
                </div>
                              
            </div>
        </div>
    )
}