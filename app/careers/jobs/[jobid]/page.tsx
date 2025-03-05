import { JobOptions } from "@/app/lib/joboptions";

interface PageProps {
  params: {
    jobid: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { jobid } = await params;
    console.log('===> ', jobid)
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