import JobPostingForm from "@/app/ui/portal/jobpostingform";
import { Metadata } from "next";

export const metadata:Metadata={
    title: 'New Job Addition Form - Work Horizon'
}

export default function Page(){
    return(
        <JobPostingForm />
    )
}