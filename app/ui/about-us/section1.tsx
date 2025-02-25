import Image from "next/image";


export default function PageIntro(){
    return(
        <div className="grid grid-cols-[50%,50%] w-full">
            <div className="flex flex-col w-full border-2 border-red-900 lg:py-20 lg:px-24">
                <div className='wrapper grid grid-cols-[48%,48%] gap-[4%]'>
                    <Image src={'/assets/about/left.jpg'} className="h-[25vh] w-full object-cover object-top rounded-2xl shadow-xl shadow-gray-300" alt="About - Work Horizon - Left" width={200} height={125} />
                    <Image src={'/assets/about/right.jpg'} className="h-[23vh] w-full object-cover object-end rounded-2xl shadow-xl shadow-gray-300" alt="About - Work Horizon - Right" width={200} height={100} />
                
                </div>
                <div className='flex items-center mt-8 mx-6'>
                    <Image src={'/assets/about/center.jpg'} className="h-[35vh] w-full object-cover rounded-2xl shadow-xl shadow-gray-300" alt="About - Work Horizon - Center" width={200} height={125}  />
                </div>
            </div>
            <div className='flex flex-col lg:pr-8 lg:py-20'>
                <h3 className="text-md font-normal leading-1 uppercase tracking-wider font-semibold text-orange-500">Who we are?</h3>
                
            </div>
        </div>
    )
}