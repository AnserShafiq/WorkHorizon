'use client'

import { JobFormData } from "@/app/lib/elements"
import { useEffect, useState } from "react"
import { TailSpin } from "react-loader-spinner";
// eslint-disable-next-line
export default function EditJob({jobid}:{jobid: string | any}){
    const [loading, setLoading] = useState<boolean>(true);
    const [jobForm, setJobForm] = useState<JobFormData | null>(null);

    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getJobs/jobDetails`, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify(jobid),
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch job details');
                }

                const matchedJob: JobFormData[] = await response.json();
                setJobForm(matchedJob[0]); // Set the job data in state
                setLoading(false)
            } catch (error) {
                console.error('Error fetching job details:', error);
            }
        };
        fetchJobDetails();
    },[jobid])

    const handleEntryChange = (name:string, value:string) => {
        setJobForm((prev) => prev ? ({
            ...prev,
            [name]: value,
        }) : null)
    }

    const handleSubmission = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const formObject:JobFormData = {
            jobid: jobid,
            status: jobForm?.status.toString() || '',
            title: formData.get('title')?.toString() || '',
            salary: formData.get('salary')?.toString() || '',
            timing: formData.get('timing')?.toString() || '',
            intro: formData.get('introduction')?.toString() || '',
            worktype: formData.get('worktype')?.toString() || '',
            department: formData.get('department')?.toString() || '',
            contract: formData.get('contract')?.toString() || '',
            positions: formData.get('positions')?.toString() || '',
            description: formData.get('description')?.toString() || '',
            skills: formData.get('skills')?.toString() || '',
            compensations: formData.get('compensations')?.toString() || '',
            qualifications: formData.get('qualifications')?.toString() || '',
            whatyouwillgain: formData.get('gains')?.toString() || '',
            jointagline: formData.get('jointagline')?.toString() || '',
            updated_at:'',
            applications: jobForm?.applications || 0,
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getAdmin/editJob`,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(formObject),
        })
        if(response.ok){
            window.location.reload();
        }

        console.log('Form Data from edit page: ', formObject)
    }
    return loading ? (
        <div className='flex flex-col justify-center items-center container mx-auto py-10 h-[80vh]'>
            <TailSpin visible={true} height={50} width={50} color='#0C4A6E' ariaLabel='tail-spin-loading' radius={1} />
            <h3 className='text-md text-orange-500 font-semibold tracking-wide text-center'>Loading..</h3>
        </div>
    ) : (
        <div className='p-6 max-w-5xl mx-auto'>
            <div className='container mx-auto py-10'>
                <h2 className="text-lg lg:text-xl text-sky-900 font-semibold tracking-wide mb-2">Job application is given below.</h2>
                <form onSubmit={handleSubmission}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="col-span-2 flex flex-col border border-gray-300 p-2">
                            <label>Job Title:</label>
                            <input type="text" name='title' className='bg-gray-200 p-2' id='title' value={jobForm?.title} onChange={(e) => handleEntryChange('title', e.target.value)} placeholder="Enter job title"/>
                        </div>
                        <div className="flex flex-col border border-gray-300 p-2">
                            <label>Salary Range:</label>
                            <input type="text" name='salary' id='salary' className="bg-gray-200 p-2" value={jobForm?.salary} onChange={(e) => handleEntryChange('salary',e.target.value)} placeholder="e.g.., 50,000PKR to 65,000PKR"/>
                        </div>
                        <div className="flex flex-col border border-gray-300 p-2">
                            <label>Timing: </label>
                            <select name='timing' className="bg-gray-200 p-2" id='timing' onChange={(e) => handleEntryChange('timing',e.target.value)} value={jobForm?.timing}>
                                <option value={''}>Select job timing</option>
                                <option value={'Monday to Friday, 5:00pm to 2:00am'}>Monday to Friday, 5:00pm to 2:00am</option>
                            </select>
                        </div>
                        <div className="flex flex-col border border-gray-300 p-2">
                            <label>Department: </label>
                            <select name='department' className="bg-gray-200 p-2" id='department' onChange={(e) => handleEntryChange('department',e.target.value)}  value={jobForm?.department}>
                                <option value={''}>Select department</option>
                                <option value={'Sales & Marketing'}>Sales & Marketing</option>
                                <option value={'Digital Marketing & I.T.'}>Digital Marketing & I.T.</option>
                                <option value={'Human Resources & Recruitment'}>Human Resources & Recruitment</option>
                                <option value={'Finance & Accounting'}>Finance & Accounting</option>
                            </select>
                        </div>
                        <div className="flex flex-col border border-gray-300 p-2">
                            <label>Work Type: </label>
                            <select name='worktype' className="bg-gray-200 p-2" id='worktype' onChange={(e) => handleEntryChange('worktype',e.target.value)} value={jobForm?.worktype}>
                                <option value={''}>Select work type</option>
                                <option value={'Full time'}>Full time</option>
                                <option value={'Part time'}>Part time</option>
                                <option value={'Remote'}>Remote</option>
                            </select>
                        </div>
                        <div className="flex flex-col border border-gray-300 p-2">
                            <label>Contract Type: </label>
                            <select name='contract' className="bg-gray-200 p-2" id='contract' onChange={(e) => handleEntryChange('contract',e.target.value)}  value={jobForm?.contract}>
                                <option value={''}>Select contract type</option>
                                <option value={'Permanent'}>Permanent</option>
                                <option value={'Contract based'}>Contract based</option>
                            </select>
                        </div>
                        <div className="flex flex-col border border-gray-300 p-2">
                            <label>Positions: </label>
                            <select name='positions' className="bg-gray-200 p-2" id='positions' onChange={(e) => handleEntryChange('positions',e.target.value)} value={jobForm?.positions}>
                                <option value={''}>Select positions</option>
                                <option value={'1'}>1</option>
                                <option value={'2'}>2</option>
                                <option value={'3'}>3</option>
                                <option value={'4'}>4</option>
                                <option value={'5'}>5</option>
                                <option value={'6'}>6</option>
                                <option value={'7'}>7</option>
                                <option value={'Multiple'}>Multiple</option>
                            </select>
                        </div>
                        <div className="col-span-2 flex flex-col border border-gray-300 p-2">
                        <label>Job introduction: (Optional)</label>
                            <textarea 
                                className="bg-gray-200 p-2 h-full" 
                                id="introduction" 
                                name="introduction" 
                                rows={4}
                                value={jobForm?.intro}
                                onChange={(e) => handleEntryChange('intro',e.target.value)}
                                placeholder="Enter introductory speech"
                            />
                        </div>
                        <div className="flex flex-col border border-gray-300 p-2 min-h-[200px] max-h-[200px]">
                            <label>Job Description: (Enter each point on a new line)</label>
                            <textarea 
                                className="bg-gray-200 p-2 h-full" 
                                id="description" 
                                name="description" 
                                value={jobForm?.description}
                                onChange={(e) => handleEntryChange('description',e.target.value)}
                                placeholder="Enter job responsibilities, each on a new line"
                            />
                        </div>
                        <div className="flex flex-col border border-gray-300 p-2 min-h-[200px] max-h-[200px]">
                            <label>Descriptions Preview:</label>
                            <ul className="list-disc pl-5 bg-gray-100 p-2 overflow-auto">
                                {jobForm?.description?.split("\n")?.map((line, index) => (
                                    line.trim() && <li key={index}>{line}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col border border-gray-300 p-2  min-h-[200px] max-h-[200px]">
                            <label>Skills Required: (Enter each point on a new line)</label>
                            <textarea 
                                className="bg-gray-200 p-2 min-h-[150px] h-auto" 
                                id="skills" 
                                name="skills" 
                                value={jobForm?.skills}
                                onChange={(e) => handleEntryChange('skills',e.target.value)}
                                placeholder="Enter required skills, each on a new line"
                            />
                        </div>
                        <div className="flex flex-col border border-gray-300 p-2 min-h-[200px] max-h-[200px]">
                            <label>Skills Preview:</label>
                            <ul className="list-disc pl-5 bg-gray-100 p-2 overflow-auto">
                                {jobForm?.skills?.split("\n")?.map((line, index) => (
                                    line.trim() && <li key={index}>{line}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col border border-gray-300 p-2 min-h-[200px] max-h-[200px]">
                            <label>Compensations (Enter each point on a new line)</label>
                            <textarea 
                                className="bg-gray-200 p-2 h-full" 
                                id="compensations" 
                                name="compensations" 
                                value={jobForm?.compensations}
                                onChange={(e) => handleEntryChange('compensations',e.target.value)}
                                placeholder="Enter compensations, each on a new line"
                            />
                        </div>
                        <div className="flex flex-col border max-h-[200px] border-gray-300 p-2">
                            <label>Compensations Preview:</label>
                            <ul className="list-disc pl-5 bg-gray-100 p-2 overflow-auto">
                                {jobForm?.compensations.split("\n").map((line, index) => (
                                    line.trim() && <li key={index}>{line}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col border border-gray-300 p-2 min-h-[200px] max-h-[200px]">
                            <label>Qualifications (Enter each point on a new line)</label>
                            <textarea 
                                className="bg-gray-200 p-2 h-full" 
                                id="qualifications" 
                                name="qualifications" 
                                value={jobForm?.qualifications}
                                onChange={(e) => handleEntryChange('qualifications',e.target.value)}
                                placeholder="Enter compensations, each on a new line"
                            />
                        </div>
                        <div className="flex flex-col border border-gray-300 p-2 min-h-[200px] max-h-[200px]">
                            <label>Qualifications Preview:</label>
                            <ul className="list-disc pl-5 bg-gray-100 p-2 overflow-auto">
                                {jobForm?.qualifications.split("\n").map((line, index) => (
                                    line.trim() && <li key={index}>{line}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col border border-gray-300 p-2 min-h-[200px] max-h-[200px]">
                            <label>Applicant Will Gain (Enter each point on a new line)</label>
                            <textarea 
                                className="bg-gray-200 p-2 h-full" 
                                id="whatyouwillgain" 
                                name="whatyouwillgain"
                                value={jobForm?.whatyouwillgain}
                                onChange={(e) => handleEntryChange('whatyouwillgain',e.target.value)}
                                placeholder="Enter what applicant will gain, each on a new line"
                            />
                        </div>
                        <div className="flex flex-col border border-gray-300 p-2 min-h-[200px] max-h-[200px]">
                            <label>Applicant Will Gain Preview:</label>
                            <ul className="list-disc pl-5 bg-gray-100 p-2 overflow-auto">
                                {jobForm?.whatyouwillgain.split("\n").map((line, index) => (
                                    line.trim() && <li key={index}>{line}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-2 flex flex-col border border-gray-300 p-2">
                        <label>Join Invite: (Optional)</label>
                            <textarea 
                                className="bg-gray-200 p-2 h-full" 
                                id="jointagline" 
                                name="jointagline" 
                                value={jobForm?.jointagline}
                                onChange={(e) => handleEntryChange('jointagline',e.target.value)}
                                rows={3}
                                placeholder="Enter join invite"
                            />
                        </div>
                    </div>
                    <div className="col-span-full flex items-center justify-center">
                    <button type='submit' className="bg-blue-500 text-white py-2 px-4 mt-5 mx-auto rounded-xl">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}