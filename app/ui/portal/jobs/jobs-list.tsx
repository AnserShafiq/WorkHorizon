'use client'
import { JobFormData } from "@/app/lib/elements";
import Link from "next/link";
import { useEffect, useState } from "react"
import { TailSpin } from 'react-loader-spinner'

// interface Applicants {
//     jobid: string,
//     count: number,
// }

export default function JobsList() {
    const [loading, setLoading] = useState<boolean>(true);
    // const [countLoading, setCountLoading] = useState<boolean>(false);
    const [jobsList, setJobsList] = useState<JobFormData[]>([]);
    // const [applicants, setApplicants] = useState<Applicants[]>([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getJobs`);
                const jobList = await response.json();
                setJobsList(jobList);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    // useEffect(() => {
    //     if (jobsList.length === 0) return;

    //     const fetchCounts = async () => {
    //         const counts: Applicants[] = await Promise.all(
    //             jobsList.map(async (job) => {
    //                 try {
    //                     const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getJobs/applicantscount?jobid=${job.jobid}`);
    //                     if (resp.ok) {
    //                         const { count } = await resp.json();
    //                         return { jobid: job.jobid, count };
    //                     } else {
    //                         console.error(`Error fetching count for job ${job.jobid}`);
    //                         return { jobid: job.jobid, count: 0 };
    //                     }
    //                 } catch (error) {
    //                     console.error(`Error fetching applicant count for ${job.jobid}:`, error);
    //                     return { jobid: job.jobid, count: 0 };
    //                 }
    //             })
    //         );

    //         setApplicants(counts);
    //         setCountLoading(false);
    //     };

    //     fetchCounts();

    // }, [jobsList]);

    // const getApplicantsCount = (jobid: string) => {
    //     return applicants.find(app => app.jobid === jobid)?.count ?? 0;
    // }


    const handleStatusChangeCall = async (id: string, status: string) => {
        const action = status === 'Active' ? 'Not active' : 'Active';

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

    const handleDeleteCall = async(jobid: string) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getAdmin/editJob`, {
            method: 'DELETE',
            body: JSON.stringify(jobid),
        })
        if(res.ok){
            window.location.reload();
        }
    }

    return (
        <div className='container w-[88%] lg:w-[77%] 2xl:w-[70%] lg:min-h-[80vh] pt-8 pb-14 lg:py-14'>
            <h3 className="text-2xl lg:text-3xl font-semibold text-sky-900 border-b-2 px-1 mx-auto mb-5 border-orange-500 w-fit">Jobs List</h3>
            <table className='w-full'>
                <thead>
                    <tr className='bg-gray-100 rounded-t-xl grid grid-cols-[30%,25%,15%,10%,20%] w-full'>
                        <th className="border rounded-tl-xl px-4 py-5 text-lg capitalize tracking-wide">Job title</th>
                        <th className="border px-4 py-5 text-lg capitalize tracking-wide">Department</th>
                        <th className="border px-4 py-5 text-lg capitalize tracking-wide">Applicants</th>
                        <th className="border px-4 py-5 text-lg capitalize tracking-wide">Status</th>
                        <th className="border rounded-tr-xl px-4 py-5 text-lg capitalize tracking-wide">-</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td className="col-span-full min-h-[50vh] flex flex-col gap-2 items-center justify-center">
                                <TailSpin visible={true} height={50} width={50} color='#0C4A6E' ariaLabel='tail-spin-loading' radius={1} />
                                <h3 className='text-md text-orange-500 font-semibold tracking-wide text-center'>Loading..</h3>
                            </td>
                        </tr>
                    ) : (
                        jobsList.map((job) =>
                            <tr key={job.jobid} className="grid grid-cols-1 lg:grid-cols-[30%,25%,15%,10%,20%] items-center w-full border-b border-gray-300 hover:bg-gray-100 py-2">
                                <td className="px-4 py-1 lg:py-3 font-semibold capitalize text-sky-900 text-lg lg:text-lg">
                                    <Link href={`/portal/dashboard/jobs-list/whjob_${job.jobid}`} className="underline">
                                        {job.title}
                                    </Link>
                                </td>
                                <td className="px-4 py-1 lg:py-3 text-start lg:text-center text-md">
                                    <span className="font-semibold mr-2 inline-flex lg:hidden">Department: </span>
                                    {job.department}
                                </td>
                                <td className="px-4 py-1 lg:py-3 text-start lg:justify-center lg:flex  lg:text-center text-md">
                                    <span className="font-semibold mr-2 inline-flex lg:hidden">Applicants: </span>
                                    {job.applications}
                                    {/* {
                                        countLoading ? 
                                        <TailSpin visible={true} height={20} width={20} color='#0C4A6E' ariaLabel='tail-spin-loading' radius={1} />
                                        : 
                                        getApplicantsCount(job.jobid)
                                    } */}
                                </td>
                                <td className="px-4 py-1 lg:py-3 text-start lg:text-center text-md capitalize">
                                    <span className="font-semibold mr-2 inline-flex lg:hidden">Status: </span>
                                    {job.status}
                                </td>
                                <td className="px-4 py-1 lg:py-3 text-start lg:text-center text-md capitalize flex items-center justify-center gap-4 ">
                                    <span className="font-semibold mr-2 inline-flex lg:hidden">Status: </span>
                                    <Link className='border-b border-sky-900 w-fit my-1 text-sm text-sky-900 hover:text-orange-500' href={`/portal/dashboard/jobs-list/whjob_${job.jobid}/edit`}>Edit</Link>
                                    <button className='border-b border-sky-900 w-fit my-1 text-sm text-sky-900 hover:text-orange-500' onClick={() => handleStatusChangeCall(job.jobid, job.status)}>{job.status === 'Active' ? 'Deactivate':'Activate'}</button>
                                    <button className='border-b border-sky-900 w-fit my-1 text-sm text-sky-900 hover:text-orange-500' onClick={() => handleDeleteCall(job.jobid)}>Delete</button>
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    )
}
