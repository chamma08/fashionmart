import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // Input validation
    const data = await request.json();
    const { firstName, lastName, email, phoneNumber, subject, message } = data;
    
    if (!email || !message) {
      return NextResponse.json(
        { message: 'Email and message are required' },
        { status: 400 }
      );
    }

    // Create reusable transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD
      }
    });
    
    // Format the email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL,
      replyTo: email, // Allow direct reply to sender
      subject: `New Contact Form: ${subject || 'No Subject'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
          <h2 style="color: #333; border-bottom: 1px solid #eaeaea; padding-bottom: 10px;">New Website Contact</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 100px;">Name:</td>
              <td style="padding: 8px 0;">${firstName || ''} ${lastName || ''}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${phoneNumber ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0;">${phoneNumber}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Subject:</td>
              <td style="padding: 8px 0;">${subject || 'N/A'}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px;">
            <h3 style="color: #555;">Message:</h3>
            <p style="background: #f9f9f9; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="font-size: 12px; color: #777; margin-top: 30px; border-top: 1px solid #eaeaea; padding-top: 10px;">
            This email was sent from your website contact form.
          </p>
        </div>
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent successfully:', info.messageId);
    
    return NextResponse.json(
      { success: true, message: 'Your message has been sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    
    return NextResponse.json(
      { success: false, message: 'Failed to send your message. Please try again later.' },
      { status: 500 }
    );
  }
}