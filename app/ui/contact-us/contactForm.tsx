import { MailOpen, MapPin, PhoneCallIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";



export default function ContactForm(){
    const [contactReason, setContactReason] = useState<string>('');
    const contactOptions = [
        'Option one', 'Option two', 'Option three'
    ]
    console.log('Reasons of contacting us=> ', contactReason)
    return(
        <div className='container w-[88%] lg:w-full min-h-[92vh] flex items-center'>
            <div className="grid lg:grid-cols-[70%,30%] w-full mb-10 py-10 lg:py-20 lg:mb-1">
                <div className='block mb-8 lg:m-0'>
                    <h3 className="text-2xl xl:text-3xl font-bold tracking-wide text-sky-900 mb-3">Contact Us.</h3>
                    <h4 className="text-md 2xl:text-xl font-semibold tracking-wide mb-3">For employment related queries, try to visit our <Link className="font-bold text-orange-500 capitalize" href={'/careers'}>Careers page.</Link></h4>
                    <h3 className="text-xl xl:text-2xl font-semibold tracking-wide text-sky-900 mb-3">{`Share your details. We'll get back to you, ASAP.`}</h3>
                    <form className="flex flex-col w-full lg:w-[75%] 2xl:w-[70%]">
                        <div className='flex flex-col mb-2'>
                            <label className="text-md lg:text-lg font-[500] tracking-wide mb-1">{`I'm contacting for:`}</label>
                            <select className="bg-gray-100 px-2 py-1 lg:px-4 lg:py-2 border-2 border-gray-200 rounded-lg" name='reason' id='reason' onChange={(e) => setContactReason(e.target.value)} required>
                                <option className="text-gray-400" defaultChecked>Select the contact option</option>
                                {
                                    contactOptions.map((option, idx) => 
                                        <option value={option} key={idx}>{option}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className='flex flex-col mb-2'>
                            <label className="text-md lg:text-lg font-[500] tracking-wide mb-1">First name:</label>
                            <input type='text' className="bg-gray-100 px-2 py-1 lg:px-4 lg:py-2 border-2 border-gray-200 rounded-lg" name='firstname' id='firstname' required/>
                        </div>
                        <div className='flex flex-col mb-2'>
                            <label className="text-md lg:text-lg font-[500] tracking-wide mb-1">Last name:</label>
                            <input type='text' className="bg-gray-100 px-2 py-1 lg:px-4 lg:py-2 border-2 border-gray-200 rounded-lg" name='lastname' id='lastname' required/>
                        </div>
                        <div className='flex flex-col mb-2'>
                            <label className="text-md lg:text-lg font-[500] tracking-wide mb-1">Email:</label>
                            <input type='email' className="bg-gray-100 px-2 py-1 lg:px-4 lg:py-2 border-2 border-gray-200 rounded-lg" name='email' id='email' required/>
                        </div>
                        <div className='flex flex-col mb-2'>
                            <label className="text-md lg:text-lg font-[500] tracking-wide mb-1">Contact number:</label>
                            <input type='tel' className="bg-gray-100 px-2 py-1 lg:px-4 lg:py-2 border-2 border-gray-200 rounded-lg" name='contactnumber' id='contactnumber' required/>
                        </div>
                        <div className='flex flex-col mb-2'>
                            <label className="text-md lg:text-lg font-[500] tracking-wide mb-1">Message:</label>
                            <textarea rows={3} className="bg-gray-100 px-2 py-1 lg:px-4 lg:py-2 border-2 border-gray-200 rounded-lg" name='message' id='message' required/>
                        </div>
                        <button type='submit' className="text-lg lg:text-xl font-semibold tracking-wide bg-transparent border-2 border-sky-900 hover:bg-sky-900 hover:border-transparent hover:text-gray-100 text-sky-900 mt-5 w-fit px-5 py-2 rounded-md ">Submit</button>
                    </form>
                </div>
                <div className='flex flex-col justify-center h-fit my-auto border-2 rounded-2xl bg-gray-100 shadow-sm shadow-gray-400'>
                    <div className='flex flex-col items-center lg:items-start px-8 py-10 border-b-2'>
                        <PhoneCallIcon className="h-[4rem] w-auto text-orange-500 mb-3" />
                        <h3 className="text-xl 2xl:text-xl font-[500] tracking-wide text-sky-900 capitalize">To Call Us:</h3>
                        <Link href={'tel:+92000000000'} className="text-xl 2xl:text-2xl font-bold tracking-wide text-sky-900 border-b border-orange-500">+92 300 1234556</Link>
                    </div>
                    <div className='flex flex-col items-center lg:items-start px-8 py-10 border-b-2'>
                        <MailOpen className="h-[4rem] w-auto text-orange-500 mb-3" />
                        <h3 className="text-xl 2xl:text-xl font-[500] tracking-wide text-sky-900 capitalize">To Mail Us:</h3>
                        <Link href={'mailto:info@workhorizon.pk'} className="text-xl 2xl:text-2xl font-bold tracking-wide text-sky-900 border-b border-orange-500">info@workhorizon.pk</Link>
                    </div>
                    <div className='flex flex-col items-center lg:items-start px-8 py-10'>
                        <MapPin className="h-[4rem] w-auto text-orange-500 mb-3" />
                        <h3 className="text-xl 2xl:text-xl font-[500] tracking-wide text-sky-900 capitalize">Located At:</h3>
                        <Link href={'tel:+92000000000'} className="text-xl 2xl:text-2xl font-bold tracking-wide text-sky-900 border-b border-orange-500">DHA Phase 8, Lahore, Pk</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}