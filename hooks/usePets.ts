import { useState, useEffect } from 'react';
import { Pet } from '@/types/pet';

interface PetFilters {
  type?: string;
  breed?: string;
  age?: string;
  size?: string;
  gender?: string;
}

export const usePets = (initialFilters: PetFilters = {}) => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<PetFilters>(initialFilters);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        // Replace with actual API call
        const queryParams = new URLSearchParams();
        Object.entries(filters).forEach(([key, value]) => {
          if (value) queryParams.append(key, value);
        });

        const response = await fetch(`/api/pets?${queryParams}`);
        const data = await response.json();
        setPets(data);
      } catch (error) {
        console.error('Error fetching pets:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, [filters]);

  const updateFilters = (newFilters: Partial<PetFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const clearFilters = () => {
    setFilters({});
  };

  return {
    pets,
    loading,
    filters,
    updateFilters,
    clearFilters
  };
}; 