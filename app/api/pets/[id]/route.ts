import { NextRequest, NextResponse } from "next/server";
import { mockPets } from '../mock-data';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    // Find pet by ID
    const pet = mockPets.find(pet => pet.id === id);
    
    if (!pet) {
      return new NextResponse(JSON.stringify({ error: 'Pet not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    return NextResponse.json(pet);
  } catch (error) {
    console.error("Error fetching pet:", error);
    return NextResponse.json(
      { error: "Failed to fetch pet" },
      { status: 500 }
    );
  }
}