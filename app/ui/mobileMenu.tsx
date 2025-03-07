'use client'
import { Grip, MailIcon, MapPin, PhoneCall, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import DropDown from './dropdown';

export default function MobileMenu() {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const menu = [
        { link: '/', name: 'Home', active: false },
        { link: '/about-us', name: 'About Us', active: false },
        { link: '/careers', name: 'Careers', active: false, dropdown:[{name:'Careers road map', link: '/careers'}, {name: 'Explore jobs', link: '/careers/jobs'}] },
        { link: '/contact-us', name: 'Contact Us', active: false },
    ]
    useEffect(() => {
        if(openMenu){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    })

    return (
        <>
            {!openMenu ? (
                <Grip onClick={() => setOpenMenu(true)} className="cursor-pointer" />
            ) : (
                <div className="w-full h-screen fixed top-0 left-0 z-40 bg-black/50">
                    {/* Close Icon */}
                    <X className="absolute w-5 h-auto text-white top-4 right-5 z-50 cursor-pointer" onClick={() => setOpenMenu(false)} />

                    {/* Sidebar */}
                    <div className={`w-[88%] h-auto min-h-[100vh] bg-sidemenu-bg px-5 fixed top-0 left-0 transform transition-transform ease-in-out duration-[0.7s] ${openMenu ? 'translate-x-0':'-translate-x-full'} `}>
                        <div className='grid grid-rows-[30%,45%,20%] h-[90vh] my-[3vh]'>
                        <div className=''>
                            <Image src={'/assets/mobile-logo-2.png'} alt='Work horizon mobile logo' width={200} height={100} className='w-[11rem] h-auto' />
                        </div>
                        <div className='flex flex-col pr-8'>
                            {
                                menu.map((item, idx) => 
                                    item.dropdown ? 
                                <DropDown mainMenu={item} key={idx}/>
                                :
                                <Link href={item.link} key={idx} className='text-xl text-sky-900 font-semibold border-b border-gray-100 mb-3' onClick={() => setOpenMenu(!openMenu)}>{item.name}</Link>   
                                )
                            }
                        </div>
                        <div className='flex flex-col'>
                            <div className='grid grid-cols-[20%,80%]  mb-3 items-center'>
                                <div className='border-2 border-sky-900 flex p-3 w-fit rounded-[50%] justify-center'>
                                    <PhoneCall className='w-5 h-auto text-sky-900'/>
                                </div>
                                <div className='flex flex-col pl-1'>
                                    <h3 className='text-md font-semibold tracking-wide text-gray-700'>Phone</h3>
                                    <Link href='tel:+923206460085' className='text-md font-semibold tracking-wide text-sky-900'>92 320 6460085</Link>
                                </div>
                            </div>
                            <div className='grid grid-cols-[20%,80%] mb-3 items-center'>
                                <div className='border-2 border-sky-900 flex p-3 w-fit rounded-[50%] justify-center'>
                                    <MailIcon className='w-5 h-auto text-sky-900'/>
                                </div>
                                <div className='flex flex-col pl-1'>
                                    <h3 className='text-md font-semibold tracking-wide text-gray-700'>Email Us</h3>
                                    <Link href='mailto:hr@workhorizon.pk' className='text-md font-semibold tracking-wide text-sky-900'>hr@workhorizon.pk</Link>
                                </div>
                            </div>
                            <div className='grid grid-cols-[20%,80%] items-start'>
                                <div className='border-2 border-sky-900 flex p-3 mt-1 w-fit rounded-[50%] justify-center'>
                                    <MapPin className='w-5 h-auto text-sky-900'/>
                                </div>
                                <div className='flex flex-col pl-1'>
                                    <h3 className='text-md font-semibold tracking-wide text-gray-700'>Our Office</h3>
                                    <h3 className='text-md font-semibold tracking-wide text-sky-900'>Sunny Plaza, Eden City, DHA Phase 8, Lahore,PK.</h3>
                                </div>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
