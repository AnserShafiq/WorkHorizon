'use client'
import Image from "next/image";
import { useState } from "react";
import { TbPoint, TbPointFilled } from 'react-icons/tb';
export default function WhyWorkWithUs() {
    const [points, setPoints] = useState([
        { image:'/assets/careers-w-2.jpg',title: 'Competitive Salaries & Incentives', desc: 'Earn rewards for your hard work and performance.', active: true },
        { image:'/assets/careers-w-6.jpg',title: 'Fuel allowance & shuttle services', desc: 'Enjoy convenient transportation support with fuel allowances and shuttle services.', active: false },
        { image:'/assets/careers-w-1.jpg',title: 'Growth Opportunities', desc: 'We promote from within and provide career advancement to help you grow professionally.', active: false },
        { image:'/assets/careers-w-3.jpg',title: 'Global Exposure', desc: 'Work on international campaigns and enhance your skills with global experiences.', active: false },
        { image:'/assets/careers-w-4.jpg',title: 'Gazetted and Paid Leaves', desc: 'Enjoy gazetted holidays and paid leaves to maintain a healthy work-life balance.', active: false },

    ]);

    const changeActive = (index: number) => {
        setPoints(points.map((point, i) => ({
            ...point,
            active: i === index
        })));
    };

    return (
        <div className="w-full flex flex-col-reverse lg:grid lg:grid-cols-2 bg-special-blue my-10">
            <div className="container lg:w-[70%] pr-0 lg:pr-4 py-10 flex flex-col items-start justify-center">
                <h3 className="text-3xl 2xl:text-4xl capitalize text-gray-100 font-bold mb-3">
                    Why Work With Us
                </h3>
                <h3 className="text-md lg:text-lg 2xl:text-xl text-gray-100 mb-2 capitalize">
                    What makes Work Horizon an exciting place to work?
                </h3>
                {points.map((point, index) => (
                    <div 
                        className="grid grid-cols-[10%,90%] mb-3 cursor-pointer" 
                        key={index} 
                        onMouseEnter={() => changeActive(index)}
                    >
                        {
                            point.active ? <TbPointFilled className = 'text-gray-100 w-auto lg:w-[50px] lg:mx-auto h-[25px] lg:mt-1' />:<TbPoint className = 'text-gray-100 lg:mx-auto  w-auto lg:w-[50px] h-[25px] lg:mt-1' />
                        }
                        <h3 className="text-md lg:text-lg text-gray-100">
                            <span className="font-semibold text-orange-500 tracking-wide">
                                {point.title}:
                            </span> {point.desc}
                        </h3>
                    </div>
                ))}
            </div>
            <div className="h-[400px] lg:h-full 2xl:h-[600px]">
                <Image 
                    className="h-[400px] lg:h-full w-full object-center object-cover" 
                    src={`${points.find((point) => point.active)?.image}`} 
                    width={1000} 
                    height={800} 
                    alt="Why work with us - Work Horizon"
                />
            </div>
        </div>
    );
}
