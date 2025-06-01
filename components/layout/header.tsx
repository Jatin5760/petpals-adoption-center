'use client';

import Link from 'next/link';
import { Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm dark:bg-gray-950/80 dark:border-gray-800">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-purple-600 dark:text-purple-400">PetPals</span>
        </Link>
        
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/pets" className="text-sm font-medium text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400">
            Find Pets
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400">
            Contact
          </Link>
          <Link href="/wishlist">
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
              {/* You can add a counter badge here if needed */}
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
} 