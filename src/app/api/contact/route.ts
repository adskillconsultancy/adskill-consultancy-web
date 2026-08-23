import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Configure the email transport using environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Configure the email content
    const mailOptions = {
      from: process.env.EMAIL_USER, // The robot sender (your personal email)
      to: 'adskillconsultancyinc@gmail.com', // The destination (your official company email)
      replyTo: email,               // Allows you to hit "Reply" and email the user back directly
      subject: `🚨 Website Inquiry: ${subject || 'New Message'}`,
      text: `
You have received a new inquiry from the AdSkill Website Contact Form!

👤 Sender Details:
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

📝 Message Subject: ${subject || 'Not provided'}

💬 Message:
${message}
      `,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #eaeaea; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
          
          <!-- Header -->
          <div style="background-color: #0A2342; padding: 25px 30px; text-align: center;">
            <h2 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">Website Inquiry</h2>
            <p style="color: #cbd5e1; margin: 8px 0 0 0; font-size: 14px;">A new message was submitted via the AdSkill Contact Form</p>
          </div>

          <!-- Body -->
          <div style="padding: 30px;">
            
            <h3 style="color: #0A2342; margin-top: 0; margin-bottom: 15px; font-size: 18px; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">👤 Sender Details</h3>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f8f9fa; color: #64748b; font-weight: 500; width: 30%;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f8f9fa; color: #0f172a; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f8f9fa; color: #64748b; font-weight: 500;">Email Address</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f8f9fa; color: #0f172a; font-weight: 600;"><a href="mailto:${email}" style="color: #E6B325; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f8f9fa; color: #64748b; font-weight: 500;">Phone Number</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f8f9fa; color: #0f172a; font-weight: 600;">${phone || '<span style="color: #94a3b8; font-style: italic;">Not provided</span>'}</td>
              </tr>
            </table>

            <h3 style="color: #0A2342; margin-top: 0; margin-bottom: 15px; font-size: 18px; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">💬 Message</h3>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #E6B325;">
              <p style="margin: 0 0 10px 0; font-weight: bold; color: #0f172a;">Subject: ${subject || 'No Subject Provided'}</p>
              <p style="margin: 0; line-height: 1.7; color: #334155; white-space: pre-wrap;">${message}</p>
            </div>
            
          </div>
          
          <!-- Footer -->
          <div style="background-color: #f1f5f9; padding: 15px 30px; text-align: center; color: #64748b; font-size: 12px;">
            <p style="margin: 0;">This is an automated email from the AdSkill Consultancy website.<br/>To reply to the sender, simply hit "Reply" on this email.</p>
          </div>
          
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please check server logs.' },
      { status: 500 }
    );
  }
}
