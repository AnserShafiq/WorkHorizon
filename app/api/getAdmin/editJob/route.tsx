import { executeQuery } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest){
    try{
        const data = await request.json()
        await executeQuery(`
            UPDATE jobs SET status=?, title=?, salary=?, timing=?, intro=?, worktype=?, department=?, contract=?, positions=?, description=?, skills=?, compensations=?, qualifications=?, whatyouwillgain=?, jointagline=?, updated_at=NOW(), applications=?
            WHERE jobid=?;
            `,[data?.status, data.title, data.salary, data.timing, data.intro, data.worktype, data.department, data.contract, data.positions, data.description, data.skills, data.compensations, data.qualifications, data.whatyouwillgain, data.jointagline, data.applications, data.jobid]);
        return NextResponse.json({message: 'Job got updated'}, {status: 200})
    }catch(error){
        console.log('Error in updating job, ',error);
        return NextResponse.json({message: 'Unable to edit job'}, {status: 404})
    }
}

export async function DELETE(request: NextRequest){
    try{
        const data = await request.json()
        console.log('Data from DELETE => ', data);
        await executeQuery(`DELETE FROM applicationsCount WHERE jobid=${data};`);
        await executeQuery(`DELETE FROM jobapplications WHERE jobid=${data};`);
        await executeQuery(`DELETE FROM jobs WHERE jobid=${data};`)
        return NextResponse.json({message: 'Job got updated'}, {status: 200})
    }catch(error){
        console.log('Error in updating job, ',error);
        return NextResponse.json({message: 'Unable to edit job'}, {status: 404})
    }   
}