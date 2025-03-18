import JobOverview from "@/app/ui/careers/jobs/jobView/jobOverview";

// eslint-disable-next-line
export default async function Page({ params }: any) {
    const { jobid } = await params;
    const numericPart = jobid ? jobid.split('_').pop() : '';
    console.log('===> ', jobid)
 
    return (
        <>
            <JobOverview jobid={numericPart} />
        </>
  );
}