import { createConnection } from "@/app/lib/db";
import { NextResponse } from "next/server";



export async function GET(){
    try{
        const db = await createConnection()
        const getAgents = `SELECT * FROM users`
        const [agents] = await db.query(getAgents)
        console.log('Data from API: ', agents)
        return NextResponse.json(agents)
    }catch(error){
        console.error('Unable to connect DB', error)
        return NextResponse.json({error: error})
    }
}