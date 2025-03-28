'use client'
import { JobApplications } from "@/app/lib/elements";
import { Asterisk } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react"
import { TailSpin } from 'react-loader-spinner'

export default function AllApplicants() {
    const [loading, setLoading] = useState<boolean>(true);
    const [applicants, setApplicants] = useState<JobApplications[]>([]);

    useEffect(() => {
        const getApplicants = async() => {
            const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getAllApplicants`);
            const applications = await resp.json()
            setApplicants(applications)
            setLoading(false)
        }
        getApplicants()
    },[])


    const handleDeleteCandidate = async(id: string) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/deleteApplicant`,{
            method:'DELETE',
            body: JSON.stringify(id)
        });
        if(response.status === 200){
            window.location.reload();
        }
    }


    return (
        <div className='container w-[88%] lg:w-[77%] 2xl:w-[70%] lg:min-h-[80vh] pt-8 pb-14 lg:py-14'>
            <h3 className="text-2xl lg:text-3xl font-semibold text-sky-900 border-b-2 px-1 mx-auto mb-5 border-orange-500 w-fit">Jobs List</h3>
            <table className='w-full'>
                <thead>
                    <tr className='bg-gray-100 rounded-t-xl grid grid-cols-[20%,25%,25%,15%,15%] w-full'>
                        <th className="border rounded-tl-xl px-4 py-5 text-lg capitalize tracking-wide">Applicant Name</th>
                        <th className="border px-4 py-5 text-lg capitalize tracking-wide">Applied For</th>
                        <th className="border px-4 py-5 text-lg capitalize tracking-wide">Contact Details</th>
                        <th className="border px-4 py-5 text-lg capitalize tracking-wide">Experience</th>
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
                        applicants.length > 0 ?
                        applicants.map((app) =>
                            <tr key={app.id} className={`grid grid-cols-1 lg:grid-cols-[20%,25%,25%,15%,15%] items-center w-full border-b border-gray-300 hover:shadow-md py-2 ${app.status === 'New' ? 'bg-gray-100': ''}`}>
                                <td className="px-4 py-1 lg:py-3 font-semibold capitalize text-start lg:text-center text-sky-900 text-lg">
                                    <Link href={`/portal/dashboard/applicants/wh_applicant_${app.id}`} className="underline mx-auto flex w-fit relative">
                                        {app.status==='New' ? <Asterisk className="text-red-600 absolute -top-1 -right-2 w-3 h-auto" />:''} {`${app.firstname} ${app.lastname}`} 
                                    </Link>
                                </td>
                                <td className="px-4 py-1 lg:py-3 text-start lg:justify-center lg:flex  lg:text-center text-md">
                                    <span className="font-semibold mr-2 inline-flex lg:hidden">Applied for: </span>
                                    {app.jobtitle}
                                </td>
                                <td className="px-4 py-1 lg:py-3 text-start lg:text-center text-md">
                                    <span className="font-semibold mr-2 inline-flex lg:hidden">Contact details: </span>
                                    Email: {app.email} <br/> Number: {app.contactnumber}
                                </td>
                                <td className="px-4 py-1 lg:py-3 text-start lg:text-center text-md">
                                    <span className="font-semibold mr-2 inline-flex lg:hidden">Experience: </span>
                                    {app.experience}{app.experience > 1 ? ' years': app.experience === 1 ? ' year': ''}
                                </td>
                                <td className="px-4 py-1 lg:py-3 text-start lg:text-center text-md capitalize flex flex-row items-center justify-center gap-6">
                                    <Link href={`/portal/dashboard/applicants/wh_applicant_${app.id}`} className='border-b border-sky-900 w-fit  my-1 text-sm text-sky-900 hover:text-orange-500'>View</Link>
                                    <button className='border-b border-sky-900 w-fit my-1 text-sm text-sky-900 hover:text-orange-500' onClick={() => handleDeleteCandidate(app.id)} >Delete</button>
                                </td>
                            </tr>
                        ) :
                        <div className='flex flex-col items-center justify-center mt-16 w-full'>
                            <h2 className="text-lg lg:text-xl text-gray-400 font-semibold capitalize text-center">No job applicant</h2>
                        </div>  
                    )}
                </tbody>
            </table>
        </div>
    )
}
