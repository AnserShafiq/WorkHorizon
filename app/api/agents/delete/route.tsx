import { executeQuery } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(request:NextRequest){
    try {
        const agent_id = await request.nextUrl.searchParams.get('agent_id');
        await executeQuery("DELETE FROM userids WHERE id=?",[agent_id]);
        return NextResponse.json({message: 'Agent deleted'},{status: 200})
    } catch (error) {
        console.log('Unable to delete agent, ',error)
        return NextResponse.json({message: 'Unable to delete agent.'},{status: 404})
    }
}