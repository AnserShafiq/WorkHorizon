'use client'
import { JobFormData } from "@/app/lib/elements";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";

interface JobsTableProps {
    query: string;
}

export default function JobsTable({ query }: JobsTableProps) {
    // Filter jobs based on the query
    const [jobsList, setJobsList] = useState<JobFormData[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const jobsList = async () => {
            const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getJobs`);
            const List = await data.json();
            setJobsList(List);
            setLoading(false)
        };
    
        // Delay the fetch by 4000 milliseconds (4 seconds)
        const timeoutId = setTimeout(() => {
            jobsList();
        }, 3000);
    
        // Cleanup function to clear the timeout
        return () => clearTimeout(timeoutId);
    }, []); // Empty dependency array
    
    const toDisplay = jobsList.filter((job) => 
        job.status.includes('Active') && (
            job.title.toLowerCase().includes(query.toLowerCase()) || 
            job.worktype.toLowerCase().includes(query.toLowerCase()) ||
            job.contract.toLowerCase().includes(query.toLowerCase()) ||
            job.department.toLowerCase().includes(query.toLowerCase())
        )
    );
    const router = useRouter()

    return (
        <div className="container w-[88%] lg:w-[77%] 2xl:w-[70%] lg:min-h-[80vh] pt-8 pb-14 lg:py-14">
            <table className="w-full">
                {/* Table Header */}
                <thead className="hidden lg:block ">
                    <tr className="bg-gray-100 rounded-t-xl grid grid-cols-[27%,25%,16%,16%,16%] w-full">
                        <th className="border rounded-tl-xl px-4 py-5 text-lg lg:text-lg capitalize tracking-wide">
                            Job Title
                        </th>
                        <th className="border px-4 py-5 text-lg lg:text-lg capitalize tracking-wide">
                            Department
                        </th>
                        <th className="border px-4 py-5 text-lg lg:text-lg capitalize tracking-wide">
                            Work Type
                        </th>
                        <th className="border px-4 py-5 text-lg lg:text-lg capitalize tracking-wide">
                            Positions
                        </th>
                        <th className="border rounded-tr-xl px-4 py-5 text-lg lg:text-lg capitalize tracking-wide">
                            Contract Type
                        </th>
                    </tr>
                </thead>

                {/* Table Body */}
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
                        toDisplay.length > 0 ? (
                            toDisplay.map((job, index) => (
                                <tr key={index} onClick={() => router.push(`/careers/jobs/whjob_${job.jobid}`)} className="cursor-pointer grid grid-cols-1 lg:grid-cols-[27%,25%,16%,16%,16%] items-center w-full border-b border-gray-300 hover:bg-gray-100 py-2">
                                    <td className="px-4 py-1 lg:py-3 font-semibold capitalize text-sky-900 text-lg lg:text-lg">
                                        <Link href={`/careers/jobs/whjob_${job.jobid}`} className="hover:underline">
                                            {job.title}
                                        </Link>
                                    </td>
                                    <td className="px-4 py-1 lg:py-3 text-start lg:text-center text-md">
                                        <span className="font-semibold mr-2 inline-flex lg:hidden">Department: </span>
                                        {job.department}
                                    </td>
                                    <td className="px-4 py-1 lg:py-3 text-start lg:text-center text-md">
                                    <span className="font-semibold mr-2 inline-flex lg:hidden">Job Type: </span>
                                        {job.worktype}
                                    </td>
                                    <td className="px-4 py-1 lg:py-3 text-start lg:text-center text-md capitalize">
                                        <span className="font-semibold mr-2 inline-flex lg:hidden">Positions: </span>
                                        {job.positions}
                                    </td>
                                    <td className="px-4 py-1 lg:py-3 text-start lg:text-center text-md">
                                    <span className="font-semibold mr-2 inline-flex lg:hidden">Contract Type: </span>
                                        {job.contract}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} className="text-start lg:text-center py-5 text-lg text-gray-500">
                                    No jobs found matching your search.
                                </td>
                            </tr>
                        )}
                </tbody>
            </table>
        </div>
    );
}