import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function DogsPage() {
  return (
    <main className="container mx-auto py-10 px-8">
      <h1 className="text-4xl font-bold mb-8">Adopt a Dog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dogs.map((dog) => (
          <Card key={dog.id} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image 
                src={dog.image} 
                alt={dog.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <CardHeader>
              <CardTitle>{dog.name}</CardTitle>
              <CardDescription>{dog.breed} • {dog.age} • {dog.location}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{dog.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/pets/dogs/${dog.id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}

const dogs = [
  {
    id: "1",
    name: "Buddy",
    breed: "Golden Retriever",
    age: "3 years",
    location: "New York, NY",
    description: "Buddy is a friendly and energetic Golden Retriever who loves to play fetch and go for long walks.",
    image: "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "2",
    name: "Max",
    breed: "German Shepherd",
    age: "2 years",
    location: "Los Angeles, CA",
    description: "Max is a loyal and intelligent German Shepherd. He's great with children and makes an excellent guard dog.",
    image: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "3",
    name: "Luna",
    breed: "Siberian Husky",
    age: "1 year",
    location: "Chicago, IL",
    description: "Luna is a playful and affectionate Siberian Husky. She has beautiful blue eyes and loves to run.",
    image: "https://images.pexels.com/photos/2853422/pexels-photo-2853422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "4",
    name: "Charlie",
    breed: "Beagle",
    age: "4 years",
    location: "Houston, TX",
    description: "Charlie is a curious and friendly Beagle. He's good with other pets and enjoys exploring outdoors.",
    image: "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "5",
    name: "Lucy",
    breed: "Labrador Retriever",
    age: "2 years",
    location: "Philadelphia, PA",
    description: "Lucy is a gentle and loving Labrador Retriever. She's great with children and enjoys swimming.",
    image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "6",
    name: "Cooper",
    breed: "Border Collie",
    age: "3 years",
    location: "Phoenix, AZ",
    description: "Cooper is an energetic and intelligent Border Collie. He's eager to learn and loves agility training.",
    image: "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];