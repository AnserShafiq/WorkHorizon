
import { executeQuery } from "@/app/lib/db";
import { NextResponse } from "next/server";



export async function GET(){
    try {
        const Jobs = await executeQuery('SELECT * FROM jobs ORDER BY jobid DESC, updated_at DESC')
        return NextResponse.json(Jobs)
    } catch (error) {
        console.log('Unable to read jobs from DB: ', error)
        return NextResponse.json({message: 'Unable to read jobs from DB'},{status: 404})
    }
}

