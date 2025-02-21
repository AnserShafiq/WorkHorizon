import { countries } from "@/lib/countries";
import { MailIcon, PhoneCall } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function LetsTalk(){
    const [selectCountry, setSelectedCountry] = useState<string|undefined>('+92');
    const [contactNumber, setContactNumber] = useState<string|undefined> ('');
    const handleCountry = (e:React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        setSelectedCountry(e.target?.value);
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
    
    const handleSubmission = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return(
        <div className='w-full hidden lg:block bg-special-blue mt-[13rem]'>
            <div className="container relative grid grid-cols-[50%,50%]">
                <div className="py-20">
                    <h3 className="text-sm xl:text-lg text-gray-300 font-normal border-b border-orange-500 w-fit capitalize leading-1"> Achieve success with Work Horizon</h3>
                    <h3 className='text-3xl xl:text-5xl font-bold text-gray-100 capitalize tracking-wider lg:leading-tight my-3'>{`Let's Talk`}</h3>
                    <h4 className="text-sm xl:text-lg capitalize text-gray-300">Work horizon empowers you to unlock new opportunities and embrace innovation.</h4>
                    <div className="flex mt-24">
                        <PhoneCall className="w-[3.3rem] h-auto text-orange-500"/>
                        <div className="flex flex-col ml-2 py-0 pl-2 border-l border-gray-500">
                            <h4 className="text-md text-gray-300">For Inquiries</h4>
                            <Link className="text-lg xl:text-xl text-gray-100" href={'/'}>92 (300) 000 0000</Link>
                        </div>
                    </div>
                    <div className="flex mt-6">
                        <MailIcon className="w-[3.3rem] h-auto text-orange-500"/>
                        <div className="flex flex-col ml-2 py-0 pl-2 border-l border-gray-500">
                            <h4 className="text-md text-gray-300">To Mail</h4>
                            <Link className="text-lg xl:text-xl text-gray-100" href={'/'}>info@workhorizon.pk</Link>
                        </div>
                    </div>
                    <div className="flex flex-col mt-20">
                        <h4 className="text-lg capitalize text-gray-100 tracking-wider">Social just you connected us!</h4>
                        <div className="flex justify-start mt-3 gap-4">
                            <Link className="text-sm text-gray-300 flex flex-col items-center gap-1" href={'/'}><FaFacebook className="w-6 h-auto" /> Facebook</Link>
                            <Link className="text-sm text-gray-300 flex flex-col items-center gap-1" href={'/'}><FaLinkedin className="w-6 h-auto" /> LinkedIn</Link>
                            <Link className="text-sm text-gray-300 flex flex-col items-center gap-1" href={'/'}><FaInstagram className="w-6 h-auto" /> Instagram</Link>
                        </div>
                    </div>
                </div>
                <div className='relative -top-28 rounded-xl px-10 py-16 ml-16 bg-gray-300'>
                    <h2 className="text-xl xl:text-3xl tracking-wide font-semibold border-b border-gray-400 pb-4">{`Let's Engage In Conversation...`}</h2>
                    <form onSubmit={handleSubmission} className="flex flex-wrap justify-between mt-6">
                        <div className="w-[48%] flex flex-col gap-1 mt-4">
                            <label className='text-md xl:text-md font-[500] tracking-wide'>First Name <span className="text-red-500">*</span></label>
                            <input type="text" className="border pl-2 py-2 rounded-xl w-full bg-gray-200 cursor-pointer" name="firstname" id='firstname' placeholder="First name" required/>
                        </div>
                        <div className="w-[48%] flex flex-col gap-1 mt-4">
                            <label className='text-md xl:text-md font-[500] tracking-wide'>Last Name <span className="text-red-500">*</span></label>
                            <input type="text" className="border pl-2 py-2 rounded-xl w-full bg-gray-200 cursor-pointer" name="lastname" id='lastname' placeholder="Last name" required/>
                        </div>
                        <div className="w-[48%] flex flex-col gap-1 mt-4">
                            <label className='text-md xl:text-md font-[500] tracking-wide'>Contact Number <span className="text-red-500">*</span></label>
                            <div className='grid grid-cols-[22%,78%]'>
                                <select className="border pl-2 rounded-l-xl bg-gray-200 cursor-pointer" name="country" id='country' value={selectCountry} onChange={handleCountry} required>
                                    <option value=''></option>
                                    {
                                        countries.map((country, index) => 
                                            <option value={country.code} key={index}> {selectCountry === country.code ? null : country.name} {country.flag}</option>
                                        )
                                    }
                                </select>
                                <input required className="bg-gray-200 py-2 px-1 rounded-r-xl" type='tel' name="contact" id='contact' value={contactNumber} onChange={(e) => handleContactNumber(e.target.value)} placeholder="Contact number"/>
                            </div>
                        </div>
                        <div className="w-[48%] flex flex-col gap-1 mt-4">
                            <label className='text-md xl:text-md font-[500] tracking-wide'>Email <span className="text-red-500">*</span></label>
                            <input type="email" className="border pl-2 py-2 rounded-xl w-full bg-gray-200 cursor-pointer" name="email" id='email' placeholder="Email" required/>
                        </div>
                        <div className="w-full flex flex-col gap-1 mt-4">
                            <label className='text-md xl:text-md font-[500] tracking-wide'>Subject <span className="text-red-500">*</span></label>
                            <input type="text" className="border pl-2 py-2 rounded-xl w-full bg-gray-200 cursor-pointer" name="subject" id='subject' placeholder="Conversation's subject" required/>
                        </div>
                        <div className="w-full flex flex-col gap-1 mt-4">
                            <label className='text-md xl:text-md font-[500] tracking-wide'>Message <span className="text-red-500">*</span></label>
                            <textarea rows={3} className="border pl-2 py-2 rounded-xl w-full bg-gray-200 cursor-pointer" name="message" id='message' placeholder="Message..." required/>
                        </div>
                        <button className="text-lg font-semibold px-6 py-2 mt-6 bg-sky-900 text-gray-100 tracking-wider rounded-xl transition ease-in-out duration-300 hover:scale-[1.075] hover:bg-transparent hover:text-sky-900 hover:border-2 hover:border-sky-900 " type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}