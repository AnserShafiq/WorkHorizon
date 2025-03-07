'use client'
import React, { useEffect, useState } from "react"

interface JobFormData {
    status: string;
    title: string;
    salary: string;
    timing: string;
    worktype: string;
    department: string;
    jobtype: string;
    positions: string;
    description: string;
    skills: string;
    compensations: string;
    qualifications: string;
    whatyouwillgain:string;
}

interface FormErrors {
    title?: string;
    company?: string;
    location?: string;
    salary?: string;
    description?: string;
    requirements?: string;
    benefits?: string;
}

export default function JobPostingForm() {

    const handleSubmission = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const formData = new FormData(e.currentTarget);
        
        // Convert FormData to object for logging
        const formObject: Record<string, string> = {};
        formData.forEach((value, key) => {
            formObject[key] = value.toString();
        });
    
        console.log("Form Data:", formObject);
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
    <div className='container mx-auto py-10'>
        <h2>Fill out the form to add a new job.</h2>
        <form onSubmit={handleSubmission}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col border border-gray-300 p-2">
                    <label>Job Title:</label>
                    <input type="text" name='title' className='' id='title' placeholder="Enter job title"/>
                </div>
                <div className="flex flex-col border border-gray-300 p-2">
                    <label>Salary Range:</label>
                    <input type="text" name='company' id='company' placeholder="e.g.., 50,000PKR to 65,000PKR"/>
                </div>
                <div className="flex flex-col border border-gray-300 p-2">
                    <label>Timing: </label>
                    <select name='timing' id='timing'>
                        <option value={''}>Select job timing</option>
                        <option value={'Monday to Friday, 5:00pm to 2:00am'}>Monday to Friday, 5:00pm to 2:00am</option>
                    </select>
                </div>
                <div className="flex flex-col border border-gray-300 p-2">
                    <label>Department: </label>
                    <select name='timing' id='timing'>
                        <option value={''}>Select department</option>
                        <option value={'Sales & Marketing'}>Sales & Marketing</option>
                        <option value={'Digital Marketing & I.T.'}>Digital Marketing & I.T.</option>
                        <option value={'Human Resources & Recruitment'}>Human Resources & Recruitment</option>
                        <option value={'Finance & Accounting'}>Finance & Accounting</option>
                    </select>
                </div>
                <div className="flex flex-col border border-gray-300 p-2">
                    <label>Salary Range</label>
                    <input type="text" name='salary' id='salary' placeholder="e.g., $50,000 to $70,000"/>
                </div>
                <div className="flex flex-col border border-gray-300 p-2">
                    <label>Positions: </label>
                    <select name='timing' id='timing'>
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
                <div className="flex flex-col border border-gray-300 p-2">
                    <label>Job Description: (Enter each point on a new line)</label>
                    <textarea 
                        className="bg-gray-200 p-2" 
                        id="description" 
                        name="description" 
                        rows={4}
                        value={description}
                        onChange={handleDescriptionChange}
                        placeholder="Enter job responsibilities, each on a new line"
                    />
                </div>
                <div className="flex flex-col border border-gray-300 p-2">
                    <label>Description's Preview:</label>
                    <ul className="list-disc pl-5 bg-gray-100 p-2">
                        {description.split("\n").map((line, index) => (
                            line.trim() && <li key={index}>{line}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col border border-gray-300 p-2">
                    <label>Skills Required: (Enter each point on a new line)</label>
                    <textarea 
                        className="bg-gray-200 p-2" 
                        id="skills" 
                        name="skills" 
                        rows={4}
                        value={skills}
                        onChange={handleSkillsChange}
                        placeholder="Enter required skills, each on a new line"
                    />
                </div>
                <div className="flex flex-col border border-gray-300 p-2">
                    <label>Skills Preview:</label>
                    <ul className="list-disc pl-5 bg-gray-100 p-2">
                        {skills.split("\n").map((line, index) => (
                            line.trim() && <li key={index}>{line}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col border border-gray-300 p-2">
                    <label>Compensations (Enter each point on a new line)</label>
                    <textarea 
                        className="bg-gray-200 p-2" 
                        id="compensations" 
                        name="compensations" 
                        rows={4}
                        value={compensations}
                        onChange={handleCompensationsChange}
                        placeholder="Enter compensations, each on a new line"
                    />
                </div>
                <div className="flex flex-col border border-gray-300 p-2">
                    <label>Compensations Preview:</label>
                    <ul className="list-disc pl-5 bg-gray-100 p-2">
                        {compensations.split("\n").map((line, index) => (
                            line.trim() && <li key={index}>{line}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col border border-gray-300 p-2">
                    <label>Qualifications (Enter each point on a new line)</label>
                    <textarea 
                        className="bg-gray-200 p-2" 
                        id="qualifications" 
                        name="qualifications" 
                        rows={4}
                        value={qualifications}
                        onChange={handleQualificationsChange}
                        placeholder="Enter compensations, each on a new line"
                    />
                </div>
                <div className="flex flex-col border border-gray-300 p-2">
                    <label>Qualifications Preview:</label>
                    <ul className="list-disc pl-5 bg-gray-100 p-2">
                        {qualifications.split("\n").map((line, index) => (
                            line.trim() && <li key={index}>{line}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col border border-gray-300 p-2">
                    <label>Applicant Will Gain (Enter each point on a new line)</label>
                    <textarea 
                        className="bg-gray-200 p-2" 
                        id="gains" 
                        name="gains" 
                        rows={4}
                        value={gains}
                        onChange={handleGainsChange}
                        placeholder="Enter what applicant will gain, each on a new line"
                    />
                </div>
                <div className="flex flex-col border border-gray-300 p-2">
                    <label>Applicant Will Gain Preview:</label>
                    <ul className="list-disc pl-5 bg-gray-100 p-2">
                        {gains.split("\n").map((line, index) => (
                            line.trim() && <li key={index}>{line}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <button type='submit' className="bg-blue-500 text-white p-2 mt-2">Submit</button>
        </form>
    </div>
    )
}