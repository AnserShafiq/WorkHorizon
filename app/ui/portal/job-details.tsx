'use client'

import { JobFormData } from "@/app/lib/elements"
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

        const fetchCount = async() => {
            try {
                const response = await fetch(`/api/getJobs/applicantsCount/${jobid}`)
                const output = await response.json()
                console.log(output)
                setCount(output)
            } catch (error) {
                console.log('Unable to count applicants, Error: ',error);
            }
        }

        fetchJobDetails();
        fetchCount();

    },[jobid])
    return(
        <div className="container w-[88%] lg:w-[77%] 2xl:w-[70%] lg:min-h-[80vh] pt-8 pb-14 lg:py-14">
            <h3>Job id: {job?.title}</h3>
            <h4>{count}</h4>
        </div>
    )
}