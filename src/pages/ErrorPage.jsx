export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-10 sm:py-20 px-4 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Oops! Something went wrong</h1>
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8">We encountered an unexpected error.</p>
      <a 
        href="/" 
        className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-colors duration-200"
      >
        Go Back Home
      </a>
    </div>
  );
}
