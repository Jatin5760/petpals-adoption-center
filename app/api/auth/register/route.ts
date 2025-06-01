import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import crypto from "crypto";

// Email OTP Store (in a real application, this would be in a database)
const otpStore: { [email: string]: { otp: string; expires: Date } } = {};

// Generate a 6-digit OTP
function generateOTP(): string {
  return crypto.randomInt(100000, 999999).toString();
}

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: "smtp.example.com", // Replace with your SMTP server
  port: 587,
  secure: false,
  auth: {
    user: "no-reply@petpals.com", // Replace with your email
    pass: "your-password", // Replace with your password
  },
});

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Generate OTP
    const otp = generateOTP();
    
    // Store OTP with expiration (15 minutes)
    const expirationDate = new Date();
    expirationDate.setMinutes(expirationDate.getMinutes() + 15);
    
    otpStore[email] = {
      otp,
      expires: expirationDate,
    };
    
    // Prepare email
    const mailOptions = {
      from: '"PetPals" <no-reply@petpals.com>',
      to: email,
      subject: "Your PetPals Verification Code",
      text: `Your verification code is: ${otp}. This code will expire in 15 minutes.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6D28D9;">PetPals Email Verification</h2>
          <p>Thank you for registering with PetPals. Please use the following code to verify your email address:</p>
          <div style="background-color: #F3F4F6; padding: 10px; text-align: center; font-size: 24px; letter-spacing: 5px; font-weight: bold;">
            ${otp}
          </div>
          <p>This code will expire in 15 minutes.</p>
          <p>If you didn't request this code, please ignore this email.</p>
          <p>Best regards,<br>The PetPals Team</p>
        </div>
      `,
    };
    
    // In development, we'll just log the OTP instead of sending an email
    console.log(`OTP for ${email}: ${otp}`);
    
    // In production, uncomment this to send the actual email
    /*
    await transporter.sendMail(mailOptions);
    */

    return NextResponse.json(
      { message: "OTP sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending OTP:", error);
    return NextResponse.json(
      { error: "Failed to send OTP" },
      { status: 500 }
    );
  }
}