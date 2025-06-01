import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// JWT Secret (in a real app, this would be an environment variable)
const JWT_SECRET = "your-secret-key";

// Mock user database (in a real app, this would be a database)
const users = [
  {
    id: "1",
    email: "user@example.com",
    password: "hashed-password", // In reality, this would be a hashed password
    name: "Test User",
  },
];

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // In a real app, you would check the password against a hashed version
    // For demo purposes, we're just checking if the user exists
    const user = users.find(u => u.email === email);
    
    if (!user) {
      // In a real app, you wouldn't reveal whether the email exists
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }
    
    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: user.id,
        email: user.email,
        name: user.name
      },
      JWT_SECRET,
      { expiresIn: "7d" }
    );
    
    return NextResponse.json(
      {
        token,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 500 }
    );
  }
}