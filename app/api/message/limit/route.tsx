import { executeQuery } from "@/app/lib/db";
import { NextResponse } from "next/server";



export async function GET(){
    try {
        const messages = await executeQuery('SELECT * FROM messages ORDER BY date DESC LIMIT 5;')
        return NextResponse.json(messages)
    } catch (error) {
        console.log('Unable to get latest messages, ',error)
        return NextResponse.json({message: 'Unable to get latest messages.'},{status:404})
    }
}