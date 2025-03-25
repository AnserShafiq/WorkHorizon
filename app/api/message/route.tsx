import { executeQuery } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request:NextRequest){
    try {
        const data = await request.json();
        console.log(data);
        await executeQuery('INSERT INTO messages(firstname, lastname, reason, contactnumber, country, email, message, date, status) VALUES (?,?,?,?,?,?,?, NOW(),?)',[data.firstname, data.lastname, data.reason, data.contactnumber, data.country, data.email, data.message, 'New'])
        return NextResponse.json({message: 'Message Submission done!!!'},{ status: 200});
    } catch (error) {
        console.error('Failed to submit message. ', error);
        return NextResponse.json({message: 'Message Submission failed'},{ status: 404});
    }
}
