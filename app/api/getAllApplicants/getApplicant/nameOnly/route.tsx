import { executeQuery } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest){
    try {
        const id= await request.nextUrl.searchParams.get('id');
        const receive = await executeQuery('SELECT firstname, lastname FROM jobapplications WHERE id=?',[id]);
        return NextResponse.json(receive);
    } catch (error) {
        console.log('Unable to get applicant name for metadata, ', error);
        return NextResponse.json({message: 'Unable to get applicant name for metadata.'},{status: 404})
    }
}