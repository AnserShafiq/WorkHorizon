import { User } from "@/app/lib/elements";
import ActiveJobs from "./dashboardElements/activeJobs";
import ApplicantsView from "./dashboardElements/applicantsView";
import MessagesList from "./dashboardElements/messagesList";


export default function DashboardBody({user}:{user:User | null}){
    return(
        <div className='container w-[88%] lg:w-full min-h-[90vh] pt-10 pb-20 flex flex-col justify-center'>
            <h1 className="text-xl font-semibold mb-3 w-fit mx-auto text-sky-900 border-b border-orange-500 px-1 ">Hello {user?.name}</h1>
            <h1 className="text-3xl font-semibold mb-7 w-fit mx-auto text-sky-900 border-b border-orange-500 px-1">{`Welcome to Work Horizon's Portal`}</h1>
            <div className='grid grid-cols-2 gap-10 w-full h-[450px] max-h-[450px] 2xl:h-[520px] 2xl:max-h-[530px]'>
                <ActiveJobs />
                <ApplicantsView />
            </div>
            <MessagesList/>
        </div>
    )
}