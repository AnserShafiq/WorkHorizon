import JobsTable from "@/app/ui/careers/jobs/jobstable"
import SearchJob from "@/app/ui/careers/jobs/searchjob"

export default async function Page(props:{
    searchParams?:Promise<{
        query?:string,
    }>
}) {

    const searchParams = await props.searchParams
    const query = searchParams?.query || ''
    return(
        <>
            <SearchJob placeholder="Enter job to search"/>
            <JobsTable query={query} />
        </>
    )
}