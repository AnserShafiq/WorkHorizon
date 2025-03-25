
import Image from "next/image"
import Link from "next/link";


interface StepProps {
    image: string;
    // eslint-disable-next-line
    title: string | any;
    stepNo: number;
    desc: string;
}

const Step: React.FC<StepProps> = ({ image, title, stepNo, desc }) => {
    return (
        <div className="flex flex-col items-center text-center">
            <div className='flex rounded-full mb-3'>
                <Image className="w-[250px] h-[250px] object-center object-cover rounded-full transition-all ease-in-out duration-500 hover:scale-[1.05]" src={image} alt={`Work Horizon's Step#${stepNo} - ${title}`} width={1000} height={1000}/>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-sky-900 tracking-wide capitalize mb-2">{stepNo}<span className="text-3xl lg:text-4xl font-bold text-orange-500">.</span> {title}</h3>
            <p className='text-md lg:text-lg tracking-wide'>{desc}</p>
        </div>
    );
}


export default function JoiningPath() {
    const ourSteps = [
        {
            image: '/assets/careers-step-01.jpg',
            title: <span>Apply <br className="hidden lg:block"/> online</span>,
            stepNo: 1,
            desc: 'Submit your resume for the job role you’re interested in.',
        },
        {
            image: '/assets/careers-step-02.jpg',
            title: 'Screening & Interview',
            stepNo: 2,
            desc: 'If shortlisted, our HR team will reach out for an initial discussion, followed by an in-depth interview.',
        },
        {
            image: '/assets/careers-step-03.jpg',
            title: 'Offer & Onboarding',
            stepNo: 3,
            desc: 'Once selected, you’ll receive an offer letter and join our onboarding program to kickstart your journey.',
        },
    ];

    return (
        <div className='container w-[88%] lg:w-full py-10 2xl:py-20 flex flex-col'>
            <h3 className="text-3xl 2xl:text-4xl capitalize text-sky-900 font-bold mb-3 mx-auto border-b border-orange-500 pb-1">
                <span className="hidden lg:block">Gate way to work horizon</span>
                <span className="block lg:hidden">Our Hiring Process</span>
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-[25%,25%,25%] gap-5 lg:gap-[12.5%] w-[90%] mx-auto mt-6">
                {ourSteps.map((item) => (
                    <div key={item.stepNo}>
                        <Step key={item.stepNo} image={item.image} title={item.title} stepNo={item.stepNo} desc={item.desc}/>
                    </div>
                ))}
            </div>
            <div className='w-full text-center'>
                <h3 className="text-lg lg:text-xl font-[400] capitalize tracking-wide mt-6 lg:mt-3">Ready to roll-in? Explore the job options and <Link href={'/careers/jobs'} className="text-orange-500 border-b border-sky-900 pb-1 uppercase font-bold ">Apply !!!</Link></h3>
            </div>
        </div>
    );
}
