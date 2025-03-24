'use client'

import { Message } from "@/app/lib/elements";
import Link from "next/link";
import { useEffect, useState } from "react"
import { TailSpin } from "react-loader-spinner";


export default function MessagesList(){

    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getMessages = async() => {
            const response = await fetch('/api/message/getMessages')
            const received = await response.json()
            setMessages(received);
            setLoading(false)
        }
        getMessages()
    },[])

    return(
        <div className='container w-[88%] lg:w-[77%] 2xl:w-[70%] lg:min-h-[80vh] pt-8 pb-14 lg:py-14'>
            <h3 className="text-2xl lg:text-3xl font-semibold text-sky-900 border-b-2 px-1 mx-auto mb-5 border-orange-500 w-fit capitalize">All contact messages</h3>
            <table className='w-full'>
                <thead>
                    <tr className='bg-gray-100 rounded-t-xl grid grid-cols-[25%,25%,50%] w-full'>
                        <th className="border rounded-tl-xl px-4 py-5 text-lg capitalize tracking-wide">Sender Name</th>
                        <th className="border px-4 py-5 text-lg capitalize tracking-wide">Reason</th>
                        <th className="border rounded-tr-xl px-4 py-5 text-lg capitalize tracking-wide">Message</th>
                    </tr>
                </thead>
                <tbody>
                {loading ? (
                        <tr>
                            <td className="col-span-full min-h-[50vh] flex flex-col gap-2 items-center justify-center">
                                <TailSpin visible={true} height={50} width={50} color='#0C4A6E' ariaLabel='tail-spin-loading' radius={1} />
                                <h3 className='text-md text-orange-500 font-semibold tracking-wide text-center'>Loading..</h3>
                            </td>
                        </tr>
                    ) : (
                        messages?.map((message) => 
                            <tr className='grid grid-cols-1 lg:grid-cols-[25%,25%,50%] items-center w-full border-b border-gray-300 hover:bg-gray-100 py-2' key={message.id}>
                                <td className="px-4 py-1 lg:py-3 font-semibold capitalize text-start lg:text-center text-sky-900 text-lg lg:text-lg">
                                    <Link href={`/portal/dashboard/contact-messages/cm-wh-${message.id}`} className="underline">
                                        {`${message.firstname} ${message.lastname}`}
                                    </Link>
                                </td>
                                <td className="px-4 py-1 lg:py-3 text-start lg:text-center text-md">
                                    <span className="font-semibold mr-2 inline-flex lg:hidden">Reason: </span>
                                    {message.reason}
                                </td>
                                <td className="px-4 py-1 lg:py-3 text-start text-md grid grid-cols-[88%,10%] gap-5">
                                    {/* <span className="font-semibold mr-2 inline-flex lg:hidden">Message: </span> */}
                                    <p className='truncate overflow-hidden'>{message.message}</p>
                                    
                                    <Link className="text-sky-900 font-semibold text-sm border-b border-orange-500 w-fit mx-auto" href={`/portal/dashboard/contact-messages/cm-wh-${message.id}`}>View</Link>
                                </td>
                            </tr>
                        )
                )}
                </tbody>
            </table>
        </div>
    )
}