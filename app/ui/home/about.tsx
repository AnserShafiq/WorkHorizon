import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";



export default function AboutSection () {
    return(
        <div className="my-14 xl:my-28 w-[92%] xl:w-full overflow-x-hidden container">
            <h3 className="text-3xl xl:text-4xl capitalize text-sky-900 font-bold xl:mb-3" data-aos='fade-up'>Beyond a Call Center – Your Growth Partner in Success</h3>
            <p className="text-md lg:text-xl capitalize font-normal tracking-wide" data-aos='fade-up'>
                At <span className="text-orange-500 font-semibold uppercase">Work Horizon</span>, we are more than just a call center—we are a trusted partner in business growth. With a team of skilled professionals and cutting-edge technology, we provide exceptional services in sales, administration, HR, and accounting. Our mission is to help businesses optimize their operations, improve customer interactions, and achieve sustainable success.
            </p>
            <div className="flex flex-col xl:grid xl:grid-cols-[45%,55%] my-5 w-full">
                <div className="xl:pr-5 xl:pl-3" data-aos='fade-up xl:fade-right'>
                    <Image src={'/assets/h7.jpg'} alt="About - Work Horizon" className="rounded-xl object-cover shadow-md shadow-transparent-one object-center w-full h-[350px] xl:h-[500px]" width={500} height={500} />
                </div>
                <div className="xl:pl-8 xl:pr-3 flex flex-col justify-start pt-10 xl:py-16" data-aos='fade-up xl:fade-left' data-aos-duration='700'>
                    <h3 className="text-sky-900 font-[600] uppercase xl:text-3xl mb-1">We believe in a customer-first approach,</h3> 
                    <p className="text-md lg:text-xl capitalize font-normal tracking-wide">
                    ensuring that every solution we deliver is tailored to meet the unique needs of our clients. With a strong commitment to innovation, efficiency, and excellence, Work Horizon continues to expand horizons for businesses and professionals alike.
                    </p>
                    <p className="text-md lg:text-xl capitalize font-normal tracking-wide mt-6">Operating globally, we support businesses across various industries, enabling them to scale efficiently and enhance their reach in international markets.</p>
                    <Link href={'/'} className="text-md xl:text-lg text-orange-500 hover:text-sky-900 font-semibold inline-flex items-center gap-4 mt-6 w-fit border hover:border border-x-transparent border-t-transparent hover:border-sky-900 hover:rounded-xl border-b-sky-900 pl-2 pr-1 hover:hover:py-2 sticky transition-auto ease-in-out duration-200 hover:scale-[1.1]">To Link With Us <ArrowRight className="w-5"/></Link>
                </div>
            </div>
        </div>
    )
}