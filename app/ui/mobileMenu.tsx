'use client'
import { Grip, MailIcon, MapPin, PhoneCall, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function MobileMenu() {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const menu = [
        { link: '/', name: 'Home', active: false },
        { link: '/about-us', name: 'About Us', active: false },
        { link: '/careers', name: 'Careers', active: false },
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
                    <X className="absolute w-6 h-auto text-white top-4 right-5 z-50 cursor-pointer" onClick={() => setOpenMenu(false)} />

                    {/* Sidebar */}
                    <div className={`w-[88%] flex flex-col justify-between h-screen bg-sidemenu-bg px-5 py-10 fixed top-0 left-0 transform transition-transform ease-in-out duration-[0.7s] ${openMenu ? 'translate-x-0':'-translate-x-full'} `}>
                        <Image src={'/assets/logo.png'} alt='Work horizon mobile logo' width={200} height={100} className='w-[15rem] h-auto' />
                        <div className='flex flex-col mt-14 pr-8'>
                            {
                                menu.map((item, idx) => 
                                    <Link href={item.link} key={idx} className='text-xl text-sky-900 font-semibold border-b border-gray-100 mb-5 '>{item.name}</Link>
                                )
                            }
                        </div>
                        <div className='flex flex-col'>
                            <div className='grid grid-cols-[20%,80%]  mb-3 items-center'>
                                <div className='border-2 border-sky-900 flex p-3 w-fit rounded-[50%] justify-center'>
                                <PhoneCall className='w-6 h-auto text-sky-900'/>
                                </div>
                                <div className='flex flex-col pl-1'>
                                    <h3 className='text-lg font-semibold tracking-wide text-gray-700'>Phone</h3>
                                    <h3 className='text-lg font-semibold tracking-wide text-sky-900'>92 000 0000000</h3>
                                </div>
                            </div>
                            <div className='grid grid-cols-[20%,80%] mb-3 items-center'>
                                <div className='border-2 border-sky-900 flex p-3 w-fit rounded-[50%] justify-center'>
                                <MailIcon className='w-6 h-auto text-sky-900'/>
                                </div>
                                <div className='flex flex-col pl-1'>
                                    <h3 className='text-lg font-semibold tracking-wide text-gray-700'>Email Us</h3>
                                    <h3 className='text-lg font-semibold tracking-wide text-sky-900'>info@workhorizon.pk</h3>
                                </div>
                            </div>
                            <div className='grid grid-cols-[20%,80%] items-center'>
                                <div className='border-2 border-sky-900 flex p-3 w-fit rounded-[50%] justify-center'>
                                <MapPin className='w-6 h-auto text-sky-900'/>
                                </div>
                                <div className='flex flex-col pl-1'>
                                    <h3 className='text-lg font-semibold tracking-wide text-gray-700'>Our Office</h3>
                                    <h3 className='text-lg font-semibold tracking-wide text-sky-900'>DHA Phase 8, Lahore, Pakistan</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
