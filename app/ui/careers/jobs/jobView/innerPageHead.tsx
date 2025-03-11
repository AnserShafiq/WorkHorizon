
import Image from "next/image";
import Link from "next/link";
import ActiveSectionMenu from "./activeSection";
import { ArrowRight, Dot } from "lucide-react";
import { JobFormData } from "@/app/lib/elements";

type SetActiveSection = (section: string) => void

export default function SingleJobHead({ job, activeSection, setActiveSection }: { job: JobFormData, activeSection: string, setActiveSection: SetActiveSection }) {

    return (
        <div className='bg-neutral-100 w-full shadow-md shadow-gray-200'>
            <div className={`container w-[88%] lg:w-[77%] 2xl:w-[70%] flex pt-6`}>
                <Link href={'/'} className="hidden lg:block text-gray-500 font-semibold text-sm underline">Home</Link>
                <ArrowRight className="hidden lg:block w-4 h-auto text-gray-500 mx-3" />
                <Link href={'/careers'} className="hidden lg:block text-gray-500 font-semibold text-sm underline">Careers</Link>
                <ArrowRight className="w-4 h-auto text-gray-500 mr-2 lg:mx-3 rotate-180 lg:rotate-0" />
                <Link href={'/careers/jobs'} className="text-orange-500 lg:text-gray-500 font-semibold text-sm underline">Jobs</Link>
                <ArrowRight className="hidden lg:block w-4 h-auto text-gray-500 mx-3" />
                <Link href={'/careers/jobs'} className="hidden lg:block text-orange-500 font-semibold text-sm underline">{job?.title}</Link>
            </div>
            <div className='container w-[88%] relative flex flex-col bg-neutral-100 items-center justify-center lg:w-full pt-10 lg:pt-8 lg:pb-0'>
                <Link href={'/careers/jobs'}><Image className="mb-5 w-[250px] lg:w-[300px] h-auto object-cover" src={'/assets/Logo.png'} width={300} height={200} alt="Work Horizon" /></Link>
                 <h3 className="text-xl lg:text-2xl 2xl:text-3xl font-semibold capitalize mb-3">{job.title}</h3>
                <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-4 mb-2'>
                    <h4 className="text-md text-gray-600 font-[500]">{job.worktype}</h4>
                    <Dot className="text-gray-600 hidden lg:block"/>
                    <h4 className="text-md text-gray-600 capitalize font-[500]">{job.department}</h4>
                    <Dot className="text-gray-600 hidden lg:block"/>
                    <h4 className="text-md text-gray-600 font-[500]">{job.contract}</h4>
                </div>
                <ActiveSectionMenu activeSection={activeSection} setActiveSection={setActiveSection} />
            </div>
        </div>
    );
}