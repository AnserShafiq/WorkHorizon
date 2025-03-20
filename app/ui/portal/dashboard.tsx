import { User } from "@/app/lib/elements";
import ActiveJobs from "./dashboardElements/activeJobs";
import ApplicantsView from "./dashboardElements/applicantsView";


export default function DashboardBody({user}:{user:User | null}){
    return(
        <div className='container w-[88%] lg:w-full min-h-[90vh] pt-14 pb-20 flex flex-col justify-center'>
            <h1 className="text-3xl font-semibold mb-7 w-fit mx-auto text-sky-900 border-b border-orange-500 px-1">Welcome to Work Horizon's Portal</h1>
            <div className='grid grid-cols-2 gap-10 w-full h-[520px] max-h-[530px]'>
                <ActiveJobs />
                <ApplicantsView />
            </div>
            <div className="mx-14 my-10 border p-6 rounded-3xl shadow-xl shadow-gray-300 bg-gray-200">
                <h3 className='w-fit text-2xl mx-auto capitalize font-semibold text-sky-900 border-b border-orange-500 mb-4'>To add new agent</h3>
                <form className='grid grid-cols-3 gap-x-10 gap-y-3'>
                    <div className='flex flex-col'>
                        <label className='text-md font-semibold text-sky-900 mb-1'>Name:</label>
                        <input className=' px-3 py-1 rounded-lg bg-gray-100 shadow-md' id='name' name='name' placeholder='Enter name' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-md font-semibold text-sky-900 mb-1'>E-Mail:</label>
                        <input className=' px-3 py-1 rounded-lg bg-gray-100 shadow-md' id='email' name='email' placeholder='Enter name' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-md font-semibold text-sky-900 mb-1'>Password:</label>
                        <input className=' px-3 py-1 rounded-lg bg-gray-100 shadow-md' id='password' name='password' placeholder='Enter name' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-md font-semibold text-sky-900 mb-1'>Contact Number:</label>
                        <input className=' px-3 py-1 rounded-lg bg-gray-100 shadow-md' id='contact' name='contact' placeholder='Enter name' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-md font-semibold text-sky-900 mb-1'>Gender:</label>
                        <select className=' px-3 py-1 rounded-lg bg-gray-100 shadow-md' id='gender' name='gender'>
                            <option value={''} >{`Select gender`}</option>
                            <option value={'Male'} >{`Male`}</option>
                            <option value={'Female'} >{`Female`}</option>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-md font-semibold text-sky-900 mb-1'>Post:</label>
                        <select className=' px-3 py-1 rounded-lg bg-gray-100 shadow-md' id='post' name='post'>
                            <option value={''} >{`Select agent's post`}</option>
                            <option value={'Pak HR'} >{`Pak HR`}</option>
                            <option value={'Head HR'} >{`Head HR`}</option>
                            <option value={'Recruiter'} >{`Recruiter`}</option>
                        </select>
                    </div>
                    <div className='col-span-full flex items-center justify-center mt-4'>
                        <button className=' px-4 py-2 text-gray-100 rounded-xl font-semibold tracking-wide bg-sky-900 border-2 border-transparent hover:border-sky-900 hover:text-sky-900 hover:bg-transparent w-fit mx-auto transition-transform ease-in-out duration-300 hover:scale-[1.03]'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}