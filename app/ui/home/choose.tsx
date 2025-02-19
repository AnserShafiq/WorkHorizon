import Image from "next/image"



export default function WhyChooseUs(){
    const points = [
        {
            point: 'Industry leading expertise',
            icon: '/assets/icons/expertise.png',
        },{
            point: 'Tailored business solutions',
            icon: '/assets/icons/business.png',
        },{
            point: 'Commitment to quality and innovation',
            icon: '/assets/icons/solutions.png',
        },{
            point: 'Cost-effective and scalable services',
            icon: '/assets/icons/scalable.png',
        },{
            point: 'Global reach and international expertise',
            icon: '/assets/icons/global.png',
        },
    ]
    return(
        <div className="flex flex-col items-center my-20 w-full">
            <h3 className="text-3xl xl:text-4xl capitalize text-sky-900 font-bold xl:mb-3" data-aos='fade-up'>Why Choose Us?</h3>
            <div className="grid grid-cols-5 gap-10">
                {
                    points.map((item, index) => 
                        <div className="flex flex-col items-center border text-center py-10 rounded-2xl bg-dullWhite shadow-sm px-3" key={index}>
                            <Image src={item.icon} alt={`WH - ${item.point}`} width={110} height={110}/>
                            <h3 className="text-lg xl:text-xl capitalize font-[500] mt-3 text-sky-900">{item.point}</h3>
                        </div>
                    )
                }
            </div>  
        </div>
    )
}