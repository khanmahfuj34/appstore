export default function Error404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-10 sm:py-20 px-4 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8">Oops! Page Not Found</p>
      <a 
        href="/" 
        className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-colors duration-200"
      >
        Go Back Home
      </a>
    </div>
  );
}