'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWishlist } from '@/lib/WishlistContext';
import { Pet } from '@/types/pet';
import Image from 'next/image';
import Link from 'next/link';

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const [mounted, setMounted] = useState(false);
  const [removingIds, setRemovingIds] = useState<string[]>([]);
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    // Fetch all pets when component mounts
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

  const handleRemoveFromWishlist = async (petId: string) => {
    setRemovingIds(prev => [...prev, petId]);
    await new Promise(resolve => setTimeout(resolve, 300)); // Animation delay
    removeFromWishlist(petId);
    setRemovingIds(prev => prev.filter(id => id !== petId));
  };

  if (!mounted || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    );
  }

  // Filter pets based on wishlist IDs
  const wishlistPets = pets.filter(pet => wishlist.includes(pet.id));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
        My Wishlist
      </h1>

      {wishlistPets.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16"
        >
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Your wishlist is empty
          </p>
          <Link
            href="/pets"
            className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Browse Pets
          </Link>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {wishlistPets.map((pet) => (
              <motion.div
                key={pet.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={pet.imageUrl}
                    alt={pet.name}
                    fill
                    className="object-cover"
                  />
                  <button
                    onClick={() => handleRemoveFromWishlist(pet.id)}
                    disabled={removingIds.includes(pet.id)}
                    className="absolute top-2 right-2 p-2 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/40 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 text-gray-800 dark:text-white">
                    {pet.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                    {pet.description}
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-purple-600 dark:text-purple-400 font-medium">
                      {pet.breed}
                    </span>
                    <Link
                      href={`/pets/${pet.id}`}
                      className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
} 