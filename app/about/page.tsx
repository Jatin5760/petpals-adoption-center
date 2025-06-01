import { Heart, PawPrint as Paw, Users, Award, Shield, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="bg-purple-50 dark:bg-gray-900 py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/20 px-3 py-1 text-sm text-purple-700 dark:text-purple-300">
              About Us
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Our Mission & Story
            </h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We're dedicated to finding loving homes for pets in need and supporting the community through the power of animal-human connections.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
              <p className="text-gray-500 dark:text-gray-400">
                PetPals began in 2018 with a simple goal: to help connect shelter animals with loving families. Founded by a group of animal lovers who saw the need for a more streamlined, compassionate adoption process, we've since helped thousands of pets find their forever homes.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                What started as a small operation has grown into a nationwide network of shelters, fosterers, volunteers, and adopters. Our team works tirelessly to ensure every animal receives proper care, medical attention, and ultimately, a loving home.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                We believe that pets enrich our lives in countless ways, and we're committed to making the adoption process as smooth and joyful as possible for both animals and humans.
              </p>
            </div>
            <div className="mx-auto w-full max-w-[500px] lg:max-w-none overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                width={550}
                height={550}
                alt="PetPals team working with animals"
                className="aspect-square object-cover w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter">Our Values</h2>
            <p className="max-w-[700px] text-gray-500 dark:text-gray-400">
              The core principles that guide our work and our mission every day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="mb-4 rounded-full bg-purple-100 p-3 dark:bg-purple-900/20">
                <Heart className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Compassion</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We approach our work with empathy and kindness, understanding the unique needs of each animal and adopter.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="mb-4 rounded-full bg-teal-100 p-3 dark:bg-teal-900/20">
                <Shield className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We maintain the highest standards of honesty and ethics in all our operations and interactions.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="mb-4 rounded-full bg-blue-100 p-3 dark:bg-blue-900/20">
                <Activity className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Dedication</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We are committed to ensuring the best possible outcomes for all animals in our care.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="mb-4 rounded-full bg-orange-100 p-3 dark:bg-orange-900/20">
                <Paw className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Respect</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We respect each animal's unique personality and needs, ensuring they find homes where they'll thrive.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="mb-4 rounded-full bg-red-100 p-3 dark:bg-red-900/20">
                <Users className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We believe in building strong relationships with shelters, adopters, and volunteers to create a network of support.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="mb-4 rounded-full bg-green-100 p-3 dark:bg-green-900/20">
                <Award className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We strive for excellence in all aspects of our work, from animal care to adopter education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter">Our Team</h2>
            <p className="max-w-[700px] text-gray-500 dark:text-gray-400">
              Meet the dedicated individuals who make our mission possible.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center">
              <img
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Sarah Johnson"
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-bold">Sarah Johnson</h3>
              <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">Founder & Director</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 max-w-[250px]">
                Animal welfare advocate with 15+ years of shelter experience.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Michael Rivera"
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-bold">Michael Rivera</h3>
              <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">Veterinary Director</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 max-w-[250px]">
                Licensed veterinarian specializing in shelter medicine.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Emily Chen"
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-bold">Emily Chen</h3>
              <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">Adoption Coordinator</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 max-w-[250px]">
                Passionate about matching pets with their perfect families.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="David Williams"
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-bold">David Williams</h3>
              <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">Community Outreach</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 max-w-[250px]">
                Builds partnerships with shelters and community organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-purple-50 dark:bg-purple-950/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Join Our Mission</h2>
            <p className="max-w-[700px] text-gray-500 dark:text-gray-400 mb-6">
              Whether you're looking to adopt, volunteer, foster, or donate, there are many ways to support our work and make a difference in animals' lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/pets">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Adopt a Pet
                </Button>
              </Link>
              <Link href="/volunteer">
                <Button variant="outline">
                  Volunteer
                </Button>
              </Link>
              <Link href="/donate">
                <Button variant="outline">
                  Donate
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}