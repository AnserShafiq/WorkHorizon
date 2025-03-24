import { executeQuery } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest){
    try{
        const id = await request.nextUrl.searchParams.get('id');
        console.log('id from DB: ', id)
        await executeQuery(`UPDATE messages SET status='Checked' WHERE id=?`,[id])
        const message = await executeQuery('SELECT * FROM messages WHERE id=?',[id]);
        return NextResponse.json(message);
    }catch(error){
        console.log('Unable to get this message from DB. ',error)
        return NextResponse.json({message: 'Unable to get this message from DB.'},{status:404})
    }
}