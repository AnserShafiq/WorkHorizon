import Image from "next/image"


export default function HiringProcess() {
    const HP = [
        {
            image: '/assets/step1.jpg',
            head:'Application Submission',
            text: 'Browse our available positions and submit your application online.',
        },{
            image: '/assets/step1.jpg',
            head:'Initial Screening',
            text: 'Our HR team reviews applications & shortlists candidates based on skills & experience.',
        },{
            image: '/assets/step1.jpg',
            head:'Interview Process',
            text: 'Shortlisted candidates go through interviews with our hiring managers to assess their fit for the role.',
        },{
            image: '/assets/step1.jpg',
            head:'Final Selection & Offer',
            text: 'Successful candidates receive an offer letter and guidance on the onboarding process.',
        },{
            image: '/assets/step1.jpg',
            head:'Onboarding & Training',
            text: 'Join Work Horizon and receive training to ensure a smooth transition into your new role.',
        },
    ]
    return(
        <div className="container flex flex-col my-14 lg:my-28 overflow-hidden">
            <h3 className="text-3xl xl:text-4xl capitalize text-sky-900 font-bold xl:mb-3 text-center" data-aos='fade-up'>Our Hiring Process</h3>
            <p className="text-md lg:text-xl font-normal tracking-wide text-center" data-aos='fade-up'>
            {`We believe in a transparent and efficient hiring process to bring the best talent on board. Here’s how it works:`}
            </p>
            {/* Steps 1 to 3 */}
            <div className="relative grid grid-cols-1 lg:grid-cols-[27%,9.5%,27%,9.5%,27%] items-center mt-14" data-aos='fade-right'>
                <div className="relative flex flex-row">
                    <div className="bg-dullWhite grid grid-cols-[25%,75%] shadow-md z-10 relative rounded-2xl">
                        <div className="p-4 bg-sky-900 flex items-center justify-center rounded-l-2xl">
                            <h3 className="text-xl lg:text-2xl 2xl:text-3xl font-bold uppercase text-gray-100 tracking-wider text-center">Step 01</h3>
                        </div>
                        <div className="py-4 pl-2 pr-6 rounded-r-2xl border-2 border-sky-900">
                            <h3 className="font-bold text-lg">{HP[0].head}</h3>
                            <p className="text-gray-600">{HP[0].text}</p>
                        </div>
                    </div> 
                </div>
                <Image className="my-5 mx-auto w-auto h-auto lg:-rotate-90 object-contain" src={'/assets/icons/home/down.png'} alt="Arrow to next step" width={50} height={100}/>
                <div className="relative flex flex-row">
                    <div className="bg-dullWhite grid grid-cols-[25%,75%] shadow-md z-10 relative rounded-2xl">
                        <div className="p-4 bg-sky-900 flex items-center justify-center rounded-l-2xl">
                            <h3 className="text-xl lg:text-2xl 2xl:text-3xl font-bold uppercase text-gray-100 tracking-wider text-center">Step 02</h3>
                        </div>
                        <div className="py-4 px-2 rounded-r-2xl border-2 border-sky-900">
                            <h3 className="font-bold text-lg">{HP[1].head}</h3>
                            <p className="text-gray-600">{HP[1].text}</p>
                        </div>
                    </div> 
                </div>    
                <Image className="my-5 mx-auto w-auto h-auto lg:-rotate-90 object-contain" src={'/assets/icons/home/down.png'} alt="Arrow to next step" width={50} height={100}/>
                <div className="relative flex flex-row">
                    <div className="bg-dullWhite grid grid-cols-[25%,75%] shadow-md z-10 relative rounded-2xl">
                        <div className="p-4 bg-sky-900 flex items-center justify-center rounded-l-2xl">
                            <h3 className="text-xl lg:text-2xl 2xl:text-3xl font-bold uppercase text-gray-100 tracking-wider text-center">Step 03</h3>
                        </div>
                        <div className="py-4 px-2 rounded-r-2xl border-2 border-sky-900">
                            <h3 className="font-bold text-lg">{HP[2].head}</h3>
                            <p className="text-gray-600">{HP[2].text}</p>
                        </div>
                    </div> 
                </div>    
            </div>
            
            <div className="relative grid grid-cols-1 lg:grid-cols-[27%,9.5%,27%,9.5%,27%] justify-start items-center mt-2" data-aos='fade-left'>
                <div/>
                <div/>
                <div />
                <div />
                <div>
                <Image className="my-5 mx-auto w-auto h-auto lg:rotate-[50deg] object-contain" src={'/assets/icons/home/down.png'} alt="Arrow to next step" width={50} height={100}/>
                </div>
            </div>

            {/* Steps 4 to 5 */}
            <div className="relative grid grid-cols-1 lg:grid-cols-[17.25%,28%,9.5%,27%,18.25%] xl:grid-cols-[18.25%,27%,9.5%,27%,18.25%] justify-start items-center" data-aos='fade-left'>
                <div/>
                <div className="flex flex-row">
                    <div className="bg-dullWhite grid grid-cols-[25%,75%] shadow-md z-10 relative rounded-2xl">
                        <div className="p-4 bg-sky-900 flex items-center justify-center rounded-l-2xl">
                            <h3 className="text-xl lg:text-2xl 2xl:text-3xl font-bold uppercase text-gray-100 tracking-wider text-center">Step 05</h3>
                        </div>
                        <div className="py-4 px-2 rounded-r-2xl border-2 border-sky-900">
                            <h3 className="font-bold text-lg">{HP[4].head}</h3>
                            <p className="text-gray-600">{HP[4].text}</p>
                        </div>
                    </div> 
                </div>
                <Image className="my-5 mx-auto w-auto h-auto lg:rotate-90 object-contain" src={'/assets/icons/home/down.png'} alt="Arrow to next step" width={50} height={100}/>
                <div className="flex flex-row">
                    <div className="bg-dullWhite grid grid-cols-[25%,75%] shadow-md z-10 relative rounded-2xl">
                        <div className="p-4 bg-sky-900 flex items-center justify-center rounded-l-2xl">
                            <h3 className="text-xl lg:text-2xl 2xl:text-3xl font-bold uppercase text-gray-100 tracking-wider text-center">Step 04</h3>
                        </div>
                        <div className="py-4 px-2 rounded-r-2xl border-2 border-sky-900">
                            <h3 className="font-bold text-lg">{HP[3].head}</h3>
                            <p className="text-gray-600">{HP[3].text}</p>
                        </div>
                    </div> 
                </div>
                <div/>    
            </div>
        </div>
    )
}