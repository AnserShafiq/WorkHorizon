import JobsHead from "@/app/ui/careers/jobs/pagehead";


export default function Layout({children}:{children:React.ReactNode}){
    
    return(
        <>
            <JobsHead />
            {children}
        </>
    )
}