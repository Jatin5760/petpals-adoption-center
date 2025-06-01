import { Pet, PetFilterParams } from "@/types/pet";

// Mock data for demonstration purposes
// In a real implementation, this would be fetched from your backend API
const mockPets: Pet[] = [
  {
    id: "1",
    name: "Buddy",
    type: "dog",
    breed: "Golden Retriever",
    age: "3 years",
    gender: "Male",
    size: "Large",
    description: "Buddy is a friendly, energetic Golden Retriever who loves to play fetch and go for long walks. He's great with kids and other dogs.",
    images: ["https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
    location: "New York, NY",
    adoptionStatus: "available",
    traits: ["Friendly", "Energetic", "Loyal"],
    medicalInfo: {
      vaccinated: true,
      neutered: true,
      microchipped: true,
      specialNeeds: false,
    },
    goodWith: {
      kids: true,
      dogs: true,
      cats: false,
    },
    activityLevel: "High",
    featured: true,
  },
  {
    id: "2",
    name: "Luna",
    type: "cat",
    breed: "Siamese",
    age: "2 years",
    gender: "Female",
    size: "Medium",
    description: "Luna is a beautiful Siamese cat with striking blue eyes. She's a bit shy at first but warms up quickly and loves to curl up in your lap.",
    images: ["https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
    location: "Boston, MA",
    adoptionStatus: "available",
    traits: ["Affectionate", "Independent", "Quiet"],
    medicalInfo: {
      vaccinated: true,
      neutered: true,
      microchipped: true,
      specialNeeds: false,
    },
    goodWith: {
      kids: true,
      dogs: false,
      cats: true,
    },
    activityLevel: "Medium",
    featured: true,
  },
  {
    id: "3",
    name: "Max",
    type: "dog",
    breed: "Beagle",
    age: "1 year",
    gender: "Male",
    size: "Medium",
    description: "Max is a playful Beagle puppy with boundless energy. He's still learning basic commands but is very food-motivated and eager to please.",
    images: ["https://images.pexels.com/photos/733416/pexels-photo-733416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
    location: "Chicago, IL",
    adoptionStatus: "available",
    traits: ["Playful", "Curious", "Friendly"],
    medicalInfo: {
      vaccinated: true,
      neutered: false,
      microchipped: true,
      specialNeeds: false,
    },
    goodWith: {
      kids: true,
      dogs: true,
      cats: true,
    },
    activityLevel: "High",
    featured: true,
  },
  {
    id: "4",
    name: "Bella",
    type: "cat",
    breed: "Maine Coon",
    age: "4 years",
    gender: "Female",
    size: "Large",
    description: "Bella is a gorgeous Maine Coon with a luxurious coat. She's gentle, loving, and gets along well with everyone.",
    images: ["https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
    location: "Seattle, WA",
    adoptionStatus: "available",
    traits: ["Gentle", "Affectionate", "Calm"],
    medicalInfo: {
      vaccinated: true,
      neutered: true,
      microchipped: true,
      specialNeeds: false,
    },
    goodWith: {
      kids: true,
      dogs: true,
      cats: true,
    },
    activityLevel: "Low",
    featured: true,
  }
];

// Function to get pets with optional filtering
export async function getPets(filters: PetFilterParams = {}): Promise<Pet[]> {
  // Simulate API request delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Filter logic
  let filteredPets = [...mockPets];
  
  if (filters.type) {
    filteredPets = filteredPets.filter(pet => pet.type === filters.type);
  }
  
  if (filters.breed) {
    filteredPets = filteredPets.filter(pet => pet.breed.toLowerCase().includes(filters.breed!.toLowerCase()));
  }
  
  if (filters.gender) {
    filteredPets = filteredPets.filter(pet => pet.gender === filters.gender);
  }
  
  if (filters.size) {
    filteredPets = filteredPets.filter(pet => pet.size === filters.size);
  }
  
  if (filters.featured !== undefined) {
    filteredPets = filteredPets.filter(pet => pet.featured === filters.featured);
  }
  
  // Apply pagination if specified
  if (filters.limit) {
    const page = filters.page || 1;
    const startIndex = (page - 1) * filters.limit;
    filteredPets = filteredPets.slice(startIndex, startIndex + filters.limit);
  }
  
  return filteredPets;
}

// Function to get a single pet by ID
export async function getPetById(id: string): Promise<Pet | null> {
  // Simulate API request delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const pet = mockPets.find(pet => pet.id === id);
  return pet || null;
}

// Function to search pets by name or description
export async function searchPets(query: string): Promise<Pet[]> {
  // Simulate API request delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  query = query.toLowerCase();
  
  return mockPets.filter(pet => 
    pet.name.toLowerCase().includes(query) || 
    pet.description.toLowerCase().includes(query) ||
    pet.breed.toLowerCase().includes(query)
  );
}

// More API functions would be added here for a complete implementation