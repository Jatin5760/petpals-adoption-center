import { mockPets } from '@/app/api/pets/mock-data';
import { MapPin, Calendar, Ruler } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { WishlistButton } from './client';
import Link from 'next/link';

// Generate static params for all pets
export async function generateStaticParams() {
  return mockPets.map((pet) => ({
    id: pet.id,
  }));
}

export default function PetDetailsPage({ params }: { params: { id: string } }) {
  const pet = mockPets.find(p => p.id === params.id);

  if (!pet) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Pet not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Pet Image and Basic Info */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="relative aspect-video">
              <img
                src={pet.imageUrl}
                alt={pet.name}
                className="object-cover w-full h-full"
              />
              <WishlistButton petId={pet.id} />
            </div>

            <div className="p-6 space-y-6">
              {/* Header */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{pet.name}</h1>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                    {pet.type.charAt(0).toUpperCase() + pet.type.slice(1)}
                  </span>
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-300">{pet.breed}</p>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <Calendar className="h-5 w-5" />
                  <span>{pet.age}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <Ruler className="h-5 w-5" />
                  <span>{pet.size}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <MapPin className="h-5 w-5" />
                  <span>{pet.location}</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">About {pet.name}</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {pet.description}
                </p>
              </div>

              {/* Adoption Button */}
              <div className="pt-4">
                <Link href={`/adopt/${pet.id}`} className="block">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg py-6">
                    Start Adoption Process
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 