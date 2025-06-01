'use client';

import { Heart } from 'lucide-react';
import { useWishlist } from '@/lib/WishlistContext';

export function WishlistButton({ petId }: { petId: string }) {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const toggleWishlist = () => {
    if (isInWishlist(petId)) {
      removeFromWishlist(petId);
    } else {
      addToWishlist(petId);
    }
  };

  return (
    <button
      onClick={toggleWishlist}
      className={`absolute top-4 right-4 p-3 rounded-full ${
        isInWishlist(petId)
          ? 'bg-red-500 text-white'
          : 'bg-white/80 backdrop-blur-sm text-gray-600'
      } hover:scale-110 transition-all`}
    >
      <Heart className={`h-6 w-6 ${isInWishlist(petId) ? 'fill-current' : ''}`} />
    </button>
  );
} 