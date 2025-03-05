import { JobOptions } from "@/app/lib/joboptions";

export default function Page({ params }: { params: { jobid: string } }) {
    const { jobid } = params;

    const matchedJobs = JobOptions.filter((job) => job.jobid === jobid);

    return (
        <div className="container w-[88%] lg:w-full">
            {matchedJobs.length > 0 ? (
                matchedJobs.map((job, index) => (
                    <div key={index} className="flex flex-col">
                        <h3>{job.title}</h3>
                    </div>
                ))
            ) : (
                <h3>No job found</h3>
            )}
        </div>
    );
}