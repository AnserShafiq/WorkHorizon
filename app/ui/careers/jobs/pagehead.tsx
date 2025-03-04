import Image from "next/image";
import Link from "next/link";


export default function JobsHead(){
    return(
        <div className='bg-neutral-100 w-full shadow-md shadow-gray-200'>
            <div className='container w-[88%] flex flex-col bg-neutral-100 items-center justify-center lg:w-full py-10 lg:py-20'>
                <Link href={'/careers/jobs'}><Image className="mb-3 lg:w-[300px] lg:h-auto object-cover" src={'/assets/logo.png'} width={300} height={200} alt="Jobs - Work Horizons"/></Link>
                <h3 className="text-3xl 2xl:text-4xl capitalize text-sky-900 font-bold mb-4 text-center">Job options at Work Horizon</h3>
                <p className="text-md lg:text-lg 2xl:text-xl capitalize font-normal tracking-wide text-center lg:mx-[20%]">{`We're eager to connect with talented individuals. Below, you'll find the current openings at Work Horizon where we’re looking for new team members.`}</p>
            </div>
        </div>
    )
}