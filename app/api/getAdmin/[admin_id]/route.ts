import { executeQuery } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  context: { params: { admin_id: string } }
) {
  try {
    const { admin_id } = context.params; // Correctly destructuring params
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
