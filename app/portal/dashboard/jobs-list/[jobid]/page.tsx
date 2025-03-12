import JobDetails from "@/app/ui/portal/job-details";



export default async function Page(
    props: {params: Promise<{jobid:string | number | undefined }>}
){
    const params = await props.params
    const jobid = params.jobid?.toString()
    const numericPart = jobid ? jobid.split('_').pop() : '';
    return (
        <JobDetails jobid={numericPart} />
    )
}