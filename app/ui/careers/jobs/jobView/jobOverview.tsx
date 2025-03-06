'use client'

import { useState } from "react";
import InnerPageHead from "./innerPageHead";
import JobDescription from "./description";

export default function JobOverview({jobid}:{jobid:string}){
    const [activeSection, setActiveSection] = useState<string>('overview')

    return(
        <>
            <InnerPageHead activeSection={activeSection} setActiveSection={setActiveSection} />
            {
                activeSection === 'overview' ? <JobDescription jobid={jobid} setActiveSection={setActiveSection}/>:<h3>Application Page</h3>
            }
        </>
    )
}