'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Import Next.js pathname hook
import '../globals.css'
import MobileMenu from "./mobileMenu";

export default function MainHeader() {
    const pathname = usePathname(); // Get current path

    const [headerDisplay, setHeaderDisplay] = useState<boolean>(true);
    const [lastScrollY, setLastScroll] = useState<number>(0)

    const [menuItems, setMenuItems] = useState([
        { link: '/', name: 'Home', active: false },
        { link: '/about-us', name: 'About Us', active: false },
        { link: '/careers', name: 'Careers', active: false },
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
        window.addEventListener('scroll', HandleScroll)
        return(() => {
            window.removeEventListener('scroll', HandleScroll)
        })
    })

    useEffect(() => {
        setMenuItems((prevItems) =>
            prevItems.map(item => ({
                ...item,
                active: pathname === item.link || (pathname === '' && item.link === '/'), // Check for empty path
            }))
        );
    }, [pathname]); // Re-run effect when pathname changes

    return (
        <div className={`w-full bg-headerBackground py-2 shadow-sm shadow-gray-300 sticky top-0 z-50 transition-transform ease-in-out duration-500 transform ${headerDisplay ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="flex justify-between px-0 lg:grid lg:grid-cols-[20%,60%,20%] container">
                <div className="flex">
                    <Link className="block" href={'/'}>
                        <Image src={'/assets/Logo.png'} className="w-[13rem] lg:w-[15rem] h-auto" alt='Work Horizon' width={300} height={200} />
                    </Link>
                </div>
                <div className="hidden lg:flex justify-center items-center gap-4">
                    {menuItems.map((Item, index) => (
                        <Link
                            className={`text-lg xl:text-xl font-semibold tracking-wide transitive-underline ${Item.active ? 'text-[#F7801E]' : 'text-sky-900'} hover:text-sky-800`}
                            href={Item.link}
                            key={index}
                        >
                            {Item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex items-center justify-end">
                    000-000-0000
                </div>
                <div className="flex lg:hidden items-center justify-end">
                    <MobileMenu />
                </div>
            </div>
        </div>
    );
}
