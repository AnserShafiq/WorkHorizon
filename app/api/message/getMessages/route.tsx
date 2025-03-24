import { executeQuery } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const messages = await executeQuery("SELECT * FROM messages ORDER BY date DESC;")
        return NextResponse.json(messages);
    } catch (error) {
        console.log('Unable to get messages from Database, ',error)
        return NextResponse.json({message: 'Unable to get messages from Database.'},{status: 404})
    }
}