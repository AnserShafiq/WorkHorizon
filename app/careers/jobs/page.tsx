
import JobFilters from "@/app/ui/careers/jobs/filters"
import JobsTable from "@/app/ui/careers/jobs/jobstable"
import JobsHead from "@/app/ui/careers/jobs/tablePageHeader"
import SearchJob from "@/app/ui/careers/jobs/searchjob"
import { Metadata } from "next"

export const metadata:Metadata={
    title: 'Job Options - Work Horizon'
}

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
            <JobsHead/>
            <SearchJob placeholder="Search job title"/>
            <JobFilters />
            <JobsTable query={query} />
        </>
    )
}