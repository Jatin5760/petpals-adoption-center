'use client';

import { useState, useEffect } from 'react';
import { Heart, Filter, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from 'next/link';
import { useWishlist } from '@/lib/WishlistContext';
import { Pet } from '@/types/pet';

const petCategories = ['All', 'Dogs', 'Cats', 'Birds', 'Small Pets'];

export default function PetsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [mounted, setMounted] = useState(false);
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();

  useEffect(() => {
    setMounted(true);
    // Fetch pets when component mounts
    const fetchPets = async () => {
      try {
        const response = await fetch('/api/pets');
        const data = await response.json();
        setPets(data);
      } catch (error) {
        console.error('Error fetching pets:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPets();
  }, []);

  const toggleWishlist = (e: React.MouseEvent, petId: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInWishlist(petId)) {
      removeFromWishlist(petId);
    } else {
      addToWishlist(petId);
    }
  };

  const filteredPets = pets.filter(pet => {
    const matchesCategory = selectedCategory === 'All' || 
                          (selectedCategory === 'Small Pets' ? pet.type === 'other' : 
                           pet.type.toLowerCase() === selectedCategory.toLowerCase().slice(0, -1));
    const matchesSearch = pet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pet.breed.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pet.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (!mounted) {
    return null;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading pets...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col items-center mb-8 space-y-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">Available Pets</h1>
          <p className="text-gray-500 dark:text-gray-400 text-center max-w-[600px]">
            Find your perfect companion from our selection of loving pets waiting for their forever homes.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search pets..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {petCategories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`whitespace-nowrap ${
                  selectedCategory === category 
                    ? 'bg-purple-600 text-white' 
                    : 'text-gray-600 dark:text-gray-300'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Pets Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPets.map(pet => (
            <div key={pet.id} className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <div className="relative aspect-square">
                <img
                  src={pet.imageUrl}
                  alt={pet.name}
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
                <button
                  onClick={(e) => toggleWishlist(e, pet.id)}
                  className={`absolute top-4 right-4 p-2 rounded-full ${
                    isInWishlist(pet.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white/80 backdrop-blur-sm text-gray-600'
                  } hover:scale-110 transition-all z-10`}
                >
                  <Heart className={`h-5 w-5 ${isInWishlist(pet.id) ? 'fill-current' : ''}`} />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{pet.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{pet.breed} • {pet.age}</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{pet.description}</p>
                <div className="mt-4 flex gap-2">
                  <Link href={`/pets/${pet.id}`} className="flex-1">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPets.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No pets found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
} 