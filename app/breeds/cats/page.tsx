import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const catBreeds = [
  {
    id: "siamese",
    name: "Siamese",
    size: "Medium",
    temperament: "Social, Intelligent, Vocal",
    activityLevel: "High",
    shedding: "Low",
    goodWith: "Children, Other Cats, Dogs",
    description: "The Siamese is one of the oldest recognized cat breeds. They are known for their striking blue almond-shaped eyes, large ears, and sleek, muscular bodies. Siamese cats are very vocal and will have conversations with their owners all day long.",
    image: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "maine-coon",
    name: "Maine Coon",
    size: "Large",
    temperament: "Gentle, Friendly, Intelligent",
    activityLevel: "Moderate",
    shedding: "Heavy",
    goodWith: "Children, Dogs, Other Cats",
    description: "The Maine Coon is one of the largest domesticated cat breeds. They have a rugged appearance and a shaggy coat, with a gentle, friendly personality that earns them the nickname 'gentle giants' of the cat world.",
    image: "https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "persian",
    name: "Persian",
    size: "Medium to Large",
    temperament: "Sweet, Gentle, Quiet",
    activityLevel: "Low",
    shedding: "Heavy",
    goodWith: "Seniors, Calm Environments",
    description: "The Persian cat is known for its long, luxurious coat and sweet, gentle personality. They have a round face, small ears, and a short muzzle. Persians are quiet, affectionate cats that prefer a calm, stable environment.",
    image: "https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "bengal",
    name: "Bengal",
    size: "Medium to Large",
    temperament: "Energetic, Playful, Curious",
    activityLevel: "High",
    shedding: "Low",
    goodWith: "Active Families, Other Pets",
    description: "The Bengal cat has a wild appearance but a domestic temperament. Their spotted or marbled coat pattern resembles that of a leopard or jaguar. Bengals are energetic, playful cats that enjoy interactive toys and climbing.",
    image: "https://images.pexels.com/photos/1521306/pexels-photo-1521306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "ragdoll",
    name: "Ragdoll",
    size: "Large",
    temperament: "Relaxed, Affectionate, Docile",
    activityLevel: "Low to Moderate",
    shedding: "Moderate",
    goodWith: "Children, Seniors, Dogs",
    description: "The Ragdoll is known for its docile, placid temperament and tendency to go limp when picked up. They have semi-long, silky fur and striking blue eyes. Ragdolls are affectionate cats that form strong bonds with their owners.",
    image: "https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "sphynx",
    name: "Sphynx",
    size: "Medium",
    temperament: "Friendly, Energetic, Curious",
    activityLevel: "High",
    shedding: "None",
    goodWith: "Families, Other Pets",
    description: "The Sphynx is known for its lack of coat, which makes it appear hairless. Despite their unusual appearance, Sphynx cats are friendly, energetic, and seek human attention. They are warm to the touch and often seek out warm places to cuddle.",
    image: "https://images.pexels.com/photos/991831/pexels-photo-991831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function CatBreedsPage() {
  return (
    <div className="min-h-screen container py-10">
      <div className="flex flex-col items-center space-y-4 text-center mb-10">
        <div className="inline-block rounded-lg bg-teal-100 dark:bg-teal-900/20 px-3 py-1 text-sm text-teal-700 dark:text-teal-300">
          Breed Information
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Cat Breeds
        </h1>
        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Discover various cat breeds to find your purr-fect companion
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-10">
        <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="short">Short-hair</TabsTrigger>
          <TabsTrigger value="long">Long-hair</TabsTrigger>
          <TabsTrigger value="special">Special</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catBreeds.map((breed) => (
              <BreedCard key={breed.id} breed={breed} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="short" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catBreeds
              .filter((breed) => ["siamese", "bengal"].includes(breed.id))
              .map((breed) => (
                <BreedCard key={breed.id} breed={breed} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="long" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catBreeds
              .filter((breed) => ["maine-coon", "persian", "ragdoll"].includes(breed.id))
              .map((breed) => (
                <BreedCard key={breed.id} breed={breed} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="special" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catBreeds
              .filter((breed) => ["sphynx"].includes(breed.id))
              .map((breed) => (
                <BreedCard key={breed.id} breed={breed} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="text-center mt-10">
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          Looking to adopt a specific breed? Check our available cats for adoption!
        </p>
        <Link href="/pets/cats">
          <Button>
            See Available Cats
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
        <Link href={`/breeds/cats/${breed.id}`} className="w-full">
          <Button variant="outline" className="w-full">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}