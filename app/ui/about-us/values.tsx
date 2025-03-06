import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


export default function Values(){
    const values = [
        {
            title:'Excellence',
            icons: '/assets/icons/about/excellence.png',
            tagline: 'Commitment to delivering high-quality service and continuous improvement.',
        },{
            title:'Innovation',
            icons: '/assets/icons/about/innovation.png',
            tagline: 'Leveraging cutting-edge technology and creative strategies to enhance business operations.',
        },{
            title:'Integrity',
            icons: '/assets/icons/about/integrity.png',
            tagline: 'Conducting business with honesty, transparency, and accountability.',
        },{
            title:'Collaboration',
            icons: '/assets/icons/about/collaboration.png',
            tagline: 'Fostering teamwork and strong partnerships with clients and employees.',
        },{
            title:'Customer Focus',
            icons: '/assets/icons/about/focus.png',
            tagline: 'Prioritizing client needs and delivering personalized solutions that drive success.',
        },
    ]
    return(
        <div className='container w-[88%] lg:w-full flex flex-col items-center mb-10 lg:m-auto' >
            <div className='shadow-lg shadow-gray-300 rounded-2xl px-3 lg:px-8 w-full py-10 lg:py-14 bg-gray-300' data-aos='fade-up'>
                <h3 className='text-3xl lg:text-5xl font-bold text-sky-900 uppercase lg:leading-tight mb-3 '>Values That Shape Success</h3>
                <p className="text-lg lg:text-2xl">Work Horizon believes that embedding core values across an organization fuels collaboration, productivity, and long-term growth.</p>
            </div>
            <div className='py-10 lg:py-14 flex flex-col flex-wrap 2xl:flex-nowrap lg:flex-row lg:justify-center gap-10' data-aos='fade-up'>
                {
                    values.map((value, idx) => 
                    <div className={`flex flex-col items-center mx-auto lg:mx-0 w-[70%] lg:w-1/4 2xl:w-1/5 border border-sky-900 py-5 px-4 rounded-2xl text-center shadow-xl shadow-gray-200`} key={idx}>
                        <Image src={value.icons} className="w-[7rem] h-auto" alt={`${value.title}'s icon - Work Horizon`} width={100} height={100} />
                        <h4 className="text-3xl lg:text-2xl font-semibold capitalize tracking-wide text-sky-900 my-2">{value.title}</h4>
                        <p className="text-md 2xl:text-lg">{value.tagline}</p>
                    </div>
                )
                }
            </div>
            <Link href={'/contact-us'} data-aos='fade-up' className="inline-flex items-center text-md lg:text-lg 2xl:text-xl font-semibold border-2 border-transparent bg-sky-900 text-gray-100 px-5 py-2 rounded-2xl mx-auto hover:bg-transparent hover:border-sky-900 hover:text-sky-900">Contact Us <ArrowRight className="ml-2"/></Link>
        </div>
    )
}