import { Metadata } from "next";
import DashboardMainBody from "./body";

export const metadata:Metadata = {
    title: 'Welcome to dashboard - Work Horizon'
}

export default function Dashboard(){
    return(
        <>
            <DashboardMainBody />
        </>
    )
}