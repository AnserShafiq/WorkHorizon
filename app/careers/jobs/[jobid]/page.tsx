
import JobOverview from "@/app/ui/careers/jobs/jobView/jobOverview";
import { Metadata } from "next";

// eslint-disable-next-line
export async function generateMetadata({ params }: any): Promise<Metadata> {
    const { jobid } = await params;
    const numericPart = jobid ? jobid.split('_').pop() : ''
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getJobs/getSingleJobTitle?jobid=${numericPart}`);
    const jobTitle = await response.json();
    return {
        title: `${jobTitle[0].title} - Job by Work Horizon`,
    };
}
// eslint-disable-next-line
export default async function Page({ params }: any) {
    const { jobid } = await params;
    const numericPart = jobid ? jobid.split('_').pop() : '';
    // console.log('===> ', jobid)
    return (
        <>
            <JobOverview jobid={numericPart} />
        </>
  );
}