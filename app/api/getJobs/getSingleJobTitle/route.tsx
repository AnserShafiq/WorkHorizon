import { executeQuery } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function GET (request:NextRequest){
    try {
        const jobid = request.nextUrl.searchParams.get('jobid')
        const resp = await executeQuery('SELECT title FROM jobs WHERE jobid=?;',[jobid])
        return NextResponse.json(resp)
    } catch (error) {
        console.log('Unable to get job title for Meta Data, : ', error)
        return NextResponse.json({message: 'Unable to get job title for Meta Data.'},{status: 404})   
    }
}