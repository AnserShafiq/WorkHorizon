import { MailIcon, PhoneCall } from "lucide-react";
import Link from "next/link";


export default function LetsTalk(){
    return(
        <div className='w-full bg-special-blue mt-[13rem]'>
            <div className="container grid grid-cols-[50%,50%]">
                <div className="py-20">
                    <h3 className="text-sm xl:text-lg text-gray-300 font-normal border-b border-orange-500 w-fit capitalize leading-1"> Achieve success with Work Horizon</h3>
                    <h3 className='text-3xl xl:text-5xl font-bold text-gray-100 capitalize tracking-wider lg:leading-tight my-3'>{`Let's Talk`}</h3>
                    <h4 className="text-sm xl:text-lg capitalize text-gray-300">Work horizon empowers you to unlock new opportunities and embrace innovation.</h4>
                    <div className="flex mt-32">
                        <PhoneCall className="w-[3.3rem] h-auto text-orange-500"/>
                        <div className="flex flex-col ml-2 py-0 pl-2 border-l border-gray-500">
                            <h4 className="text-md text-gray-300">For Inquiries</h4>
                            <Link className="text-lg xl:text-xl text-gray-100" href={'/'}>92 (300) 000 0000</Link>
                        </div>
                    </div>
                    <div className="flex mt-6">
                        <MailIcon className="w-[3.3rem] h-auto text-orange-500"/>
                        <div className="flex flex-col ml-2 py-0 pl-2 border-l border-gray-500">
                            <h4 className="text-md text-gray-300">To Mail</h4>
                            <Link className="text-lg xl:text-xl text-gray-100" href={'/'}>info@workhorizon.pk</Link>
                        </div>
                    </div>
                    <div className="flex flex-col mt-20">
                        <h4 className="text-lg capitalize text-gray-100 tracking-wide">Social just you connected us!</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}