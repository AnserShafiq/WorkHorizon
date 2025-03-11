import { executeQuery } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
// eslint-disable-next-line
export async function GET(request: NextRequest, context: any) {
  try {
    const { admin_id } = await context.params; // No need to explicitly define the type

    // console.log('Admin ID =>', admin_id);

    const admin = await executeQuery(`SELECT * FROM users WHERE ID = ?`, [admin_id]);

    if (!admin) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(admin);
  } catch (error) {
    console.error('Unable to connect DB', error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
