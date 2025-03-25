import { executeQuery } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    try {
        const data = await request.json();
        await executeQuery(`
            INSERT INTO userids(name,password,gender,email,contact,post,created_on) 
            VALUES (?,?,?,?,?,?,NOW());
            `,[data.name, data.password, data.gender, data.email, data.contact, data.post]);
        return NextResponse.json({message: 'Agent got added.'}, {status: 200})
    } catch (error) {
        console.log('Unable to add new agent, ',error)
        return NextResponse.json({message: 'Unable to add new agent.'},{status: 404})
    }
}