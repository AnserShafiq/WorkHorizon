import { executeQuery } from "@/app/lib/db";
import { NextResponse } from "next/server";


export async function GET() {
    try{
        const applicants = await executeQuery('SELECT * FROM jobapplications ORDER BY submissiondate DESC;');
        return NextResponse.json(applicants);
    }catch(error){
        console.log('Unable to get applicant, ',error);
        return NextResponse.json({message: 'Unable to get job applicant.'},{status: 404})
    }
}