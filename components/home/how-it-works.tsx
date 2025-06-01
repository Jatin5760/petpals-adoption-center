import { Search, Heart, FileCheck, Home } from "lucide-react";

export function HowItWorks() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-10">
          <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/20 px-3 py-1 text-sm text-purple-700 dark:text-purple-300">
            Simple Process
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How Adoption Works
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            We've made the adoption process simple and straightforward to help connect you with your new best friend.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="group relative flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-gradient-to-b hover:from-purple-500/5 hover:to-transparent">
            <div className="relative mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/20 transition-colors group-hover:bg-purple-200 dark:group-hover:bg-purple-800/30">
                <Search className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white ring-2 ring-white dark:ring-gray-800">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Browse Pets</h3>
            <p className="text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
              Search through our available pets and filter by type, breed, age, and location to find your match.
            </p>
            <div className="absolute inset-0 rounded-xl transition-opacity group-hover:opacity-100 opacity-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 blur-xl pointer-events-none"></div>
          </div>
          <div className="group relative flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-gradient-to-b hover:from-teal-500/5 hover:to-transparent">
            <div className="relative mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/20 transition-colors group-hover:bg-teal-200 dark:group-hover:bg-teal-800/30">
                <Heart className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-teal-600 text-xs font-bold text-white ring-2 ring-white dark:ring-gray-800">2</span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Submit Application</h3>
            <p className="text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
              Fill out our adoption application to express your interest in a specific animal.
            </p>
            <div className="absolute inset-0 rounded-xl transition-opacity group-hover:opacity-100 opacity-0 bg-gradient-to-r from-teal-500/10 via-transparent to-emerald-500/10 blur-xl pointer-events-none"></div>
          </div>
          <div className="group relative flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-gradient-to-b hover:from-blue-500/5 hover:to-transparent">
            <div className="relative mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20 transition-colors group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30">
                <FileCheck className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white ring-2 ring-white dark:ring-gray-800">3</span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Approval Process</h3>
            <p className="text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
              Our team reviews your application and conducts a brief interview to ensure a good match.
            </p>
            <div className="absolute inset-0 rounded-xl transition-opacity group-hover:opacity-100 opacity-0 bg-gradient-to-r from-blue-500/10 via-transparent to-indigo-500/10 blur-xl pointer-events-none"></div>
          </div>
          <div className="group relative flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-gradient-to-b hover:from-orange-500/5 hover:to-transparent">
            <div className="relative mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/20 transition-colors group-hover:bg-orange-200 dark:group-hover:bg-orange-800/30">
                <Home className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-orange-600 text-xs font-bold text-white ring-2 ring-white dark:ring-gray-800">4</span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">Welcome Home</h3>
            <p className="text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
              Complete the adoption paperwork, pay the adoption fee, and welcome your new pet home!
            </p>
            <div className="absolute inset-0 rounded-xl transition-opacity group-hover:opacity-100 opacity-0 bg-gradient-to-r from-orange-500/10 via-transparent to-red-500/10 blur-xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}