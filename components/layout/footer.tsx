import Link from "next/link";
import { PawPrint as Paw, Heart, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center justify-items-center">
          {/* Brand Section */}
          <div className="flex flex-col items-center space-y-4 md:col-span-4 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <Paw className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">PetPals</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs text-center">
              Connecting pets with loving families. We believe every pet deserves a forever home.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4 w-full">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-foreground">Home</Link></li>
              <li><Link href="/pets" className="text-sm text-muted-foreground hover:text-foreground">Adopt a Pet</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          {/* Pet Types Section */}
          <div className="space-y-4 w-full">
            <h3 className="text-sm font-semibold">Pet Types</h3>
            <ul className="space-y-2">
              <li><Link href="/pets/dogs" className="text-sm text-muted-foreground hover:text-foreground">Dogs</Link></li>
              <li><Link href="/pets/cats" className="text-sm text-muted-foreground hover:text-foreground">Cats</Link></li>
              <li><Link href="/pets/small-pets" className="text-sm text-muted-foreground hover:text-foreground">Small Pets</Link></li>
              <li><Link href="/breed-info" className="text-sm text-muted-foreground hover:text-foreground">Breed Information</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4 w-full">
            <h3 className="text-sm font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">123 Adoption Street</li>
              <li className="text-sm text-muted-foreground">Pet City, PC 12345</li>
              <li><a href="mailto:contact@petpals.com" className="text-sm text-muted-foreground hover:text-foreground">contact@petpals.com</a></li>
              <li><a href="tel:(123)456-7890" className="text-sm text-muted-foreground hover:text-foreground">(123) 456-7890</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">© 2025 PetPals. All rights reserved.</p>
            <div className="flex justify-center space-x-4">
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link>
              <Link href="/accessibility" className="text-sm text-muted-foreground hover:text-foreground">Accessibility</Link>
            </div>
            <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>for all pets</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}