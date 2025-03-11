import { JobFormData } from "@/app/lib/elements";

type SetActiveSection = (section: string) => void

export default function JobDescription({JobDetails,setActiveSection}:{JobDetails: JobFormData, setActiveSection: SetActiveSection}) {
        
        // console.log('Matched Jobs from description file: ', job)

    return(
        <div className="container w-[88%] lg:w-[70%] 2xl:w-[60%] mx-auto py-10">
        
            <div className="flex flex-col">
                {/* Introduction */}
                {
                    JobDetails.intro ? <p className="text-md lg:text-lg">{JobDetails.intro}</p> : null
                }

                {/* Salary Range */}
                <div className="inline-flex w-full mt-4">
                    <h4 className='text-md lg:text-lg font-semibold'>Salary:</h4>
                    <h4 className='text-md lg:text-lg ml-3'>{JobDetails.salary}</h4>
                </div>

                {/* Timing */}
                <div className="inline-flex w-full mt-4">
                    <h4 className='text-md lg:text-lg font-semibold'>Timing:</h4>
                    <h4 className='text-md lg:text-lg ml-3'>{JobDetails.timing}</h4>
                </div>

                {/* Positions */}
                <div className="inline-flex w-full mt-4">
                    <h4 className='text-md lg:text-lg font-semibold'>Positions:</h4>
                    <h4 className='text-md lg:text-lg ml-3 capitalize'>{JobDetails.positions}</h4>
                </div>

                {/* Description */}
                <h4 className='text-md lg:text-lg font-semibold mt-4'>Description:</h4>
                <ul className="flex flex-col list-disc px-6">
                    {
                        JobDetails.description.split('\n').map((line, index) => (
                        line.trim() && <li key={index} className="text-md my-1 " dangerouslySetInnerHTML={{__html: line}}/>
                    ))}
                </ul>
                {/* Skills & Requirement */}
                
                {
                    JobDetails.skills ? 
                    <>
                        <h4 className='text-md lg:text-lg font-semibold mt-4'>Skills & Requirements:</h4>
                        <ul className="flex flex-col list-disc px-6">
                            {
                                JobDetails.skills.split('\n').map((line, index) => (
                                    line.trim() && <li key={index} className="text-md my-1 " dangerouslySetInnerHTML={{__html: line}}/>
                                ))
                            }
                        </ul>
                    </>:null
                }
                {/* Compensations */}
                {
                    JobDetails.compensations ? 
                    <>
                        <h4 className='text-md lg:text-lg font-semibold mt-4'>Compensations:</h4>
                        <ul className="flex flex-col list-disc px-6">
                            {
                                JobDetails.compensations.split('\n').map((line, index) => (
                                    line.trim() && <li key={index} className="text-md my-1 " dangerouslySetInnerHTML={{__html: line}}/>
                                ))
                            }
                        </ul>
                    </>:null
                }
                {/* Qualifications */}
                <h4 className='text-md lg:text-lg font-semibold mt-4'>Qualifications:</h4>
                <ul className="flex flex-col list-disc px-6">
                    {
                        JobDetails.qualifications.split('\n').map((line, index) => (
                            line.trim() && <li key={index} className="text-md my-1 " dangerouslySetInnerHTML={{__html: line}}/>
                        ))
                    }
                </ul>
                {/* What you will gain */}
                {
                    JobDetails.whatyouwillgain ? 
                    <>
                        <h4 className='text-md lg:text-lg font-semibold mt-4'>What you will gain:</h4>
                        <ul className="flex flex-col list-disc px-6">
                            {
                                JobDetails.whatyouwillgain.split('\n').map((line, index) => (
                                    line.trim() && <li key={index} className="text-md my-1 " dangerouslySetInnerHTML={{__html: line}}/>
                                ))
                            }
                        </ul>
                    </>:null
                    
                }
                {/* Join tagline */}
                {
                    JobDetails.jointagline ? <p className="text-md lg:text-lg">{JobDetails.jointagline}</p> : null
                }
                <button onClick={() => setActiveSection('application')} className='w-fit mt-5 text-lg xl:text-xl px-5 py-2 rounded-lg bg-sky-900 text-gray-100'>Apply Now</button>
          </div>
        
    </div>
    )
}