import { executeQuery } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    try {
        const {jobid, status} = await request.json()
        console.log(jobid, ' ==== ', status)
        await executeQuery(`UPDATE jobs SET status=? WHERE jobid=? `,[status, jobid])
        return NextResponse.json({message: 'Status updated'},{status: 200})
    } catch (error) {
        console.log('Unable to update job status, ',error)
        return NextResponse.json({message: 'Status updation failed'},{status: 404})
    }
}