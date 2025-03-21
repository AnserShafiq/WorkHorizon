import { Metadata } from "next";
import ForJobEnquiries from "../ui/careers/jobenquiries";
import JoiningPath from "../ui/careers/joiningPath";
import Careers_Start from "../ui/careers/startup";
import WhyWorkWithUs from "../ui/careers/whyWorkWithUs";

export const metadata:Metadata = {
    title: 'Careers - Work Horizon'
}

export default function Careers(){
    
    return(
        <>
            <Careers_Start />
            <JoiningPath />
            <WhyWorkWithUs />
            <ForJobEnquiries />
        </>
    )
}