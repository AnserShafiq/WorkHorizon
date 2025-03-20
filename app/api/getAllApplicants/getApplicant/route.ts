import { executeQuery } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    
    const id = await request.nextUrl.searchParams.get('id');
    console.log('From Out Applicant id: ', id);

    if (!id) {
        return NextResponse.json({ error: 'Missing ID parameter' }, { status: 400 });
    }

    try {
        await executeQuery(`UPDATE jobapplications SET status='Checked' WHERE id =?`,[id])
        const data = await executeQuery('SELECT * FROM jobapplications WHERE id=?',[id])
        return NextResponse.json(data);
    } catch (error) {
        console.log('Applicant with provided id not found. ', error)
        return NextResponse.json({ message: `Invalid applicant id: ${id}` }, { status: 404 });
    }

    
}
