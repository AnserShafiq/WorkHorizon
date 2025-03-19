import { executeQuery } from "@/app/lib/db";
import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import { Readable } from "stream";

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/drive.file"],
});

const drive = google.drive({ version: "v3", auth });

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    // console.log('Api: ', formData)
    const file = formData.get("file") as File;

    if (!file) return NextResponse.json({ error: "No file uploaded" }, { status: 400 });

    const buffer = Buffer.from(await file.arrayBuffer());
    const stream = Readable.from(buffer);

    const response = await drive.files.create({
      requestBody: {
        name: file.name,
        parents: process.env.GOOGLE_DRIVE_FOLDER_ID ? [process.env.GOOGLE_DRIVE_FOLDER_ID] : [],
      },
      media: {
        mimeType: file.type,
        body: stream,
      },
    });

    const fileId = response.data.id;
    await drive.permissions.create({
        fileId: fileId as string,
        requestBody: { role: "reader", type: "anyone" },
    });
    const fileUrl = `https://drive.google.com/uc?id=${fileId}`;

    await executeQuery(
      'INSERT INTO jobapplications(jobid, jobtitle, firstname, lastname, email, contactnumber, address, experience, joiningdate, summary, resumelink, submissiondate) VALUES(?,?,?,?,?,?,?,?,?,?,?,NOW())',
      [formData.get('jobid'),formData.get('jobtitle'),formData.get('firstname'),formData.get('lastname'),formData.get('email'),`${formData.get('country')}-${formData.get('contact')}`,formData.get('address'),formData.get('experience'),formData.get('joining'),formData.get('summary'),fileUrl])

    return NextResponse.json({ success: true, status:200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
