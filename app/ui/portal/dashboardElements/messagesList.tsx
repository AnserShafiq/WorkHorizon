'use client'
import { Message } from "@/app/lib/elements"
import { Asterisk } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { TailSpin } from "react-loader-spinner"


export default function MessagesList(){
    const [messages, setMessages] = useState<Message[]>([])
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const GetMessages = async() => {
            const response = await fetch('/api/message/limit');
            const received = await response.json();
            setMessages(received);
            setLoading(false)
        }
        GetMessages()
        const interval = setInterval(GetMessages, 300000); 

        return () => clearInterval(interval);
    },[])


    return(
        <div className='mx-14 my-10 bg-gray-200 rounded-3xl p-8  shadow-xl shadow-gray-300'>
            <div className='bg-gray-100 h-full flex flex-col items-center rounded-3xl py-3 relative'> 
            <h3 className="w-fit mx-auto mt-2 text-2xl font-semibold text-sky-900 border-b border-orange-500">Latest Messages </h3> 
                <div className='mx-4 mt-4 w-[95%] min-h-[200px] max-h-[200px] 2xl:min-h-[250px] 2xl:max-h-[300px] overflow-auto flex flex-col relative'>
                    <div className="grid grid-cols-[20%,20%,60%] w-[98%] grid items-center border-b border-sky-900 text-lg mb-1">
                        <h3 className='py-2 px-3 font-semibold capitalize text-sky-900'>{`Sender's Name`}</h3>
                        <h3 className='py-2 px-3 font-semibold capitalize text-sky-900'>{`Reason`}</h3>
                        <h3 className='py-2 px-3 font-semibold text-sky-900'>{`Message`}</h3>
                    </div>
                    {
                        loading ? <div className="w-full h-[200px] flex flex-col justify-center items-center ">
                            <TailSpin visible={true} height={50} width={50} color='#0C4A6E' ariaLabel='tail-spin-loading' radius={1} />
                        </div> :
                        
                            messages.length > 0 ? 
                            messages.map((message) => 
                                <div className={`grid grid-cols-[20%,20%,60%] w-[98%] grid items-start border-b border-gray-200 mb-1 `} key={message.id}>
                                    <h3 className={`flex relative w-fit py-2 pl-3 ${message.status === 'New' ? 'font-semibold text-sky-900':'font-normal'} capitalize text-lg`}>{`${message.firstname} ${message.lastname}`} {message.status==='New' ? <Asterisk className='text-red-600 absolute -right-3 w-3 h-auto' /> : null}</h3>
                                    <h3 className={`py-2 px-3 ${message.status === 'New' ? 'font-semibold text-sky-900':'font-normal'} capitalize text-lg`}>{`${message.reason === 'none' ? '---':message.reason}`}</h3>
                                    <div className='grid grid-cols-[90%,10%] items-center'>
                                        <h3 className={`py-2 px-3 ${message.status === 'New' ? 'font-semibold text-sky-900':'font-normal'} capitalize text-lg truncate`}>{`${message.message}`}</h3>
                                        <Link href={`/portal/dashboard/contact-messages/cm-wh-${message.id}`} className={`${message.status === 'New' ? 'text-sky-900': ''} font-semibold text-sm border-b border-orange-500 w-fit mx-auto`}>View</Link>
                                    </div>
                                </div>
                                ) : <div className='flex flex-col items-center justify-center h-[200px] w-full'>
                                    <h2 className="text-lg lg:text-xl text-gray-400 font-semibold capitalize text-center">No new message</h2>
                                </div>        
                    }
                
                </div>
                <Link href='/portal/dashboard/contact-messages' className="mt-6 px-4 py-2 text-gray-100 rounded-xl font-semibold tracking-wide bg-sky-900 border-2 border-transparent hover:border-sky-900 hover:text-sky-900 hover:bg-transparent w-fit mx-auto transition-transform ease-in-out duration-300 hover:scale-[1.03]">View All</Link>
            </div>
        </div>
    )
}