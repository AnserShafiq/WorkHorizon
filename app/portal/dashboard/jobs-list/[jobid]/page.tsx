import JobDetails from "@/app/ui/portal/jobs/job-details";
import { Metadata } from "next";

// eslint-disable-next-line
export async function generateMetadata({ params }: any): Promise<Metadata> {
    const { jobid } = await params;
    const numericPart = jobid ? jobid.split('_').pop() : ''
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getJobs/getSingleJobTitle?jobid=${numericPart}`);
    const jobTitle = await response.json();
    return {
        title: `${jobTitle[0].title} - Jobs List - Dashboard - Work Horizon`,
    };
}
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