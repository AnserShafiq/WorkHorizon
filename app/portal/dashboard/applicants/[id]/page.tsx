import ApplicantDetails from "@/app/ui/portal/applicants/applicant-details";
import { Metadata } from "next";

// eslint-disable-next-line
export async function generateMetadata({ params }: any): Promise<Metadata> {
    const { id } = await params;
    const numericPart = id ? id.split('_').pop() : ''
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getAllApplicants/getApplicant/nameOnly?id=${numericPart}`);
    const applicantName = await response.json();
    return {
        title: `${applicantName[0].firstname} ${applicantName[0].lastname} - Applicant - Work Horizon`,
    };
}


export default async function Page(props:{params: Promise<{id: string}>}){
    const param= await props.params
    const id = await param.id;
    const target = id ? id.split('_').pop() : ''

    return(
        <>
            <ApplicantDetails id={target}/>
        </>
    )
}