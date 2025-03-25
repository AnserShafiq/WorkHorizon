import { executeQuery } from "@/app/lib/db";
import { NextResponse } from "next/server";



export async function GET(){
    try {
        const agents = await executeQuery('SELECT * FROM userids;')
        return NextResponse.json(agents);
    } catch (error) {
        console.log('Unable to get agents, ',error);
        return NextResponse.json({message: 'Unable to get agents'},{status: 404})
    }
}