
import Image from "next/image"
import Link from "next/link"

export default function Vision_Mission(){
    
    const content = [
        {
            image:'/assets/about-vision.jpg',
            title: 'Our Vision',
            description: 'To be a globally recognized leader in call center solutions, setting new industry standards and driving business success through continuous innovation, exceptional service, and operational excellence. We strive to empower organizations worldwide by providing cutting-edge communication solutions that enhance customer engagement, streamline operations, and maximize efficiency.',
        },{
            image: '/assets/about-mission.jpg',
            title: 'Our Mission',
            description: 'To empower businesses of all sizes by delivering seamless, reliable, and high-performing call center services in sales, administration, HR, and accounting. Our mission is to enhance operational efficiency, drive sustainable growth, and ensure superior customer satisfaction through technology-driven solutions, expert workforce management, and a commitment to excellence.',
        }
    ]

    return(
        <div className='container w-[88%] lg:w-full' id='next'>
            <div className='flex flex-row flex-wrap justify-between'>
                {
                    content.map((target, idx) => 
                        <div className={`flex flex-col md:w-[50%] border-gray-[400] py-5 lg:pt-10 lg:pb-20 ${idx === 0 ? 'lg:border-r md:pr-8 2xl:pr-14': 'md:border-l md:pl-8 2xl:pl-14'}`} key={idx}>
                            <Image className="h-[40vh] 2xl:h-[400px] object-cover w-full rounded-xl" quality={100} src={target?.image} alt={target.title} width={1000} height={800}  data-aos='fade-up'/>
                            <div className='lg:px-4 xl:px-7 py-5 flex flex-col' data-aos='fade-up'>
                                <h3 className="text-sky-900 font-bold capitalize border-b border-orange-500 w-fit text-2xl lg:text-3xl mb-3">{target.title}</h3>
                                <p className="text-md 2xl:text-lg font-normal tracking-wide mb-5"> {target.description} </p>
                                <Link className='text-md 2xl:text-lg text-gray-100 bg-sky-900 px-5 py-2 w-fit rounded-3xl transition-all ease-in-out duration-300 hover:scale-[1.05]' href={'/careers/jobs'}>Apply Now</Link>
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    )
}