import { executeQuery } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";



export async function DELETE(request: NextRequest){
    const data = await request.json()
    try {
        await executeQuery('DELETE FROM jobapplications WHERE id=?', [data]);
        return NextResponse.json({message: 'Applicant got deleted successfully.'},{status: 200})
    } catch (error) {
        console.log('Unable to delete an applicant, ',error)
        return NextResponse.json({message: 'Unable to delete an applicant.'},{status: 404})
    }
}