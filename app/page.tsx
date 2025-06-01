'use client';

import Link from "next/link";
import { ArrowRight, Search, Heart, Shield } from "lucide-react";
import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { FeaturedPets } from "@/components/pets/featured-pets";
import { HowItWorks } from "@/components/home/how-it-works";
import { Testimonials } from "@/components/home/testimonials";
import { Newsletter } from "@/components/home/newsletter";

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const hero = heroRef.current;

    if (!cursor || !hero) return;

    const onMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        const { clientX, clientY } = e;
        const heroRect = hero.getBoundingClientRect();
        
        if (
          clientX >= heroRect.left &&
          clientX <= heroRect.right &&
          clientY >= heroRect.top &&
          clientY <= heroRect.bottom
        ) {
          cursor.style.display = 'block';
          cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
        } else {
          cursor.style.display = 'none';
        }
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-40 h-40 pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl z-0 hidden"
        style={{ willChange: 'transform' }}
      />

      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 md:py-28 overflow-hidden bg-white dark:bg-gray-950">
        {/* Background with rounded corners */}
        <div className="absolute inset-4 bg-white/70 dark:bg-[#14121F]/90 rounded-3xl backdrop-blur-sm shadow-xl border border-gray-100 dark:border-purple-500/10" />
        
        {/* Content */}
        <div className="container relative px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4 pl-6 md:pl-8 lg:pl-12">
              <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-100/10 backdrop-blur-sm px-4 py-1.5 text-sm text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-500/20 shadow-sm">
                Find Your Forever Friend
              </div>
              <div className="max-w-[600px] space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-purple-950 dark:text-white">
                  Adopt a Pet, Gain a Family Member
                </h1>
                <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Every pet deserves a loving home. Browse our selection of adorable, adoptable pets and find your perfect companion today.
                </p>
                <div className="flex flex-col gap-3 min-[400px]:flex-row pt-2">
                  <Link href="/pets">
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white relative overflow-hidden group shadow-lg">
                      <span className="absolute inset-0 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
                      Find a Pet
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" variant="outline" className="bg-white hover:bg-gray-50 text-purple-700 border-purple-200 hover:border-purple-300 dark:bg-white/5 dark:hover:bg-white/10 dark:text-white dark:border-purple-500/20">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-100 to-purple-50 dark:from-purple-600 dark:to-purple-900 rounded-xl blur opacity-30 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative overflow-hidden rounded-xl bg-white shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
                    width={550}
                    height={550}
                    alt="Two beautiful golden retriever puppies playing"
                    className="aspect-square object-cover w-full transition-all duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white dark:bg-gray-950 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Easy Search Card */}
            <div className="group relative flex flex-col items-center text-center p-6">
              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-purple-400/20 rounded-xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              {/* Card Content */}
              <div className="relative flex flex-col items-center bg-white dark:bg-gray-900 p-6 rounded-xl border border-purple-100 dark:border-purple-900/50 shadow-lg group-hover:border-purple-200 dark:group-hover:border-purple-700/50 transition-all duration-300 group-hover:scale-[1.02]">
                <div className="mb-4 rounded-full bg-purple-100 dark:bg-purple-900/20 p-3 ring-4 ring-purple-50 dark:ring-purple-900/10 group-hover:ring-purple-100 dark:group-hover:ring-purple-800/20 transition-all duration-300">
                  <Search className="h-6 w-6 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300">Easy Search</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Filter pets by species, breed, age, and location to find your perfect match.
                </p>
              </div>
            </div>

            {/* Loving Homes Card */}
            <div className="group relative flex flex-col items-center text-center p-6">
              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-600/20 to-teal-400/20 rounded-xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              {/* Card Content */}
              <div className="relative flex flex-col items-center bg-white dark:bg-gray-900 p-6 rounded-xl border border-teal-100 dark:border-teal-900/50 shadow-lg group-hover:border-teal-200 dark:group-hover:border-teal-700/50 transition-all duration-300 group-hover:scale-[1.02]">
                <div className="mb-4 rounded-full bg-teal-100 dark:bg-teal-900/20 p-3 ring-4 ring-teal-50 dark:ring-teal-900/10 group-hover:ring-teal-100 dark:group-hover:ring-teal-800/20 transition-all duration-300">
                  <Heart className="h-6 w-6 text-teal-600 dark:text-teal-400 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-teal-600 dark:text-teal-400 group-hover:text-teal-700 dark:group-hover:text-teal-300">Loving Homes</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We carefully screen all adopters to ensure pets go to safe, loving environments.
                </p>
              </div>
            </div>

            {/* Veterinary Care Card */}
            <div className="group relative flex flex-col items-center text-center p-6">
              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-600/20 to-orange-400/20 rounded-xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              {/* Card Content */}
              <div className="relative flex flex-col items-center bg-white dark:bg-gray-900 p-6 rounded-xl border border-orange-100 dark:border-orange-900/50 shadow-lg group-hover:border-orange-200 dark:group-hover:border-orange-700/50 transition-all duration-300 group-hover:scale-[1.02]">
                <div className="mb-4 rounded-full bg-orange-100 dark:bg-orange-900/20 p-3 ring-4 ring-orange-50 dark:ring-orange-900/10 group-hover:ring-orange-100 dark:group-hover:ring-orange-800/20 transition-all duration-300">
                  <Shield className="h-6 w-6 text-orange-600 dark:text-orange-400 group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-orange-600 dark:text-orange-400 group-hover:text-orange-700 dark:group-hover:text-orange-300">Veterinary Care</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  All our pets receive medical check-ups, vaccinations, and spay/neuter services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Pets Section */}
      <FeaturedPets />

      {/* How it Works Section */}
      <HowItWorks />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}