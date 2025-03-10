'use client'

import { useState } from "react";
import JobDescription from "./description";
import SingleJobHead from "./innerPageHead";

type SetActiveSection = (section: string) => void

export default function JobOverview({jobid}:{jobid:number}){
    const [activeSection, setActiveSection] = useState<string>('overview')

    return(
        <>
            <SingleJobHead jobid={jobid} activeSection={activeSection} setActiveSection={setActiveSection as SetActiveSection} />
            {/* {
                // activeSection === 'overview' ? <JobDescription jobid={jobid} setActiveSection={setActiveSection}/>:<h3>Application Page</h3>
            } */}
        </>
    )
}