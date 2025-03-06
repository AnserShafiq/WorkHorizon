'use client'
import { TargetWindowCheck } from "@/app/hooks/windowSize";
import Image from "next/image";
import { useEffect, useState } from "react"

function SlideShow(){
    const [currentSlide, setCurrentSlide]  = useState(0);
    const width:string = TargetWindowCheck();
    const Slides = [
        {
            img: width === 'D' ? '/assets/hs1.jpg' : '/assets/hs4.jpg',
            head: 'Exciting Career Opportunities', 
            desc: 'Join Work Horizon for diverse roles across multiple domains like sales, HR, marketing, and customer support, where each role offers room for growth and the chance to work in a fast-paced, innovative environment.'},
        {
            img:width === 'D' ? '/assets/hs2.jpg' : '/assets/hs5.jpg', 
            head: 'Global Career Growth', 
            desc:"Work with a globally expanding team that provides career development opportunities on an international scale. Gain valuable experience and exposure, allowing you to grow professionally while working with clients and colleagues from various regions."},
        {
            img: width === 'D' ? '/assets/hs3.jpg' : '/assets/hs6.jpg', 
            head: 'Professional Development Focus', 
            desc: 'At Work Horizon, we prioritize your personal and professional growth. We offer continuous learning opportunities, training programs, and mentorship, ensuring you have the tools and support needed to advance in your career and reach new heights.'}
    ]
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentSlide((prevIndex) => (prevIndex + 1) % Slides.length);
        }, 7000); // Change slide every 10 seconds
    
        return () => clearInterval(interval);
      });
    
    return(
        <div className="relative w-full h-[600px] lg:h-[650px] xl:h-[750px] overflow-hidden lg:rounded-2xl transition-transform duration-300 delay-100 translate-x-0 ease-in shadow-lg shadow-transparent-one">
            {Slides.map((slide, index) => (
                <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out delay-300 ${
                    currentSlide === index ? 'opacity-100' : 'opacity-0'
                }`}
                >
                <Image src={slide.img} className="object-cover object-center" fill sizes="100% xl:80% 2xl:100%" alt={`Work_Horizon_Slide_${index + 1}`}/>
                <div className={`absolute left-0 top-0 z-10 flex flex-col px-4 xl:px-32 pb-14 xl:pt-[575px] items-center justify-end xl:items-start xl:justify-start w-full h-full bg-transparent-bg-one `}>
                    <div className={` transform transition-transform duration-1000 text-center lg:text-start ease-in-out ${ currentSlide === index ? 'translate-x-0' : '-translate-x-full'}`}>
                        <h2 className="text-2xl lg:text-4xl font-bold text-orange-400 uppercase leading-tight">
                            {slide.head}
                        </h2>
                        <h3 className="text-md lg:text-lg font-normal text-sky-100 leading-tight mb-3">{slide.desc}</h3>
                    </div>
                </div>
                </div>
            ))}

            {/* Dots Indicator */}
            <div className="absolute bottom-4 z-10 left-0 right-0 flex justify-center gap-2">
                {Slides.map((_, idx) => (
                <div
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 w-2 rounded-full transition-all cursor-pointer ${
                    idx === currentSlide ? 'bg-orange-500 scale-125' : 'bg-gray-300'
                    }`}
                />
                ))}
            </div>

        </div>

    )

}

export default function HomeHead(){
    const width:string = TargetWindowCheck();
    return(
        <div className="container w-[88%] lg:w-full">
            <div className="mx-auto w-full pt-6 xl:pt-32 pb-16 lg:pb-20 xl:pb-40 grid lg:grid-cols-[50%,50%]">
                <div className="lg:pr-10">
                    <h3 className="text-sm font-normal leading-1"> <span className="font-bold uppercase ">Work Horizon</span> - Driving Sales, Expanding Horizons</h3>
                    <h3 className='text-3xl lg:text-5xl font-bold text-sky-900 uppercase lg:leading-tight mb-3'>Take your career to new heights with Work Horizon</h3>
                    <p className="text-md lg:text-xl font-normal tracking-wide">We empower businesses & professionals through innovative call center solutions, ensuring growth & success in a competitive world.</p>
                </div>
                <div className="lg:pl-12 pt-5">
                    <p className="text-md lg:text-xl font-normal tracking-wide">Join us on a journey of <span className='font-semibold italic text-orange-500'>Excellence</span>, where <span className='font-semibold italic text-orange-500'>Expertise</span> meets opportunity, & <span className='font-semibold italic text-orange-500'>Innovation</span> drives success. 
                        With a commitment to Professionalism & Customer Satisfaction, we provide Top-Tier Sales, Administration, HR, & Accounting 
                        services to help <span className="font-semibold uppercase text-orange-500">BUSINESSES THRIVE</span>.</p>
                    <p className="text-md lg:text-xl font-normal mt-3 tracking-wide">We operate on a global scale, serving clients across multiple industries & regions, ensuring seamless business solutions worldwide.</p>
                </div>
            </div>
            <div className="w-full 2xl:w-full relative mx-auto">
                <SlideShow />
                <Image className="w-[10vw] h-[10vw] hidden lg:block relative lg:absolute lg:-right-12 lg:-top-16 2xl:-right-16 rotate-6 z-40" width={width === 'D' ? 200:150} height={width === 'D' ? 200:150} src={'/assets/borderedLogo.png'} alt="Work Horizon Logo - Bordered" />
            </div>
        </ div>
    )
}