import Image from "next/image";




export default function UnderDevelopment () {
    return(
        <div className="flex flex-col items-center justify-center">
            <div className="absolute top-0 left-0 z-10 w-screen h-screen bg-sky-100 flex flex-col items-center justify-around">
                <div className="flex flex-col mt-40 w-[50%] items-center text-center">
                    <h3 className='text-3xl lg:text-[4rem] font-semibold text-sky-900 italic capitalize tracking-wide lg:leading-tight mb-3'>{`We're Coming Soon...`}</h3>
                    <p className="text-3xl capitalize italic">{`We're working hard to finish the development of the site. Leave your email to receive update and to be notified when we launch`}</p>
                    <form  className="grid grid-cols-[80%,20%] shadow-lg border-2 border-sky-900 rounded-[23px] w-[26vw] mt-5">
                        <input className="pl-4 py-2 bg-[#eaeff3c9] placeholder:text-gray-500 rounded-l-[20px]" type="email" id='email' name="email" placeholder="Leave your email..." /><button className="bg-sky-900 rounded-r-[19px] text-gray-200 font-semibold uppercase tracking-wide" type="submit">Send</button>
                    </form>
                </div>
                <Image className="w-[25vw] h-auto" src={'/ud.png'} alt='Work Horizon Under Development' width={800} height={700}/>
            </div>
        </div>
    )
}
