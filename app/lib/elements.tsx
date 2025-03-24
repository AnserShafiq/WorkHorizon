
export interface User{
    name:string,
    //eslint-disable-next-line
    id: string | any,
    email: string,
    gender: string,
    post: string
}


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
    updated_at: string | null;
    applications: number ;
}


export interface JobApplications{
    id: string;
    //eslint-disable-next-line
    jobid: string | number | any;
    jobtitle: string;
    firstname: string;
    lastname: string;
    email: string;
    contactnumber: string,
    address: string,
    experience: number;
    joiningdate: string;
    summary: string;
    resumelink: string;
    submissiondate:string;
    status:string;
}


export interface Message{
    id: string | null;
    firstname: string,
    lastname: string,
    reason: string,
    contactnumber: string,
    country: string,
    email: string,
    message: string,
    date: string,
    status: string
}


export interface Agent{
    id: string,
    name: string,
    password: string,
    gender: string,
    email: string,
    contact: string,
    post: string,
    created_on: string,
}