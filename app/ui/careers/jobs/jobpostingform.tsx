    'use client'
    import React, { useEffect, useState } from "react"

    interface JobFormData {
        title: string;
        company: string;
        location: string;
        salary: string;
        description: string;
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

        return(
            <div className='container mx-auto py-10'>
                <h2>Job Posting Form</h2>
                <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col border border-gray-300 p-2">
                    <label>Job Title</label>
                    <input type="text" name='title' id='title' placeholder="Enter job title"/>
                </div>
                <div className="flex flex-col border border-gray-300 p-2">
                    <label>Company</label>
                    <input type="text" name='company' id='company' placeholder="Company name"/>
                </div>
                <div className="flex flex-col border border-gray-300 p-2">
                    <label>Location</label>
                    <input type="text" name='location' id='location' placeholder="Office location"/>
                </div>
                <div className="flex flex-col border border-gray-300 p-2">
                    <label>Salary Range</label>
                    <input type="text" name='salary' id='salary' placeholder="e.g., $50,000 to $70,000"/>
                </div>
                <div className="flex flex-col border border-gray-300 p-2">
                    <label>Job Description (Enter each point on a new line)</label>
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
                    <label>Preview:</label>
                    <ul className="list-disc pl-5 bg-gray-100 p-2">
                        {description.split("\n").map((line, index) => (
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