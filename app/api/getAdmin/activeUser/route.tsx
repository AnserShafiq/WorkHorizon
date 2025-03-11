'use server'
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        const session =  await auth()
        const user = session?.user;
        console.log('Active User =>', user);
        return NextResponse.json(user);
    } catch {
        return NextResponse.json(null);
    }
}