import { JobFormData } from "@/app/lib/elements";
import { JobOptions } from "@/app/lib/joboptions";

type SetActiveSection = (section: string) => void

export default async function JobDescription({jobid,setActiveSection}:{jobid:string, setActiveSection: SetActiveSection}) {
        // const matchedJobs = JobOptions.filter((job) => job.jobid === jobid);
        // eslint-disable-next-line

        const response = await fetch('/api/getJobs/job-details', {
            method: 'POST',
            headers:{
                'Content-type': 'application/json',
            },
            credentials:'include',
            body: JSON.stringify(jobid),
        })

        const matchedJobs: JobFormData[] = await response.json()
        const job = matchedJobs[0]
        console.log('Matched Jobs from description file: ', job)

    return(
        <div className="container w-[88%] lg:w-[77%] 2xl:w-[70%] mx-auto py-10">
        
            <div className="flex flex-col">
                {/* Title */}
                {/* <h3 className="text-xl lg:text-2xl 2xl:text-3xl capitalize"><span>Job Title: </span>{job.title}</h3> */}

                {/* Salary Range */}
                <div className="inline-flex w-full mt-4">
                    <h4 className='text-md lg:text-lg font-semibold'>Salary:</h4>
                    <h4 className='text-md lg:text-lg ml-3'>{job?.salary}</h4>
                </div>

                {/* Job Type */}
                {/* <div className="inline-flex w-full mt-4">
                    <h4 className='text-md lg:text-lg font-semibold'>Job Type:</h4>
                    <h4 className='text-md lg:text-lg ml-3'>{job.jobtype === 'p' ? 'Permanent' : job.jobtype==='c' ? 'Contractual' : ''}</h4>
                </div> */}

                {/* Work Type */}
                {/* <div className="inline-flex w-full mt-4">
                    <h4 className='text-md lg:text-lg font-semibold'>Placement:</h4>
                    <h4 className='text-md lg:text-lg ml-3'>{job.worktype}</h4>
                </div> */}

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
                    <li className="text-md my-1 ">{job.description.split('\n')}</li>
                </ul>
                {/* Skills & Requirement */}
                <h4 className='text-md lg:text-lg font-semibold mt-4'>Skills & Requirements:</h4>
                {/* <ul className="flex flex-col list-disc px-6">
                    {
                        job.skills.map((point,index) => 
                            <li key={index} className="text-md my-1 " dangerouslySetInnerHTML={{__html: point}} />
                        )
                    }
                </ul> */}
                {/* Compensations */}
                <h4 className='text-md lg:text-lg font-semibold mt-4'>Compensations:</h4>
                {/* <ul className="flex flex-col list-disc px-6">
                    {
                        job.compensations.map((point,index) => 
                            <li key={index} className="text-md my-1 " dangerouslySetInnerHTML={{__html: point}} />
                        )
                    }
                </ul> */}
                {/* Qualifications */}
                <h4 className='text-md lg:text-lg font-semibold mt-4'>Qualifications:</h4>
                {/* <ul className="flex flex-col list-disc px-6">
                    {
                        job.qualification.map((point,index) => 
                            <li key={index} className="text-md my-1 " dangerouslySetInnerHTML={{__html: point}} />
                        )
                    }
                </ul> */}
                {/* What you will gain */}
                <h4 className='text-md lg:text-lg font-semibold mt-4'>What you will gain:</h4>
                {/* <ul className="flex flex-col list-disc px-6">
                    {
                        job.whatyouwillgain.map((point,index) => 
                            <li key={index} className="text-md my-1 " dangerouslySetInnerHTML={{__html: point}} />
                        )
                    }
                </ul> */}
                <button onClick={() => setActiveSection('application')} className='w-fit mt-5 text-lg xl:text-xl px-5 py-2 rounded-lg bg-sky-900 text-gray-100'>Apply Now</button>
          </div>
        
    </div>
    )
}