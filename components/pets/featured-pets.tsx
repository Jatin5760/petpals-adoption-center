"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PetCard } from "@/components/pets/pet-card";
import { useToast } from "@/hooks/use-toast";
import { getPets } from "@/lib/api/pets";
import { Pet } from "@/types/pet";

export function FeaturedPets() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchPets = async () => {
      try {
        // This would be replaced with an actual API call
        const featuredPets = await getPets({ featured: true, limit: 4 });
        setPets(featuredPets);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load featured pets.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchPets();
  }, [toast]);

  return (
    <section className="bg-white dark:bg-gray-950 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-teal-100 dark:bg-teal-900/20 px-3 py-1 text-sm text-teal-700 dark:text-teal-300">
              Featured Pets
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Looking for a Home
            </h2>
            <p className="max-w-[600px] text-gray-500 dark:text-gray-400">
              Meet some of our adorable, adoptable pets who are ready to find their forever families.
            </p>
          </div>
          <Link href="/pets">
            <Button variant="outline" className="mt-4 md:mt-0">
              View All Pets
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse h-[350px]"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pets.map((pet) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}