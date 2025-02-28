import { executeQuery } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { admin_id: string } }
) {
  try {
    const params = await context.params; // Await the params object
    const { admin_id } = params; // Now safely destructure admin_id

    console.log('Admin ID =>', admin_id);

    const admin = await executeQuery(`SELECT * FROM USERS WHERE ID = ?`, [admin_id]);

    if (!admin) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(admin);
  } catch (error) {
    console.error('Unable to connect DB', error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
