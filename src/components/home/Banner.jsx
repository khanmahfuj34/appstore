export default function Banner() {
  return (
    <div className="text-center py-12 sm:py-16 bg-gray-100 dark:bg-gray-900 px-4 transition-colors duration-200">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-white">
        We Build <span className="text-purple-500">Productive</span> Apps
      </h1>

      <p className="mt-3 sm:mt-4 text-gray-500 dark:text-gray-300 text-sm sm:text-base">
        Smart apps to simplify your life
      </p>

      <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:space-x-4">
        <a 
          href="https://play.google.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-linear-to-r from-green-400 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-500 hover:to-green-700 transition transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
        >
          <span className="text-xl">▶️</span>
          Google Play
        </a>
        <a 
          href="https://apps.apple.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-linear-to-r from-gray-800 to-black text-white px-6 py-3 rounded-lg font-semibold hover:from-gray-900 hover:to-gray-800 transition transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
        >
          <span className="text-xl">🍎</span>
          App Store
        </a>
      </div>
    </div>
  );
}
