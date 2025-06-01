import { NextRequest, NextResponse } from "next/server";

interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const data: ContactForm = await req.json();
    
    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    
    // In a real application, you would:
    // 1. Store the message in a database
    // 2. Send an email notification to admin
    // 3. Send a confirmation email to the user
    
    console.log("Contact form submission:", data);
    
    return NextResponse.json(
      { 
        message: "Message sent successfully",
        id: crypto.randomUUID()
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}