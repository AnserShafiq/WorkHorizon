import Image from "next/image";

export default function PageIntro(){
    return(
        <div className="grid grid-cols-[50%,50%] w-full">
            <div className="flex flex-col w-full lg:py-10 lg:px-24">
                <div className=' grid grid-cols-[48%,48%] gap-[4%]'>
                    <Image src={'/assets/about-left-one.jpg'} className="h-[29vh] w-full object-cover object-left-top rounded-2xl shadow-xl shadow-gray-300" alt="About - Work Horizon - Left" width={500} height={300} />
                    <Image src={'/assets/hs3.jpg'} className="h-[26vh] w-full object-cover object-end rounded-2xl shadow-xl shadow-gray-300" alt="About - Work Horizon - Right" width={500} height={300} />
                </div>
                <div className='flex items-center mt-8 mx-4'>
                    <Image src={'/assets/about-center-one.jpg'} className="h-[35vh] w-full object-cover object-center rounded-2xl shadow-xl shadow-gray-300" alt="About - Work Horizon - Center" width={1000} height={600}  />
                </div>
            </div>
            <div className='flex flex-col justify-center lg:pr-8'>
                <h3 className="text-md lg:text-lg leading-1 uppercase tracking-wider font-bold text-orange-500">Who we are?</h3>
                <h2 className="text-3xl xl:text-4xl capitalize text-sky-900 font-bold mb-3">Empowering Careers and Driving Business Success Globally</h2>
                <p className="text-md lg:text-xl capitalize font-normal tracking-wide mb-3" data-aos='fade-up'>
                    <span className="text-orange-500 font-semibold uppercase">Work Horizon</span> is a dynamic and versatile organization, established with a commitment to excellence and global outreach. With a strong presence in the North American market, we provide industry-leading call center solutions across multiple sectors, including sales, administration, HR, and finance. Our extensive operations empower professionals to build successful careers while supporting businesses in achieving operational excellence.
                </p>
                <p className="text-md lg:text-xl capitalize font-normal tracking-wide" data-aos='fade-up'>
                With a mission to bridge the gap between talent and opportunity, Work Horizon offers an environment where innovation thrives, and careers flourish. Whether you are looking to advance in your field or explore new career paths, we are here to guide and support your journey toward success.
                </p>
            </div>
        </div>
    )
}