import { executeQuery } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(request: NextRequest){
    try {
        const id = await request.json()
        await executeQuery('DELETE FROM messages WHERE id=? ',[id])
        return NextResponse.json({message: 'Message got deleted successfully'},{status: 200});
    } catch (error) {
        console.log('Unable to deleted message from DB, ',error)
        return NextResponse.json({message: 'Unable to deleted message from DB.'},{status: 404});
    }
}