'use client'

import { useEffect, useState } from "react";
import JobDescription from "./description";
import SingleJobHead from "./innerPageHead";
import { JobFormData } from "@/app/lib/elements";
import Loading from "@/app/loading";

type SetActiveSection = (section: string) => void

export default function JobOverview({jobid}:{jobid:number}){
    const [activeSection, setActiveSection] = useState<string>('overview')
    const [job, setJob] = useState<JobFormData | null>(null); // State to store the job data

    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const baseUrl = window.location.origin; // Get the base URL dynamically
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
                console.log('From Job page: ', matchedJob);
                setJob(matchedJob[0]); // Set the job data in state
            } catch (error) {
                console.error('Error fetching job details:', error);
            }
        };

        fetchJobDetails();
    }, [jobid]); // Fetch job details when jobid changes

    if (!job) {
        return <Loading />; // Show a loading state while fetching data
    }

    console.log('Job Overview.tsx: ', job)
    return(
        <>
            <SingleJobHead job={job} activeSection={activeSection} setActiveSection={setActiveSection as SetActiveSection} />
            {
                activeSection === 'overview' ? 
                <JobDescription JobDetails={job} setActiveSection={setActiveSection}/>
                // <h3>{job.title}</h3>
                :<h3>Application Page</h3>
            }
        </>
    )
}