import JobsTable from "@/app/ui/careers/jobs/jobstable"
import SearchJob from "@/app/ui/careers/jobs/searchjob"

export default function Page() {
    return(
        <>
            <SearchJob placeholder="Enter job to search"/>
            <JobsTable  />
        </>
    )
}