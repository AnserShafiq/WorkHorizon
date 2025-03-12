'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Import Next.js pathname hook
import '../globals.css'
import MobileMenu from "./mobileMenu";
import DropDown from "./dropdown";
import PortalHeader from "./portal/portal-header";

export default function MainHeader() {
    const pathname = usePathname(); // Get current path
    const [adminMenu, setAdminMenu] = useState<boolean>(false);
    const [headerDisplay, setHeaderDisplay] = useState<boolean>(true);
    const [lastScrollY, setLastScroll] = useState<number>(0)
    const [hideHeader, setHideHeader] =  useState<boolean>(false)
    const [menuItems, setMenuItems] = useState([
        { link: '/', name: 'Home', active: false },
        { link: '/about-us', name: 'About Us', active: false },
        { link: '/careers', name: 'Careers', active: false, dropdown:[ {link: '/careers', name: 'Careers Road Map'},{link:'/careers/jobs', name: 'Explore Jobs'}] },
        { link: '/contact-us', name: 'Contact Us', active: false },
    ]);

    const HandleScroll = () => {
        if(window.scrollY > lastScrollY && lastScrollY > 100){
            setHeaderDisplay(false)
        }else{
            setHeaderDisplay(true)
        }
        setLastScroll(window.scrollY)
    }

    useEffect(() => {
        if(pathname.includes('/jobs') && !pathname.includes('/jobs-list')){
            setHideHeader(true)
        }else{
            setHideHeader(false)
        }
    },[pathname])

    useEffect(() => {
        window.addEventListener('scroll', HandleScroll)
        return(() => {
            window.removeEventListener('scroll', HandleScroll)
        })
    })

    useEffect(() =>{
        if(pathname.includes('/portal')){
            setAdminMenu(true)
        }else{
            setAdminMenu(false)
        }
    },[pathname])

    useEffect(() => {
        setMenuItems((prevItems) =>
            prevItems.map(item => ({
                ...item,
                active: pathname === item.link || (pathname === '' && item.link === '/'), // Check for empty path
            }))
        );
    }, [pathname]); // Re-run effect when pathname changes

    return (
        <div className={`${hideHeader ? 'hidden':""} w-full bg-headerBackground py-3 shadow-sm shadow-gray-300 sticky top-0 z-50 transition-transform ease-in-out duration-500 transform ${headerDisplay ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className={`flex justify-between px-0 lg:grid ${adminMenu ? 'lg:grid-cols-[20%,10%,70%]':'lg:grid-cols-[20%,60%,20%]'} container`}>
                <div className="flex">
                    <Link className="block" href={'/'}>
                        <Image src={'/assets/Logo.png'} className="w-[13rem] lg:w-[15rem] h-auto" alt='Work Horizon' width={300} height={200} />
                    </Link>
                </div>
                <div className="hidden lg:flex justify-center items-center gap-8">
                    {
                    !adminMenu ? 
                        menuItems.map((Item, index) => 
                            Item.dropdown ? 
                                <DropDown mainMenu={Item} key={index}/>
                                :
                                <Link
                                    className={`relative text-lg xl:text-xl font-semibold tracking-wide transitive-underline ${Item.active ? 'text-[#F7801E]' : 'text-sky-900'} hover:text-sky-800`}
                                    href={Item.link}
                                    key={index}>
                                {Item.name} </Link>
                            
                        ):(
                            null
                        )
                    }
                </div>
                <div className="hidden lg:flex items-center justify-end">
                    {
                        adminMenu ? 
                            <PortalHeader />
                        :
                            <Link href={'tel:+923206460085'} className="relative text-md font-semibold text-orange-500 border-2 border-orange-500 transition-all ease-in-out duration-500 hover:scale-[1.05] hover:-top-[2px]  px-5 py-1 rounded-xl">
                                +92 320 6460085
                            </Link>
                    }
                </div>
                <div className="flex lg:hidden items-center justify-end">
                    <MobileMenu />
                </div>
            </div>
        </div>
    );
}
