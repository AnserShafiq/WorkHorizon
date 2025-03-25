import { executeQuery } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function PUT(request: NextRequest){
    try {
        const data = await request.json();
        console.log('data on route: ', data);
        await executeQuery('UPDATE userids SET name=?, password=?, gender=?, email=?, contact=?, post=? WHERE id=?',[data.name, data.password, data.gender, data.email, data.contact, data.post, data.id])
        return NextResponse.json('Received the data')
        // await executeQuery('UPDATE ')
    } catch (error) {
        console.log('Unable to get data in update/[id] route, ',error)
        return NextResponse.json({message: 'Unable to get data in update/[id] route.'},{status:404})   
    }
}