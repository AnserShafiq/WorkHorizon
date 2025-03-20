'use server'
import { executeQuery } from "@/app/lib/db";
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        const session =  await auth()
        const user = session?.user;
        // console.log('Active User =>', user);
        // eslint-disable-next-line
        const userData: any = await executeQuery("SELECT id, name, email, gender, post FROM userids WHERE id=?",[user?.id]);
        return NextResponse.json(userData[0]);
    } catch {
        return NextResponse.json(null);
    }
}