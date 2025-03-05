import { JobOptions } from "@/app/lib/joboptions";
import { Dot } from "lucide-react";

// eslint-disable-next-line
export default async function Page({ params }: any) {
  const { jobid } = await params;
    console.log('===> ', jobid)
  const matchedJobs = JobOptions.filter((job) => job.jobid === jobid);

  return (
    <div className="container w-[88%] lg:w-[50%] mx-auto py-10">
      {matchedJobs.length > 0 ? (
        matchedJobs.map((job, index) => (
          <div key={index} className="flex flex-col">
            {/* Title */}
            <h3 className="text-xl lg:text-2xl 2xl:text-3xl capitalize"><span>Job Title: </span>{job.title}</h3>

            {/* Salary Range */}
            <div className="inline-flex w-full mt-4">
                <h4 className='text-md lg:text-lg font-semibold'>Salary:</h4>
                <h4 className='text-md lg:text-lg ml-3'>{job.salary}</h4>
            </div>

            {/* Job Type */}
            <div className="inline-flex w-full mt-4">
                <h4 className='text-md lg:text-lg font-semibold'>Job Type:</h4>
                <h4 className='text-md lg:text-lg ml-3'>{job.jobtype === 'p' ? 'Permanent' : job.jobtype==='c' ? 'Contractual' : ''}</h4>
            </div>

            {/* Work Type */}
            <div className="inline-flex w-full mt-4">
                <h4 className='text-md lg:text-lg font-semibold'>Placement:</h4>
                <h4 className='text-md lg:text-lg ml-3'>{job.worktype}</h4>
            </div>

            {/* Timing */}
            <div className="inline-flex w-full mt-4">
                <h4 className='text-md lg:text-lg font-semibold'>Timing:</h4>
                <h4 className='text-md lg:text-lg ml-3'>{job.timing}</h4>
            </div>

            {/* Positions */}
            <div className="inline-flex w-full mt-4">
                <h4 className='text-md lg:text-lg font-semibold'>Positions:</h4>
                <h4 className='text-md lg:text-lg ml-3 capitalize'>{job.positions}</h4>
            </div>

            {/* Description */}
            <h4 className='text-md lg:text-lg font-semibold mt-4'>Description:</h4>
            <ul className="flex flex-col list-disc px-6">
                {
                    job.description.map((point,index) => 
                        <li key={index} className="text-md my-1 " dangerouslySetInnerHTML={{__html: point}} />
                    )
                }
            </ul>
            {/* Skills & Requirement */}
            <h4 className='text-md lg:text-lg font-semibold mt-4'>Skills & Requirements:</h4>
            <ul className="flex flex-col list-disc px-6">
                {
                    job.skills.map((point,index) => 
                        <li key={index} className="text-md my-1 " dangerouslySetInnerHTML={{__html: point}} />
                    )
                }
            </ul>
            {/* Compensations */}
            <h4 className='text-md lg:text-lg font-semibold mt-4'>Compensations:</h4>
            <ul className="flex flex-col list-disc px-6">
                {
                    job.compensations.map((point,index) => 
                        <li key={index} className="text-md my-1 " dangerouslySetInnerHTML={{__html: point}} />
                    )
                }
            </ul>
            {/* Qualifications */}
            <h4 className='text-md lg:text-lg font-semibold mt-4'>Qualifications:</h4>
            <ul className="flex flex-col list-disc px-6">
                {
                    job.qualification.map((point,index) => 
                        <li key={index} className="text-md my-1 " dangerouslySetInnerHTML={{__html: point}} />
                    )
                }
            </ul>
            {/* What you will gain */}
            <h4 className='text-md lg:text-lg font-semibold mt-4'>What you will gain:</h4>
            <ul className="flex flex-col list-disc px-6">
                {
                    job.whatyouwillgain.map((point,index) => 
                        <li key={index} className="text-md my-1 " dangerouslySetInnerHTML={{__html: point}} />
                    )
                }
            </ul>
            
          </div>
        ))
      ) : (
        <h3>No job found</h3>
      )}
    </div>
  );
}