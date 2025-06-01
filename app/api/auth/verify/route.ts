import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// Email OTP Store (this would be shared with the register route in a real app)
// In a production app, this would be stored in a database
const otpStore: { [email: string]: { otp: string; expires: Date } } = {};

// JWT Secret (in a real app, this would be an environment variable)
const JWT_SECRET = "your-secret-key";

export async function POST(req: NextRequest) {
  try {
    const { email, otp } = await req.json();

    if (!email || !otp) {
      return NextResponse.json(
        { error: "Email and OTP are required" },
        { status: 400 }
      );
    }

    // Check if OTP exists for the email
    const storedOTP = otpStore[email];
    
    if (!storedOTP) {
      return NextResponse.json(
        { error: "OTP not found or expired" },
        { status: 400 }
      );
    }
    
    // Check if OTP is expired
    if (new Date() > storedOTP.expires) {
      delete otpStore[email];
      return NextResponse.json(
        { error: "OTP expired" },
        { status: 400 }
      );
    }
    
    // Verify OTP
    if (storedOTP.otp !== otp) {
      return NextResponse.json(
        { error: "Invalid OTP" },
        { status: 400 }
      );
    }
    
    // OTP is valid, remove it from store
    delete otpStore[email];
    
    // Generate a verification token
    const verificationToken = jwt.sign(
      { email, verified: true },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    
    return NextResponse.json(
      { 
        message: "Email verified successfully",
        token: verificationToken
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return NextResponse.json(
      { error: "Failed to verify OTP" },
      { status: 500 }
    );
  }
}