import { JobOptions } from "@/app/lib/joboptions";
import Link from "next/link";

export default function JobsTable({query}:{query:string}) {

    // const toSearch = ''
    const toDisplay = JobOptions.filter((job) => job.title.toLowerCase().includes(query.toLowerCase()))
    return (
        <div className="container w-[88%] lg:w-full min-h-[80vh] py-14">
            <h3 className='text-2xl lg:text-3xl font-bold text-sky-900 my-2 text-center tracking-wide'>Jobs Available</h3>
            <table className="w-full">
                {/* Table Header */}
                <thead>
                    <tr className="bg-gray-100 rounded-t-xl grid grid-cols-4 w-full">
                        <th className="border rounded-tl-xl px-4 py-5 text-lg lg:text-xl capitalize tracking-wide">
                            Job Title
                        </th>
                        <th className="border px-4 py-5 text-lg lg:text-xl capitalize tracking-wide">
                            Work Type
                        </th>
                        <th className="border px-4 py-5 text-lg lg:text-xl capitalize tracking-wide">
                            Positions Available
                        </th>
                        <th className="border rounded-tr-xl px-4 py-5 text-lg lg:text-xl capitalize tracking-wide">
                            Contract Type
                        </th>
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody >
                    {toDisplay.map((Job, index) => (
                        <tr key={index} className="cursor-pointer grid grid-cols-4 items-center w-full border-b border-gray-300 hover:bg-neutral-100 py-2">
                            <td className=" px-4 py-3 font-bold text-sky-900 text-lg lg:text-xl tracking-wider">
                                <Link href={`/careers/jobs/${Job.jobid}`} className="hover:underline">
                                    {Job.title}
                                </Link>
                            </td>
                            <td className="px-4 py-3 text-center text-lg">
                                {Job.worktype}
                            </td>
                            <td className=" px-4 py-3 text-center text-lg">
                                {Job.positions}
                            </td>
                            <td className=" px-4 py-3 text-center text-lg">
                                {Job.jobtype.toLowerCase() === "p"
                                    ? "Permanent"
                                    : Job.jobtype.toLowerCase() === "c"
                                    ? "Contractual"
                                    : ""}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
