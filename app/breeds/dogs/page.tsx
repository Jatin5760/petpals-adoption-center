import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const dogBreeds = [
  {
    id: "golden-retriever",
    name: "Golden Retriever",
    size: "Large",
    temperament: "Friendly, Reliable, Trustworthy",
    activityLevel: "High",
    shedding: "Heavy",
    goodWith: "Children, Other Dogs, Strangers",
    description: "The Golden Retriever is a sturdy, muscular dog with a dense, water-repellent wavy coat. Intelligent and eager to please, they excel as guide dogs and in search-and-rescue operations.",
    image: "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "german-shepherd",
    name: "German Shepherd",
    size: "Large",
    temperament: "Confident, Courageous, Smart",
    activityLevel: "High",
    shedding: "Heavy",
    goodWith: "Family, Trained Children",
    description: "The German Shepherd is a large, agile, muscular dog of noble character and high intelligence. Loyal, confident, courageous, and steady, they're truly a dog lover's delight.",
    image: "https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "labrador-retriever",
    name: "Labrador Retriever",
    size: "Large",
    temperament: "Friendly, Active, Outgoing",
    activityLevel: "High",
    shedding: "Moderate",
    goodWith: "Children, Other Pets, Everyone",
    description: "The Labrador Retriever is a strongly built, medium-sized, short-coupled, dog possessing a sound, athletic, well-balanced conformation. Friendly, outgoing, and high-spirited companions.",
    image: "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "beagle",
    name: "Beagle",
    size: "Small to Medium",
    temperament: "Friendly, Curious, Merry",
    activityLevel: "High",
    shedding: "Moderate",
    goodWith: "Children, Other Dogs",
    description: "The Beagle is a sturdy, hardy little hound dog with a short coat, long droopy ears, and a jovial personality. They're happy-go-lucky, friendly, and always ready for a good time or adventure.",
    image: "https://images.pexels.com/photos/733416/pexels-photo-733416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "french-bulldog",
    name: "French Bulldog",
    size: "Small",
    temperament: "Playful, Smart, Adaptable",
    activityLevel: "Low to Moderate",
    shedding: "Moderate",
    goodWith: "Children, Seniors, Apartment Living",
    description: "The French Bulldog has the appearance of an active, intelligent, muscular dog of heavy bone, smooth coat, compactly built, and of medium or small structure. Expression alert, curious, and interested.",
    image: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "poodle",
    name: "Poodle",
    size: "Toy, Miniature, Standard",
    temperament: "Active, Proud, Very Smart",
    activityLevel: "Moderate to High",
    shedding: "Light",
    goodWith: "Children, Other Dogs, Elderly",
    description: "The Poodle is an elegant dog, known for its intelligence and hypoallergenic coat. They come in three size varieties: Standard, Miniature, and Toy. Despite their fancy appearance, they are athletic and versatile.",
    image: "https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function DogBreedsPage() {
  return (
    <div className="min-h-screen container py-10">
      <div className="flex flex-col items-center space-y-4 text-center mb-10">
        <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/20 px-3 py-1 text-sm text-purple-700 dark:text-purple-300">
          Breed Information
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Dog Breeds
        </h1>
        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Learn about different dog breeds to find your perfect companion
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-10">
        <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="small">Small</TabsTrigger>
          <TabsTrigger value="medium">Medium</TabsTrigger>
          <TabsTrigger value="large">Large</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dogBreeds.map((breed) => (
              <BreedCard key={breed.id} breed={breed} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="small" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dogBreeds
              .filter((breed) => breed.size.includes("Small"))
              .map((breed) => (
                <BreedCard key={breed.id} breed={breed} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="medium" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dogBreeds
              .filter((breed) => breed.size.includes("Medium"))
              .map((breed) => (
                <BreedCard key={breed.id} breed={breed} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="large" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dogBreeds
              .filter((breed) => breed.size.includes("Large"))
              .map((breed) => (
                <BreedCard key={breed.id} breed={breed} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="text-center mt-10">
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          Looking to adopt a specific breed? Check our available dogs for adoption!
        </p>
        <Link href="/pets/dogs">
          <Button>
            See Available Dogs
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

function BreedCard({ breed }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="aspect-[4/3] relative overflow-hidden">
        <img
          src={breed.image}
          alt={breed.name}
          className="object-cover w-full h-full"
        />
      </div>
      <CardHeader>
        <CardTitle>{breed.name}</CardTitle>
        <CardDescription>{breed.temperament}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div>
            <p className="text-sm font-medium">Size</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{breed.size}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Activity Level</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{breed.activityLevel}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Shedding</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{breed.shedding}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Good With</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{breed.goodWith}</p>
          </div>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
          {breed.description}
        </p>
      </CardContent>
      <CardFooter>
        <Link href={`/breeds/dogs/${breed.id}`} className="w-full">
          <Button variant="outline" className="w-full">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}