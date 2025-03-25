'use client'
import { countries } from "@/app/lib/countries";
import { JobFormData } from "@/app/lib/elements";
import { ArrowLeft, Asterisk } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function JobApplication({JobDetails}: {JobDetails: JobFormData}){
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<boolean>(true);
  const [fileTypeError, setFileTypeError] = useState<boolean>(false);
  const [countryCode, setCountryCode] = useState<string>('+92');
  const [contactNo, setContactNumber] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const allowedTypes = ['application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document' ,'text/plain', 'application/pdf'];
    if (e.target.files && e.target.files.length > 0) {
        const file = e.target.files[0];
        if (allowedTypes.includes(file.type)) {
            setFile(file);
            setFileError(true);
            setFileTypeError(false);
        } else {
            setFile(null);
            setFileError(true)
            setFileTypeError(true);
            e.target.value = "";
        }
    }else{
      setFileError(false);
    }
  };


  const handleCountry = (e:React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    
    setCountryCode(e.target?.value);
  }
  const handleContactNumber = (value: string): void => {
    let receivedEntry = value.replace(/\D/g, ''); // Remove non-digits

    if (receivedEntry.length === 10) {
        // Format as (123) 456 7890
        receivedEntry = receivedEntry.slice(0, 10);
        receivedEntry = receivedEntry.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2 $3');
    } else if (receivedEntry.length > 10 || receivedEntry.length === 11) {
        // If more than 11 digits, limit to 11
        receivedEntry = receivedEntry.slice(0, 11);
        receivedEntry = receivedEntry.replace(/(\d{4})(\d{7})/, '$1 $2');
    }
    setContactNumber(receivedEntry);
  };
 

  const handleSubmission = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('In submission')
    setLoading(true)
    if (!file){
      setLoading(false)
      return setFileError(false)
    } 
    try {
      const formData = new FormData(e.currentTarget);
      formData.append("file", file);
      formData.append('jobid', JobDetails.jobid);
      formData.append('jobtitle', JobDetails.title);
      
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/applicationSubmission`, {
        method: 'POST',
        body: formData,
      })
      if(response.ok){
        setLoading(false)
        setDone(true);
      }

    } catch (error) {
      console.log('Unable to submit form', error)
      setLoading(false);
      setDone(false);
    }
  }

  return (
    <div className='container w-[88%] lg:w-[60%] 2xl:w-[50%] mx-auto py-10 min-h-[69vh] '>
        {
          done ? 
          <div className="flex flex-col items-center justify-center w-full h-[59vh]">
            <h3 className='text-3xl 2xl:text-4xl text-sky-900 font-semibold mb-8 text-center leading-loose tracking-wide' > Thank you for applying at <span className='text-orange-500 font-bold italic'>Work Horizon</span>. We will reach back to you as soon as possible. </h3>
            <Link href='/careers/jobs' className="tracking-wide font-[500] text-sky-900 border-b-2 border-orange-500 flex gap-2 items-center"><ArrowLeft className="w-auto h-4" /> Back to jobs</Link>
          </div>
          :
          <form onSubmit={handleSubmission} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Firstname */}
            <div className="col-span-2 md:col-span-1 flex flex-col border border-gray-300 p-2">
              <label className="font-semibold mb-1 flex">First name <Asterisk className="w-3 h-auto text-red-800 ml-1 -mt-1"/></label>
              <input type='text' name='firstname' id='firstname' className="bg-gray-200 p-2" required/>
            </div>
          {/* Lastname */}
            <div className="col-span-2 md:col-span-1 flex flex-col border border-gray-300 p-2">
              <label className="font-semibold mb-1">Last name</label>
              <input type='text' name='lastname' id='lastname' className="bg-gray-200 p-2" />
            </div>
            {/* E-Mail */}
            <div className="col-span-2 flex flex-col border border-gray-300 p-2">
              <label className="font-semibold mb-1 flex">E-Mail <Asterisk className="w-3 h-auto text-red-800 ml-1 -mt-1"/></label>
              <input type='email' name='email' id='email' className="bg-gray-200 p-2" required/>
            </div>
            {/* Contact Number */}
            <div className="col-span-2 flex flex-col border border-gray-300 p-2">
              <label className="font-semibold mb-1 flex">Contact Number <Asterisk className="w-3 h-auto text-red-800 ml-1 -mt-1"/></label>
              <div className='grid grid-cols-[20%,80%] lg:grid-cols-[18%,82%] 2xl:grid-cols-[13%,87%]'>
                <select className="border pl-2 bg-gray-300 text-gray-700 text-sm font-semibold cursor-pointer" name="country" id='country' value={countryCode} onChange={handleCountry} required>
                    <option value=''></option>
                    {
                        countries.map((country, index) => 
                            <option value={country.code} key={index}> {countryCode === country.code ? null : country.name} {country.flag} {country.code}</option>
                        )
                    }
                </select>
                <input className="bg-gray-200 p-2" type='tel' name="contact" id='contact' value={contactNo} onChange={(e) => handleContactNumber(e.target.value)} placeholder="Contact number" required/>
              </div>
            </div>
            {/* Address */}
            <div className="col-span-2 flex flex-col border border-gray-300 p-2">
              <label className="font-semibold mb-1 flex">Address <Asterisk className="w-3 h-auto text-red-800 ml-1 -mt-1"/></label>
              <input type='text' name='address' id='address' className="bg-gray-200 p-2" required/>
            </div>
            {/* Experience */}
            <div className="col-span-2 md:col-span-1 flex flex-col border border-gray-300 p-2">
              <label className="font-semibold mb-1 flex">Experience <Asterisk className="w-3 h-auto text-red-800 ml-1 -mt-1"/></label>
              <input type='text' name='experience' id='experience' className="bg-gray-200 p-2" required/>
            </div>
            {/* Joining Date */}
            <div className="col-span-2 md:col-span-1 flex flex-col border border-gray-300 p-2">
              <label className="font-semibold mb-1">Possible date for joining</label>
              <input type='date' name='joining' id='joining' className="bg-gray-200 p-2" />
            </div>
            {/* Summary */}
            <div className="col-span-2 flex flex-col border border-gray-300 p-2">
              <label className="font-semibold mb-1 flex">Summary <Asterisk className="w-3 h-auto text-red-800 ml-1 -mt-1"/></label>
              <textarea rows={4} name='summary' id='summary' className="bg-gray-200 p-2" required/>
            </div>
            {/* Resume */}
            <div className='col-span-2 flex flex-col border border-gray-300 p-2'>
            <label className="font-semibold mb-1 flex">Resume(.pdf, .doc, docx, .txt) <Asterisk className="w-3 h-auto text-red-800 ml-1 -mt-1"/></label>
              <input type="file" name='resume' id='resume' accept=".pdf,.doc,.docx,.txt" onChange={handleFileChange} required />
              {
                fileError ? null : <p className="text-red-800 font-semibold">Please add your resume.</p>
              }
              {
                fileTypeError ? <p className="text-red-800 font-semibold">Only .pdf, .doc, .docx or .txt file accepted.</p> : null
              }
            </div>
            
            {
              loading ? 
              <div className='col-span-full'>
                <h3 className="w-fit mx-auto px-4 py-2 rounded-xl font-semibold tracking-wide border opacity-75 text-lg bg-gray-200 text-gray-900 border-gray-900">Loading...</h3>
              </div> : <button className="col-span-full bg-sky-900 w-fit mx-auto px-4 py-2 rounded-xl font-semibold tracking-wide text-gray-100 border border-transparent text-lg hover:bg-gray-200 hover:text-sky-900 hover:border-sky-900" type="submit">Submit</button>
            }
          </form>
        }
    </div>
  );
}