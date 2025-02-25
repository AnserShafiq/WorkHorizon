import Image from "next/image";

export default function PageIntro(){
    return(
        <div className="grid grid-cols-[50%,50%] w-full">
            <div className="flex flex-col w-full lg:py-10 lg:px-24">
                <div className=' grid grid-cols-[48%,48%] gap-[4%]'>
                    <Image src={'/assets/about-left-one.jpg'} quality={100} className="h-[29vh] w-full object-cover object-left-top rounded-2xl shadow-xl shadow-gray-300" alt="About - Work Horizon - Left" width={200} height={125} />
                    <Image src={'/assets/hs3.jpg'} className="h-[26vh] w-full object-cover object-end rounded-2xl shadow-xl shadow-gray-300" alt="About - Work Horizon - Right" width={200} height={100} />
                </div>
                <div className='flex items-center mt-8 mx-4'>
                    <Image src={'/assets/hs1.jpg'} className="h-[35vh] w-full object-cover object-center rounded-2xl shadow-xl shadow-gray-300" alt="About - Work Horizon - Center" width={200} height={125}  />
                </div>
            </div>
            <div className='flex flex-col lg:pr-8 lg:py-20'>
                <h3 className="text-md font-normal leading-1 uppercase tracking-wider font-semibold text-orange-500">Who we are?</h3>
                <Image src={'/assets/hs1.jpg'} alt="checking" width={400} height={250}/>
            </div>
        </div>
    )
}