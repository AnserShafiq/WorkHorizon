import { JobOptions } from "@/app/lib/joboptions";
import Link from "next/link";

interface JobsTableProps {
    query: string;
}

export default function JobsTable({ query }: JobsTableProps) {
    // console.log('Query => ', query);

    // Filter jobs based on the query
    const toDisplay = JobOptions.filter((job) => 
        job.title.toLowerCase().includes(query.toLowerCase()) || 
        job.worktype.toLowerCase().includes(query.toLowerCase()) ||
        job.jobtype.toLowerCase().includes(query.toLowerCase()) ||
        job.department.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="container w-[88%] lg:w-[77%] 2xl:w-[70%] min-h-[80vh] py-14">
            <table className="w-full">
                {/* Table Header */}
                <thead>
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
                <tbody>
                    {toDisplay.length > 0 ? (
                        toDisplay.map((job, index) => (
                            <tr key={index} className="cursor-pointer grid grid-cols-[27%,25%,16%,16%,16%] items-center w-full border-b border-gray-300 hover:bg-gray-100 py-2">
                                <td className="px-4 py-3 font-semibold capitalize text-sky-900 text-lg lg:text-lg">
                                    <Link href={`/careers/jobs/${job.jobid}`} className="hover:underline">
                                        {job.title}
                                    </Link>
                                </td>
                                <td className="px-4 py-3 text-center text-md">
                                    {job.department}
                                </td>
                                <td className="px-4 py-3 text-center text-md">
                                    {job.worktype}
                                </td>
                                <td className="px-4 py-3 text-center text-md capitalize">
                                    {job.positions}
                                </td>
                                <td className="px-4 py-3 text-center text-md">
                                    {job.jobtype.toLowerCase() === "p"
                                        ? "Permanent"
                                        : job.jobtype.toLowerCase() === "c"
                                        ? "Contractual"
                                        : ""}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4} className="text-center py-5 text-lg text-gray-500">
                                No jobs found matching your search.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}