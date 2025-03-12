import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, context: any) {
    // const token = request.cookies.get('jodid')
    console.log('In get')
    const jobid = await context.params; // Extract jobid correctly
    console.log('For applicants count: ', jobid);

    if (!jobid) {
        return NextResponse.json({ message: 'Job ID is required' }, { status: 400 });
    }

    return NextResponse.json({ message: 'Successful', jobid }, { status: 200 });
}
