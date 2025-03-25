import Image from "next/image";
import Link from "next/link";

export default function ForJobEnquiries(){
    return(
        <div className='container w-[88%] flex flex-col-reverse lg:w-full lg:grid lg:gap-6 lg:grid-cols-2 py-10'>
            <div className='flex flex-col items-start justify-center mt-6'>
                <h3 className="text-md font-semibold tracking-wide text-orange-500">Get In Touch</h3>
                <h3 className="text-xl lg:text-3xl font-bold text-sky-900 capitalize">For job inquiries, reach out to us at:</h3>
                <Link className="text-lg lg:text-2xl font-normal border-b border-orange-500 mt-2 lg:mt-3" href='mailto:hr@workhorizon.pk' >hr@workhorizon.pk</Link>
            </div>
            <div className='flex items-center justify-center'>
                <Image className="w-full h-[350px] lg:w-[600px] lg:h-[400px] object-cover rounded-br-[5rem] lg:rounded-br-none lg:rounded-bl-[5rem] rounded-tl-[5rem] lg:rounded-tl-none lg:rounded-tr-[5rem] " src={'/assets/careers-end.jpeg'} alt="" width={800} height={800} />
            </div>
        </div>
    )
}