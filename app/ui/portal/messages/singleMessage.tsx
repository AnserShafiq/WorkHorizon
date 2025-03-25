'use client'
import { Message } from "@/app/lib/elements";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";


export default function SingleMessage({id}:{id: string | undefined}){
    
    const [message, setMessage]= useState<Message | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
        const getMessage = async() => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/message/getMessage?id=${id}`)
            const received = await response.json()
            setMessage(received[0]);
            setLoading(false);
        }
        getMessage();
    },[id])

    const handleDeleteMessage = async() => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/message/deleteMessage`, {
            method: 'DELETE',
            body: JSON.stringify(id),
        })
        if(res.status === 200){
            window.location.href='/portal/dashboard/contact-messages';
        }
    }
    return(
        <div className="container w-[88%] lg:w-[67%] 2xl:w-[57%] lg:min-h-[80vh] pt-8 pb-14 lg:py-14">
        {
            loading ? 
            <div className='w-full h-[80vh] flex flex-col items-center justify-center'>
                <TailSpin visible={true} height={50} width={50} color='#0C4A6E' ariaLabel='tail-spin-loading' radius={1} />
                <h3 className='text-md text-orange-500 font-semibold tracking-wide text-center'>Loading..</h3>                          
            </div>
            :
            <div className='grid grid-cols-[15%,85%]'>
                <h3 className="text-md font-normal p-4 border ">Sender Name:</h3>
                <h3 className="text-md font-normal p-4 border ">{`${message?.firstname} ${message?.lastname}`}</h3>

                <h3 className="text-md font-normal p-4 border ">Contact Number:</h3>
                <h3 className="text-md font-normal p-4 border ">{`${message?.country}-${message?.contactnumber}`}</h3>

                <h3 className="text-md font-normal p-4 border ">Email: </h3>
                <h3 className="text-md font-normal p-4 border ">{message?.email}</h3>

                <h3 className="text-md font-normal p-4 border ">Reason:</h3>
                <h3 className="text-md font-normal p-4 border ">{message?.reason}</h3>

                <h3 className="text-md font-normal p-4 border ">Message:</h3>
                <h3 className="text-md font-normal p-4 border ">{message?.message}</h3>

                
                <div className='col-span-full flex items-center py-8 gap-8 justify-center'>
                    <button onClick={handleDeleteMessage} className='px-4 py-2 bg-sky-900 font-semibold text-md text-gray-100 tracking-wider rounded-lg transition-transform duration-500 ease-in-out hover:scale-[1.03] shadow-lg' >Delete</button>
                </div>
                            
            </div>
        }
    </div>
    )
}