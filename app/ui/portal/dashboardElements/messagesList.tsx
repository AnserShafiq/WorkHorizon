'use client'
import { Message } from "@/app/lib/elements"
import { useEffect, useState } from "react"


export default function MessagesList(){
    const [messages, setMessages] = useState<Message[]>([])
    

    useEffect(() => {
        const GetMessages = async() => {
            const response = await fetch('/api/message/limit');
            const received = await response.json();
            setMessages(received);
        }
        GetMessages()
        const interval = setInterval(GetMessages, 300000); // 300,000 ms = 5 minutes

        // Cleanup function to clear interval on unmount
        return () => clearInterval(interval);
    },[])


    return(
        <div className='mx-14 my-10 bg-gray-200 rounded-3xl p-8  shadow-xl shadow-gray-300'>
            <div className='bg-gray-100 h-full flex flex-col items-center rounded-3xl py-3 relative'> 
            <h3 className="w-fit mx-auto mt-2 text-2xl font-semibold text-sky-900 border-b border-orange-500">Latest Messages </h3> 
                <div className='mx-4 mt-4 w-[95%] min-h-[250px]'>
                    <div className="grid grid-cols-[20%,20%,60%] w-full grid items-center border-b border-sky-900 text-lg mb-1">
                        <h3 className='py-2 px-3 font-semibold capitalize text-sky-900'>{`Sender's Name`}</h3>
                        <h3 className='py-2 px-3 font-semibold capitalize text-sky-900'>{`Reason`}</h3>
                        <h3 className='py-2 px-3 font-semibold text-sky-900'>{`Message`}</h3>
                    </div>
                    {
                        messages.map((message) => 
                        <div className="grid grid-cols-[20%,20%,60%] w-full grid items-center border-b border-gray-200 text-lg mb-1" key={message.id}>
                            <h3 className='py-2 px-3 font-semibold capitalize'>{`${message.firstname} ${message.lastname}`}</h3>
                            <h3 className='py-2 px-3 font-semibold capitalize'>{`${message.reason === 'none' ? '---':message.reason}`}</h3>
                            <h3 className='py-2 px-3 font-semibold'>{`${message.message}`}</h3>
                        </div>
                        )
                    }
                    
                </div>
            </div>
        </div>
    )
}