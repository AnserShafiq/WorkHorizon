import { executeQuery } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";



export async function POST(request: NextRequest){
    // console.log('Route Called')
    const formData = await request.json()
    // console.log(formData)

    try {
        await executeQuery(
            'INSERT INTO jobs(STATUS, TITLE, SALARY, TIMING, INTRO, WORKTYPE, DEPARTMENT, CONTRACT, POSITIONS, DESCRIPTION, SKILLS, COMPENSATIONS, QUALIFICATIONS, WHATYOUWILLGAIN, JOINTAGLINE, CREATED_AT, UPDATED_AT) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())',
            [formData.status, formData.title,formData.salary, formData.timing,formData.intro, formData.worktype, formData.department, formData.contract, formData.positions, formData.description, formData.skills, formData.compensations, formData.qualifications, formData.whatyouwillgain, formData.jointagline]
        )
        return NextResponse.json({message: 'Done'},{status: 200})
    } catch (error) {
        console.error('Unable to upload data in DB', error)
        return NextResponse.json({message: 'Unable to upload in DB'}, {status: 404})
    }

    
} 