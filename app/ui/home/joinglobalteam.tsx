import { CheckCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";



export default function JoinGlobalTeam(){
    return(
        <div className="my-14 lg::my-28 overflow-x-hidden container w-[88%] xl:w-full">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-[55%,45%] my-5 w-full">
                <div className="lg:pr-8 lg:pl-2 flex flex-col relative justify-start pt-8 lg:pt-12" data-aos='fade-right' data-aos-duration='700'>
                    <h3 className="text-3xl xl:text-4xl capitalize text-sky-900 font-bold xl:mb-3">Join a global team</h3> 
                    <p className="text-md lg:text-xl font-normal tracking-wide">
                    {`Become a part of Work Horizon, a globally expanding organization that offers dynamic career opportunities. We welcome innovative thinkers with a go-getter attitude, driven by a passion for excellence and growth. If you're looking for a challenging role where each day brings new opportunities, then Work Horizon is the perfect place for you!`}
                    </p>
                    <p className="text-md lg:text-xl font-normal tracking-wide mt-6">With a strong commitment to professional development, collaboration, and innovation, we empower our team to succeed in a competitive, fast-paced environment. Join us and be part of a company that is shaping the future of business solutions worldwide.</p>
                    <Link href={'/careers/jobs'} className="text-md xl:text-lg text-orange-500 hover:text-sky-900 font-semibold inline-flex items-center gap-4 mt-6 w-fit border hover:border border-x-transparent border-t-transparent hover:border-sky-900 hover:rounded-xl border-b-sky-900 pl-2 pr-1 hover:px-4 hover:py-2 sticky transition-auto ease-in-out duration-200 hover:scale-[1.1]">Apply Now <CheckCheck className="w-5"/></Link>
                </div>
                <div className="lg:pl-5 lg:pr-3" data-aos='fade-left'>
                    <Image src={'/assets/h8.jpg'} alt="About - Work Horizon" className="rounded-xl object-cover object-center shadow-md shadow-transparent-one w-full h-[350px] lg:h-[500px]" width={500} height={500} />
                </div>
            </div>
        </div>
    )
}