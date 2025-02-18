'use client'
import { Cross, Grip } from 'lucide-react';
import { useState } from 'react';


export default function MobileMenu() {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    // console.log(menuCall)
    return !openMenu ? (<Grip onClick={() => setOpenMenu(!openMenu)} />) : (
        <div className='w-full z-50 h-full fixed top-0 left-0 bg-transparent-one'>
            <Cross />
            <div className='w-[88%] h-full flex flex-col items-end justify-end bg-sidemenu-bg'>
                Side menu
            </div>
            
        </div>
    )
}