import { ArrowRight } from "lucide-react";
import Link from "next/link";


export default function Footer(){
    const menuItems=[
        { link: '/', name: 'Home' },
        { link: '/about-us', name: 'About Us' },
        { link: '/careers', name: 'Careers' },
        { link: '/contact-us', name: 'Contact Us' },
    ];
    const careerItems=[
        { link: '/careers/jobs?department=Sales+%26+marketing', name: 'Sales & Marketing' },
        { link: '/careers/jobs?department=Digital+marketing+%26+I.T', name: 'Customer Support & Operations' },
        { link: '/careers/jobs?department=Human+resources+%26+Recruitment', name: 'HR & Recruitment' },
        { link: '/careers/jobs?department=Finance+%26+Accounting', name: 'Finance & Accounting' },
    ];
    return(
        <div className="block lg:mt-[500px]">
            <div className="bg-gray-300 relative lg:fixed bottom-0 -z-10 w-full lg:min-h-[500px]">
                <div className='container pb-6 pt-10 lg:pt-20 lg:pb-16'>
                    <h3 className="text-3xl lg:text-5xl font-bold tracking-wide text-sky-900 leading-tight">Next-Level Customer Experiences <br className="hidden lg:block"/>For Leading Brands</h3>
                    <div className="grid lg:grid-cols-[40%,13%,20%,27%] gap-2 mt-6">
                        <div>
                            <h3 className="text-md lg:text-lg text-gray-900 font-normal border-b border-orange-500 w-fit capitalize leading-1"> Achieve success with Work Horizon</h3>
                            <h3 className='text-2xl lg:text-5xl font-bold text-sky-900 capitalize tracking-wider lg:leading-tight my-3'>{`What sets us apart?`}</h3>
                            <h4 className="text-md lg:text-lg text-gray-900">We serve diverse sectors such as real estate, staffing, security, and more, offering a wide range of services and dynamic career growth opportunities.</h4>
                        </div>
                        <div />
                        <div >
                            <h3 className="text-xl xl:text-2xl font-bold text-sky-900 tracking-wide mb-3">Explore More</h3>
                            <div className="flex flex-col">
                                {
                                    menuItems.map((item,index) => 
                                        <Link className="text-md flex items-center 2xl:text-lg text-gray-600 tracking-wide mb-2 border-b border-transparent w-fit pb-1 leading-tight transition ease-in-out duration-300 hover:scale-(1.05) hover:translate-x-1 hover:text-sky-900 hover:border-orange-500" href={item.link} key={index}><ArrowRight className="mr-2 w-4"/> {item.name}</Link>
                                    )
                                }
                            </div>
                        </div>
                        <div >
                            <h3 className="text-xl xl:text-2xl font-bold text-sky-900 tracking-wide mb-3">Careers</h3>
                            <div className="flex flex-col">
                                {
                                    careerItems.map((item,index) => 
                                        <Link className="text-md flex items-center 2xl:text-lg text-gray-600 tracking-wide mb-2 border-b border-transparent w-fit pb-1 leading-tight transition ease-in-out duration-300 hover:scale-(1.05) hover:translate-x-1 hover:text-sky-900 hover:border-orange-500" href={item.link} key={index}><ArrowRight className="mr-2 w-4"/> {item.name}</Link>
                                    )
                                }
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="border-t container border-transparent-three py-1">
                    <h4 className="text-sm text-gray-700"><b>Work Horizon</b> - Copyright 2025 | All rights reserved.</h4>
                </div>
            </div>
        </div>      
    )
}