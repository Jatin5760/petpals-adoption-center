'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type WishlistContextType = {
  wishlist: string[];
  addToWishlist: (petId: string) => void;
  removeFromWishlist: (petId: string) => void;
  isInWishlist: (petId: string) => boolean;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

function getStoredWishlist(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const item = window.localStorage.getItem('wishlist');
    return item ? JSON.parse(item) : [];
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return [];
  }
}

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<string[]>([]);

  // Initialize from localStorage
  useEffect(() => {
    setWishlist(getStoredWishlist());
  }, []);

  const addToWishlist = (petId: string) => {
    const newWishlist = [...wishlist, petId];
    setWishlist(newWishlist);
    try {
      localStorage.setItem('wishlist', JSON.stringify(newWishlist));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  const removeFromWishlist = (petId: string) => {
    const newWishlist = wishlist.filter(id => id !== petId);
    setWishlist(newWishlist);
    try {
      localStorage.setItem('wishlist', JSON.stringify(newWishlist));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  const isInWishlist = (petId: string) => {
    return wishlist.includes(petId);
  };

  const value = {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
} 