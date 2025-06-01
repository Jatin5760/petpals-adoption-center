"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PawPrint, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

export function MobileNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <PawPrint className="h-6 w-6" />
            <span className="font-bold">PetPals</span>
          </Link>
        </div>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`text-sm ${pathname === "/" ? "font-medium" : ""}`}
            >
              Home
            </Link>
            <div className="flex flex-col space-y-2 pl-4">
              <h4 className="text-sm font-medium">Pets</h4>
              <Link
                href="/pets"
                onClick={() => setIsOpen(false)}
                className={`text-sm ${pathname === "/pets" ? "font-medium" : ""}`}
              >
                All Pets
              </Link>
              <Link
                href="/pets/dogs"
                onClick={() => setIsOpen(false)}
                className={`text-sm ${pathname === "/pets/dogs" ? "font-medium" : ""}`}
              >
                Dogs
              </Link>
              <Link
                href="/pets/cats"
                onClick={() => setIsOpen(false)}
                className={`text-sm ${pathname === "/pets/cats" ? "font-medium" : ""}`}
              >
                Cats
              </Link>
              <Link
                href="/pets/other"
                onClick={() => setIsOpen(false)}
                className={`text-sm ${pathname === "/pets/other" ? "font-medium" : ""}`}
              >
                Other Pets
              </Link>
            </div>
            <div className="flex flex-col space-y-2 pl-4">
              <h4 className="text-sm font-medium">Breeds</h4>
              <Link
                href="/breeds/dogs"
                onClick={() => setIsOpen(false)}
                className={`text-sm ${pathname === "/breeds/dogs" ? "font-medium" : ""}`}
              >
                Dog Breeds
              </Link>
              <Link
                href="/breeds/cats"
                onClick={() => setIsOpen(false)}
                className={`text-sm ${pathname === "/breeds/cats" ? "font-medium" : ""}`}
              >
                Cat Breeds
              </Link>
            </div>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className={`text-sm ${pathname === "/about" ? "font-medium" : ""}`}
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={`text-sm ${pathname === "/contact" ? "font-medium" : ""}`}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pl-4">
              <h4 className="text-sm font-medium">Account</h4>
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className={`text-sm ${pathname === "/login" ? "font-medium" : ""}`}
              >
                Login
              </Link>
              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className={`text-sm ${pathname === "/register" ? "font-medium" : ""}`}
              >
                Register
              </Link>
              <Link
                href="/profile"
                onClick={() => setIsOpen(false)}
                className={`text-sm ${pathname === "/profile" ? "font-medium" : ""}`}
              >
                Profile
              </Link>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}