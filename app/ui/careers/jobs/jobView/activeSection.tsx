


type SetActiveSection = (section: string) => void

export default function ActiveSectionMenu({activeSection, setActiveSection}: {activeSection: string, setActiveSection: SetActiveSection}){

    return(
        <div className='container w-[88%] lg:w-[77%] 2xl:w-[70%] flex flex-col items-center border-t border-dashed border-gray-300'>
            {/* <h3 className="text-xl lg:text-2xl 2xl:text-3xl capitalize mt-2">{Job?.title}</h3> */}
            <div className='flex justify-center gap-5 '>
                <button onClick={() => setActiveSection('overview')} className={`text-md border border-transparent pt-1 pb-2 font-semibold ${activeSection === 'overview' ? 'text-sky-900 border-b-sky-900':'text-gray-400'}`}>Overview</button>
                <button onClick={() => setActiveSection('application')} className={`text-md border border-transparent pt-1 pb-2 font-semibold ${activeSection === 'application' ? 'text-sky-900 border-b-sky-900':'text-gray-400'}`}>Application</button>
            </div>
        </div>
    )
}