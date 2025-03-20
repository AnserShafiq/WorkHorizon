import { executeQuery } from "@/app/lib/db";
import { NextResponse } from "next/server";


export async function GET(){
    try{
        const Jobs = await executeQuery(`SELECT * FROM jobapplications ORDER BY status DESC LIMIT 5`);
        // console.log('Jobs from Api: ', Jobs);
        return NextResponse.json(Jobs)
    }catch(error){
        console.error('Unable to get active jobs for dashboard: ', error);
        return NextResponse.json({message: 'Unable to get active jobs for dashboard'},{status: 404})
    }
}