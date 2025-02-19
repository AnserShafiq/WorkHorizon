'use client'
import { Grip, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';


export default function MobileMenu() {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    // console.log(menuCall)
    return !openMenu ? (<Grip onClick={() => setOpenMenu(!openMenu)} />) : (
        <div className='w-full z-40 h-full fixed top-0 left-0 bg-transparent-one'>
            <X  className='absolute top-2 right-4 z-50' onClick={() => setOpenMenu(!openMenu)}/> 
            <div className='w-[88%] h-full flex flex-col items-start justify-between bg-sidemenu-bg'>
                <div>
                    <Image src={'/assets/logo.png'} alt='Work horizon mobile logo' className='w-full h-full' width={200} height={100}/>
                </div>
            </div>  
            
        </div>
    )
}