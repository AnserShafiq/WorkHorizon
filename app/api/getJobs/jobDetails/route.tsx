import { executeQuery } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    try {
        const id = await request.json()
        const job = await executeQuery('SELECT * FROM jobs WHERE jobid=?',[id]);
        return NextResponse.json(job)
    } catch (error) {
        console.log('Invalid job id, job not found: ', error)
        return NextResponse.json({message: 'Job not got found, DB'}, {status: 404})
    }
}