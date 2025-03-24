import AllApplicants from "@/app/ui/portal/applicants/all-applicants";
import { Metadata } from "next";

export const metadata:Metadata = {
    title: 'All Job Applicants - Dashboard - Work Horizon'
}

export default function Page(){
    return(
        <>
            <AllApplicants />
        </>
    )
}