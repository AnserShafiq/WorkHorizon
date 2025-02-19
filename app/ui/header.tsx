'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Import Next.js pathname hook
import '../globals.css'
import MobileMenu from "./mobileMenu";

export default function MainHeader() {
    const pathname = usePathname(); // Get current path

    const [menuItems, setMenuItems] = useState([
        { link: '/', name: 'Home', active: false },
        { link: '/about-us', name: 'About Us', active: false },
        { link: '/careers', name: 'Careers', active: false },
        { link: '/contact-us', name: 'Contact Us', active: false },
    ]);

    useEffect(() => {
        setMenuItems((prevItems) =>
            prevItems.map(item => ({
                ...item,
                active: pathname === item.link || (pathname === '' && item.link === '/'), // Check for empty path
            }))
        );
    }, [pathname]); // Re-run effect when pathname changes

    return (
        <div className="w-full bg-headerBackground py-2 shadow-sm shadow-gray-300">
            <div className="flex justify-between px-2 xl:px-0 xl:grid xl:grid-cols-[20%,60%,20%] container">
                <div className="flex">
                    <Link className="hidden xl:block" href={'/'}>
                        <Image src={'/assets/Logo.png'} className="w-auto h-auto" alt='Work Horizon' width={250} height={100} />
                    </Link>
                    <Link className="block xl:hidden" href={'/'}>
                        <Image src={'/assets/Logo.png'} className="h-auto w-auto" alt='Work Horizon' width={175} height={100} />
                    </Link>
                </div>
                <div className="hidden xl:flex justify-center items-center gap-4">
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
                <div className="hidden xl:flex items-center justify-end">
                    000-000-0000
                </div>
                <div className="flex xl:hidden items-center justify-end">
                    <MobileMenu />
                </div>
            </div>
        </div>
    );
}
