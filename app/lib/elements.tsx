

export interface JobFormData {
    //eslint-disable-next-line
    jobid: string | number | any;
    status: string;
    title: string;
    salary: string;
    timing: string;
    intro: string;
    worktype: string;
    department: string;
    contract: string;
    positions: string;
    description: string;
    skills: string;
    compensations: string;
    qualifications: string;
    whatyouwillgain:string;
    jointagline: string;
    updated_at: string;
}


export interface JobApplications{
    //eslint-disable-next-line
    jobid: string | number | any;
    jobtitle: string;
    name: string;
    email: string;
    contactNumber: string,
    address: string,
    experience: number;
    joiningdate: string;
    summary: string;
    resume: string;
}