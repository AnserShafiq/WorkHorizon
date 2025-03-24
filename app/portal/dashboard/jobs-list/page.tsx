import JobsList from "@/app/ui/portal/jobs/jobs-list";
import { Metadata } from "next";

export const metadata:Metadata={
    title: 'Jobs List - Dashboard - Work Horizon'
}

export default function Page(){
    return(
        <>
            <JobsList />
        </>
    )
}