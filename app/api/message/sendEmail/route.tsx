import { NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";

export async function POST(request: NextRequest){
    try {
        const data = await request.json();
        // const transporter = nodemailer.createTransport({
        //     host: 'smtp.gmail.com',
        //     port: 587,
        //     secure: false,
        //     auth: {
        //         user: process.env.USER_EMAIL,
        //         pass: process.env.USER_APP_PASSWORD
        //     },
        // })
        // const ManagementMessage = `
        //     <div style="color: #333; max-width: 600px; margin: auto 10px; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
        //         <h2 style="color:rgb(6, 42, 80); text-align: center;">New Contact Message</h2>
        //         <p style="font-size: 1rem; border-bottom: 1px solid black; padding-bottom: 4px; margin-bottom: 5px;"><strong style="font-weight:600; margin-right:8px;">Sender Name:</strong> ${data.firstname} ${data.lastname}</p>
        //         <p style="font-size: 1rem; border-bottom: 1px solid black; padding-bottom: 4px; margin-bottom: 5px;"><strong style="font-weight:600; margin-right:8px;">Reason:</strong> ${data.reason}</p>
        //         <p style="font-size: 1rem; border-bottom: 1px solid black; padding-bottom: 4px; margin-bottom: 5px;"><strong style="font-weight:600; margin-right:8px;">E-mail:</strong> ${data.email}</p>
        //         <p style="font-size: 1rem; border-bottom: 1px solid black; padding-bottom: 4px; margin-bottom: 5px;"><strong style="font-weight:600; margin-right:8px;">Contact Number:</strong> (${data.country}) ${data.contactnumber}</p>
        //         <p style="font-size: 1rem; margin-right:8px;"><strong style="font-weight:600;">Message:</strong> ${data.message}</p>
        //         <hr>
        //         <p style="text-align: center; font-size: 14px; color: #666;">Work Horizon | Contact Form</p>
        //     </div>
        //     <div style="margin-top: 20px;">
        //         <h2 style="font-size: 1.1rem; font-weight: bold; text-decoration: uppercase;">BEST WISHES,</h2>
        //         <h2 style="font-size: 1.1rem; font-weight: 600;">Work Horizon</h2>
        //     </div>
        // `;

        // const ClientMessage = `
        //     <div style="color: #333; max-width: 600px; margin: auto 10px; border: 1px solid #ddd; padding: 3rem; border-radius: 8px;">
                
        //         <h2 style="margin:2rem 0rem 1rem 0rem; color:rgb(6, 42, 80); text-align: start; font-size: 1.7rem; font-weight:bold; text-transform: capitalize;">Thank you for contacting us, Our management will contact you back as soon as possible.</h2>
        //         <h2 style=" text-align: start; font-size:1rem; margin-bottom: 1.3rem;"><strong>Message you sent us:</strong></h2>
        //         <p style="font-size: 1rem; margin-right:8px;  margin-bottom: 0.5rem;"><strong style="font-weight:600;">Reason:</strong> ${data.reason}</p>
        //         <p style="font-size: 1rem; margin-right:8px; margin-bottom:2rem;"><strong style="font-weight:600;">Message you sent us:</strong> ${data.message}</p>
        //         <hr>
        //         <p style="text-align: center; font-size: 14px; color: #666;">Work Horizon | hr@workhorizon.pk | +92 320 6460085</p>
        //     </div>
        // `;
        // const mailManagement = {
        //     from: '"Work Horizon" <admin@workhorizon.pk>',
        //     to: ['hr@workhorizon.pk'],
        //     cc: 'anser@workhorizon.pk',
        //     subject: `${data.firstname} ${data.lastname} - ${data.reason} - Contact Message`,
        //     html: ManagementMessage,
        // }
        // await transporter.sendMail(mailManagement);

        // const mailClient = {
        //     from: '"Work Horizon" <admin@workhorizon.pk> ',
        //     to: [data.email],
        //     replyTo: '"HR@WorkHorizon" <hr@workhorizon.pk>',
        //     subject: `Thank you for contacting us`,
        //     html: ClientMessage,
        // }

        // await transporter.sendMail(mailClient);
        return NextResponse.json({message: `Email sent successfully, Mail's data: ${data}`},{status: 200});
    } catch (error) {
        console.log('Unable to send email', error)
        return NextResponse.json({message: 'Sending email unsuccessful'},{status: 500});
    }
}