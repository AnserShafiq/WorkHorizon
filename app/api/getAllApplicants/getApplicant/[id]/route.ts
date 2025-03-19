import { executeQuery } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, context : {params: {id: string}}) {
    
    const {id }= context.params;
    console.log('Applicant id:', id);

    if (!id) {
        return NextResponse.json({ error: 'Missing ID parameter' }, { status: 400 });
    }

    try {
        const data = await executeQuery('SELECT * FROM jobapplications WHERE id=?',[id])
        return NextResponse.json(data);
    } catch (error) {
        console.log('Applicant with provided id not found. ', error)
        return NextResponse.json({ message: `Invalid applicant id: ${id}` }, { status: 404 });
    }

    
}
