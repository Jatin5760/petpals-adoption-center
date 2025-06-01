import { NextRequest, NextResponse } from "next/server";
import { Pet, PetFilterParams } from "@/types/pet";
import { mockPets } from './mock-data';

export async function GET() {
  try {
    return NextResponse.json(mockPets);
  } catch (error) {
    console.error('Error fetching pets:', error);
    return NextResponse.json(
      { error: 'Failed to fetch pets' },
      { status: 500 }
    );
  }
}