"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Pet } from "@/types/pet";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface PetCardProps {
  pet: Pet;
}

export function PetCard({ pet }: PetCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { toast } = useToast();

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      description: isFavorite 
        ? `${pet.name} has been removed from your favorites.` 
        : `${pet.name} has been added to your favorites.`,
    });
  };

  return (
    <Link href={`/pets/${pet.id}`}>
      <Card className="overflow-hidden transition-all duration-200 hover:shadow-md h-full flex flex-col">
        <div className="relative">
          <div className="aspect-square relative overflow-hidden">
            <img
              src={pet.images[0]}
              alt={pet.name}
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            />
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 rounded-full bg-white/80 dark:bg-gray-800/80 z-10"
                  onClick={toggleFavorite}
                >
                  <Heart
                    className={cn(
                      "h-5 w-5 transition-colors",
                      isFavorite ? "fill-red-500 text-red-500" : "text-gray-600 dark:text-gray-400"
                    )}
                  />
                  <span className="sr-only">Toggle favorite</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{isFavorite ? "Remove from favorites" : "Add to favorites"}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <CardHeader className="p-4 pb-0">
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl">{pet.name}</CardTitle>
            <Badge variant={pet.type === "dog" ? "default" : "secondary"}>
              {pet.type.charAt(0).toUpperCase() + pet.type.slice(1)}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-2 flex-1">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-2">
            <div className="text-sm">
              <span className="text-muted-foreground">Age:</span> {pet.age}
            </div>
            <div className="text-sm">
              <span className="text-muted-foreground">Gender:</span> {pet.gender}
            </div>
            <div className="text-sm">
              <span className="text-muted-foreground">Breed:</span> {pet.breed}
            </div>
            <div className="text-sm">
              <span className="text-muted-foreground">Size:</span> {pet.size}
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4 line-clamp-2">{pet.description}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button className="w-full">View Details</Button>
        </CardFooter>
      </Card>
    </Link>
  );
}