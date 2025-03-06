import JobOverview from "@/app/ui/careers/jobs/jobView/jobOverview";

// eslint-disable-next-line
export default async function Page({ params }: any) {
    const { jobid } = await params;
    console.log('===> ', jobid)
    // console.log('===> ', Job)
  return (
        <>
            <JobOverview jobid={jobid} />
        </>
  );
}