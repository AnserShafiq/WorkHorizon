import { executeQuery } from '@/app/lib/db';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(request: NextRequest) {
    const jobid = request.nextUrl.searchParams.get('jobid'); 
    if (!jobid) {
        return NextResponse.json({ message: 'Job ID is required' }, { status: 400 });
    }
    try{
        console.log('GOing to read count for ', jobid)
        // eslint-disable-next-line
        const response:any = await executeQuery('SELECT applications FROM applicationsCount WHERE jobid = ?', [jobid])
        console.log('From applicants count route: ', response);
        const applicantCount = response[0].applications
        return NextResponse.json({ count: applicantCount }, { status: 200 }); 
    }
    catch(error){
        console.log('Unable to get count, ',error)
        return NextResponse.json({ message: 'Unable to get count' }, { status: 404 }); 
    }
}
