import { QuoteIcon } from "lucide-react";

export function Testimonials() {
  return (
    <section className="bg-white dark:bg-gray-950 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/20 px-3 py-1 text-sm text-purple-600 dark:text-purple-400">
            Success Stories
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
            Happy Families Share Their Joy
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Read heartwarming stories from families who found their perfect companions through our adoption program.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* First Testimonial */}
          <div className="group relative">
            {/* Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-purple-400/20 rounded-xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            
            <div className="relative p-6 bg-white dark:bg-gray-900 rounded-xl border border-purple-100 dark:border-purple-900/50 shadow-lg transition-all duration-300 group-hover:scale-[1.02] group-hover:border-purple-200 dark:group-hover:border-purple-700/50">
              <QuoteIcon className="h-10 w-10 text-purple-600/20 dark:text-purple-400/20 mb-4" />
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "Adopting Max was the best decision we ever made. The process was so smooth, and the staff was incredibly helpful in matching us with the perfect dog for our family."
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                  alt="Sarah Thompson"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-purple-600 dark:text-purple-400">Sarah Thompson</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Adopted Max, Golden Retriever</p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Testimonial */}
          <div className="group relative">
            {/* Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-purple-400/20 rounded-xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            
            <div className="relative p-6 bg-white dark:bg-gray-900 rounded-xl border border-purple-100 dark:border-purple-900/50 shadow-lg transition-all duration-300 group-hover:scale-[1.02] group-hover:border-purple-200 dark:group-hover:border-purple-700/50">
              <QuoteIcon className="h-10 w-10 text-purple-600/20 dark:text-purple-400/20 mb-4" />
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "Luna was so shy when we first met her, but PetPals gave us all the information and support we needed to help her adjust. Now she's the most loving cat and rules our home!"
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
                  alt="Michael Johnson"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-purple-600 dark:text-purple-400">Michael Johnson</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Adopted Luna, Calico Cat</p>
                </div>
              </div>
            </div>
          </div>

          {/* Third Testimonial */}
          <div className="group relative">
            {/* Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-purple-400/20 rounded-xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            
            <div className="relative p-6 bg-white dark:bg-gray-900 rounded-xl border border-purple-100 dark:border-purple-900/50 shadow-lg transition-all duration-300 group-hover:scale-[1.02] group-hover:border-purple-200 dark:group-hover:border-purple-700/50">
              <QuoteIcon className="h-10 w-10 text-purple-600/20 dark:text-purple-400/20 mb-4" />
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "We were nervous about adopting an older dog, but Bella has been such a blessing. She was already house-trained and so gentle with our kids. Thank you PetPals for connecting us!"
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                  alt="Jennifer Davis"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-purple-600 dark:text-purple-400">Jennifer Davis</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Adopted Bella, Beagle Mix</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}