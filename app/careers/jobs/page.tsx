
import JobFilters from "@/app/ui/careers/jobs/filters"
import JobsTable from "@/app/ui/careers/jobs/jobstable"
import SearchJob from "@/app/ui/careers/jobs/searchjob"

export default async function Page(props:{
    searchParams?:Promise<{
        query?:string,
        worktype?:string,
        contracttype?:string,
        department?:string,
    }>
}) {
    const searchParams = await props.searchParams
    const query = searchParams?.query || searchParams?.worktype || searchParams?.contracttype || searchParams?.department || ''
    return(
        <>
            <SearchJob placeholder="Search job title"/>
            <JobFilters />
            <JobsTable query={query} />
        </>
    )
}