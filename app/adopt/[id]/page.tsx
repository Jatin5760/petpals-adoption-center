import { mockPets } from '@/app/api/pets/mock-data';
import AdoptionFormClient from './AdoptionFormClient';

// Generate static params for all pets
export function generateStaticParams() {
  return mockPets.map((pet) => ({
    id: pet.id,
  }));
}

export default function AdoptionPage({ params }: { params: { id: string } }) {
  const pet = mockPets.find(p => p.id === params.id);

  if (!pet) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Pet not found</div>
      </div>
    );
  }

  return <AdoptionFormClient petId={params.id} />;
} 