import JobPostingForm from "@/app/ui/portal/jobs/jobpostingform";
import { Metadata } from "next";

export const metadata:Metadata={
    title: 'New Job Addition Form - Work Horizon'
}

export default function Page(){
    return(
        <JobPostingForm />
    )
}