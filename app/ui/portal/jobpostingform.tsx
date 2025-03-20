'use client'
import React, { useState } from "react"

interface JobFormData {
    status: string;
    title: string;
    salary: string;
    timing: string;
    intro: string;
    worktype: string;
    department: string;
    contract: string;
    positions: string;
    description: string;
    skills: string;
    compensations: string;
    qualifications: string;
    whatyouwillgain:string;
    jointagline: string;
}

export default function JobPostingForm() {

    const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const formData = new FormData(e.currentTarget);

        const formObject:JobFormData = {
            status: 'Active',
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
        }
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getAdmin/newJob`, {
            method: 'POST',
            headers:{
                'Content-type': 'application/json',
            },
            credentials:'include',
            body: JSON.stringify(formObject),
        });
        if(response.ok){
            window.location.reload();
        }
    };
    
    const [description, setDescription] = useState("");
    // eslint-disable-next-line
    const handleDescriptionChange = (e:any) => {
        setDescription(e.target.value);
    };
    const [skills, setSkills] = useState("");
    // eslint-disable-next-line
    const handleSkillsChange = (e:any) => {
        setSkills(e.target.value);
    };
    const [compensations, setCompensations] = useState("");
    // eslint-disable-next-line
    const handleCompensationsChange = (e:any) => {
        setCompensations(e.target.value);
    };
    const [qualifications, setQualifications] = useState("");
    // eslint-disable-next-line
    const handleQualificationsChange = (e:any) => {
        setQualifications(e.target.value);
    };
    const [gains, setGains] = useState("");
    // eslint-disable-next-line
    const handleGainsChange = (e:any) => {
        setGains(e.target.value);
    };

    return(
    <div className='p-6 max-w-5xl mx-auto'>
    <div className='container mx-auto py-10'>
        <h2 className="text-lg lg:text-xl text-sky-900 font-semibold tracking-wide mb-2">Fill out the form to add a new job.</h2>
        <form onSubmit={handleSubmission}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-2 flex flex-col border border-gray-300 p-2">
                    <label>Job Title:</label>
                    <input type="text" name='title' className='bg-gray-200 p-2' id='title' placeholder="Enter job title"/>
                </div>
                <div className="flex flex-col border border-gray-300 p-2">
                    <label>Salary Range:</label>
                    <input type="text" name='salary' id='salary' className="bg-gray-200 p-2" placeholder="e.g.., 50,000PKR to 65,000PKR"/>
                </div>
                <div className="flex flex-col border border-gray-300 p-2">
                    <label>Timing: </label>
                    <select name='timing' className="bg-gray-200 p-2" id='timing'>
                        <option value={''}>Select job timing</option>
                        <option value={'Monday to Friday, 5:00pm to 2:00am'}>Monday to Friday, 5:00pm to 2:00am</option>
                    </select>
                </div>
                <div className="flex flex-col border border-gray-300 p-2">
                    <label>Department: </label>
                    <select name='department' className="bg-gray-200 p-2" id='department'>
                        <option value={''}>Select department</option>
                        <option value={'Sales & Marketing'}>Sales & Marketing</option>
                        <option value={'Digital Marketing & I.T.'}>Digital Marketing & I.T.</option>
                        <option value={'Human Resources & Recruitment'}>Human Resources & Recruitment</option>
                        <option value={'Finance & Accounting'}>Finance & Accounting</option>
                    </select>
                </div>
                <div className="flex flex-col border border-gray-300 p-2">
                    <label>Work Type: </label>
                    <select name='worktype' className="bg-gray-200 p-2" id='worktype'>
                        <option value={''}>Select work type</option>
                        <option value={'Full time'}>Full time</option>
                        <option value={'Part time'}>Part time</option>
                        <option value={'Remote'}>Remote</option>
                    </select>
                </div>
                <div className="flex flex-col border border-gray-300 p-2">
                    <label>Contract Type: </label>
                    <select name='contract' className="bg-gray-200 p-2" id='contract'>
                        <option value={''}>Select contract type</option>
                        <option value={'Permanent'}>Permanent</option>
                        <option value={'Contract based'}>Contract based</option>
                    </select>
                </div>
                <div className="flex flex-col border border-gray-300 p-2">
                    <label>Positions: </label>
                    <select name='positions' className="bg-gray-200 p-2" id='positions'>
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
                        placeholder="Enter introductory speech"
                    />
                </div>
                <div className="flex flex-col border border-gray-300 p-2 min-h-[200px] max-h-[200px]">
                    <label>Job Description: (Enter each point on a new line)</label>
                    <textarea 
                        className="bg-gray-200 p-2 h-full" 
                        id="description" 
                        name="description" 
                        value={description}
                        onChange={handleDescriptionChange}
                        placeholder="Enter job responsibilities, each on a new line"
                    />
                </div>
                <div className="flex flex-col border border-gray-300 p-2 min-h-[200px] max-h-[200px]">
                    <label>Descriptions Preview:</label>
                    <ul className="list-disc pl-5 bg-gray-100 p-2 overflow-auto">
                        {description.split("\n").map((line, index) => (
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
                        value={skills}
                        onChange={handleSkillsChange}
                        placeholder="Enter required skills, each on a new line"
                    />
                </div>
                <div className="flex flex-col border border-gray-300 p-2 min-h-[200px] max-h-[200px]">
                    <label>Skills Preview:</label>
                    <ul className="list-disc pl-5 bg-gray-100 p-2 overflow-auto">
                        {skills.split("\n").map((line, index) => (
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
                        value={compensations}
                        onChange={handleCompensationsChange}
                        placeholder="Enter compensations, each on a new line"
                    />
                </div>
                <div className="flex flex-col border max-h-[200px] border-gray-300 p-2">
                    <label>Compensations Preview:</label>
                    <ul className="list-disc pl-5 bg-gray-100 p-2 overflow-auto">
                        {compensations.split("\n").map((line, index) => (
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
                        value={qualifications}
                        onChange={handleQualificationsChange}
                        placeholder="Enter compensations, each on a new line"
                    />
                </div>
                <div className="flex flex-col border border-gray-300 p-2 min-h-[200px] max-h-[200px]">
                    <label>Qualifications Preview:</label>
                    <ul className="list-disc pl-5 bg-gray-100 p-2 overflow-auto">
                        {qualifications.split("\n").map((line, index) => (
                            line.trim() && <li key={index}>{line}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col border border-gray-300 p-2 min-h-[200px] max-h-[200px]">
                    <label>Applicant Will Gain (Enter each point on a new line)</label>
                    <textarea 
                        className="bg-gray-200 p-2 h-full" 
                        id="gains" 
                        name="gains"
                        value={gains}
                        onChange={handleGainsChange}
                        placeholder="Enter what applicant will gain, each on a new line"
                    />
                </div>
                <div className="flex flex-col border border-gray-300 p-2 min-h-[200px] max-h-[200px]">
                    <label>Applicant Will Gain Preview:</label>
                    <ul className="list-disc pl-5 bg-gray-100 p-2 overflow-auto">
                        {gains.split("\n").map((line, index) => (
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
                        rows={3}
                        placeholder="Enter join invite"
                    />
                </div>
            </div>
            <button type='submit' className="bg-blue-500 text-white p-2 mt-2">Submit</button>
        </form>
    </div>
    </div>
    )
}