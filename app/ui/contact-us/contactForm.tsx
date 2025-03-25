import { countries } from "@/app/lib/countries";
import { Message } from "@/app/lib/elements";
import { MailOpen, MapPin, PhoneCallIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";



export default function ContactForm(){
        const [selectCountry, setSelectedCountry] = useState<string|undefined>('+92');
        const [submit, setSubmit] = useState<boolean>(false);
        const [contactNumber, setContactNumber] = useState<string|undefined> ('');
        const [contactReason, setContactReason] = useState<string>('');
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
    

    const contactOptions = [
        'For general query', 'Getting services information', 'Getting job options'
    ]
    console.log('Reasons of contacting us=> ', contactReason)
     const handleSubmission = async(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            const formData = new FormData(e.currentTarget);
            const Message:Message = {
                id:null,
                firstname: formData.get('firstname')?.toString() || '',
                lastname: formData.get('lastname')?.toString() || '',
                reason: formData.get('reason')?.toString() || '',
                contactnumber: formData.get('contactnumber')?.toString() || '',
                country: formData.get('country')?.toString() || '',
                email: formData.get('email')?.toString() || '',
                message: formData.get('message')?.toString() || '',
                date: '',
                status: '',
            }
            const response = await fetch('/api/message',{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(Message)
            })
            if(response.ok){
                setSubmit(true)
            }
        }
        useEffect(() => {
                if (submit) {
                    const timeout = setTimeout(() => {
                        window.location.reload();
                    }, 5000);
            
                    return () => clearTimeout(timeout);
                }
            }, [submit]);
    
    return(
        <div className='container w-[88%] lg:w-full min-h-[92vh] flex items-center'>
            <div className="grid lg:grid-cols-[70%,30%] w-full mb-10 py-10 lg:py-20 lg:mb-1">
                <div className='block mb-8 lg:m-0'>
                    <h3 className="text-2xl xl:text-3xl font-bold tracking-wide text-sky-900 mb-3">Contact Us.</h3>
                    <h4 className="text-md 2xl:text-xl font-semibold tracking-wide mb-3">For employment related queries, try to visit our <Link className="font-bold text-orange-500 capitalize" href={'/careers/jobs'}>Careers page.</Link></h4>
                    <h3 className="text-xl xl:text-2xl font-semibold tracking-wide text-sky-900 mb-3">{`Share your details. We'll get back to you, ASAP.`}</h3>
                    <form className="flex flex-col w-full lg:w-[75%] 2xl:w-[70%]" onSubmit={handleSubmission}>
                        <div className='flex flex-col mb-2'>
                            <label className="text-md lg:text-lg font-[500] tracking-wide mb-1">{`I'm contacting for:`}</label>
                            <select className="bg-gray-100 px-2 py-1 lg:px-4 lg:py-2 border-2 border-gray-200 rounded-lg" name='reason' id='reason' onChange={(e) => setContactReason(e.target.value)} required>
                                <option className="text-gray-400" value={''}>Select the contact option</option>
                                {
                                    contactOptions.map((option, idx) => 
                                        <option value={option} key={idx}>{option}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className='flex flex-col mb-2'>
                            <label className="text-md lg:text-lg font-[500] tracking-wide mb-1">First name:</label>
                            <input type='text' className="bg-gray-100 px-2 py-1 lg:px-4 lg:py-2 border-2 border-gray-200 rounded-lg" name='firstname' id='firstname' required placeholder="Enter your firstname"/>
                        </div>
                        <div className='flex flex-col mb-2'>
                            <label className="text-md lg:text-lg font-[500] tracking-wide mb-1">Last name:</label>
                            <input type='text' className="bg-gray-100 px-2 py-1 lg:px-4 lg:py-2 border-2 border-gray-200 rounded-lg" name='lastname' id='lastname' required placeholder="Enter your lastname"/>
                        </div>
                        <div className='flex flex-col mb-2'>
                            <label className="text-md lg:text-lg font-[500] tracking-wide mb-1">Email:</label>
                            <input type='email' className="bg-gray-100 px-2 py-1 lg:px-4 lg:py-2 border-2 border-gray-200 rounded-lg" name='email' id='email' required placeholder="Enter your email"/>
                        </div>
                        <div className='flex flex-col mb-2'>
                            <label className="text-md lg:text-lg font-[500] tracking-wide mb-1">Contact number:</label>
                            <div className='grid grid-cols-[18%,82%]'>
                                <select className="border pl-2 rounded-l-xl bg-gray-200 cursor-pointer" name="country" id='country' value={selectCountry} onChange={handleCountry} required>
                                    <option value=''></option>
                                    {
                                        countries.map((country, index) => 
                                            <option value={country.code} key={index}> {selectCountry === country.code ? null : country.name} {country.flag} {country.code}</option>
                                        )
                                    }
                                </select>
                                <input required className="bg-gray-100 px-2 py-1 lg:px-4 lg:py-2 border-2 border-gray-200 rounded-r-lg" type='tel' name="contactnumber" id='contactnumber' value={contactNumber} onChange={(e) => handleContactNumber(e.target.value)} placeholder="Contact number"/>
                            </div>
                        </div>
                        <div className='flex flex-col mb-2'>
                            <label className="text-md lg:text-lg font-[500] tracking-wide mb-1">Message:</label>
                            <textarea rows={3} className="bg-gray-100 px-2 py-1 lg:px-4 lg:py-2 border-2 border-gray-200 rounded-lg" name='message' id='message' required placeholder="Message..."/>
                        </div>
                        <button type='submit' className="text-lg lg:text-xl font-semibold tracking-wide bg-transparent border-2 border-sky-900 hover:bg-sky-900 hover:border-transparent hover:text-gray-100 text-sky-900 mt-5 w-fit px-5 py-2 rounded-md ">Submit</button>
                    </form>
                </div>
                <div className='flex flex-col justify-center h-fit my-auto border-2 rounded-2xl bg-gray-100 shadow-sm shadow-gray-400'>
                    <div className='flex flex-col items-center lg:items-start px-8 py-10 border-b-2'>
                        <PhoneCallIcon className="h-[4rem] w-auto text-orange-500 mb-3" />
                        <h3 className="text-xl 2xl:text-xl font-[500] tracking-wide text-sky-900 capitalize">To Call Us:</h3>
                        <Link href={'tel:+923206460085'} className="text-xl 2xl:text-2xl font-bold tracking-wide text-sky-900 border-b border-orange-500">+92 320 6460085</Link>
                    </div>
                    <div className='flex flex-col items-center lg:items-start px-8 py-10 border-b-2'>
                        <MailOpen className="h-[4rem] w-auto text-orange-500 mb-3" />
                        <h3 className="text-xl 2xl:text-xl font-[500] tracking-wide text-sky-900 capitalize">To Mail Us:</h3>
                        <Link href={'mailto:hr@workhorizon.pk'} className="text-xl 2xl:text-2xl font-bold tracking-wide text-sky-900 border-b border-orange-500">hr@workhorizon.pk</Link>
                    </div>
                    <div className='flex flex-col items-center lg:items-start px-8 py-10'>
                        <MapPin className="h-[4rem] w-auto text-orange-500 mb-3" />
                        <h3 className="text-xl 2xl:text-xl font-[500] tracking-wide text-sky-900 capitalize">Located At:</h3>
                        <Link href={'https://maps.app.goo.gl/8wxyANfpWtUkDN878'} className="text-xl 2xl:text-2xl font-bold tracking-wide text-sky-900 w-fit border-b border-orange-500">Sunny Plaza, Eden City,<br/> DHA Phase 8, Lahore, PK.</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}