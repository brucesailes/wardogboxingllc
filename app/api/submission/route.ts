import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phonenumber, message } = await req.json();

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT, // Ensure the port is a number
      secure: false, // Use true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASSWORD, // Your Gmail password or App Password
      },
      tls: {
        rejectUnauthorized: false,
      },
    } as SMTPTransport.Options);

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: 'Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phonenumber}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Thank you!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.redirect('/');
}
