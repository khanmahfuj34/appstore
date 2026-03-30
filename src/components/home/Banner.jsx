export default function Banner() {
  return (
    <div className="text-center py-12 sm:py-16 bg-gray-100 px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
        We Build <span className="text-purple-500">Productive</span> Apps
      </h1>

      <p className="mt-3 sm:mt-4 text-gray-500 text-sm sm:text-base">
        Smart apps to simplify your life
      </p>

      <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:space-x-4">
        <a 
          href="https://play.google.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="border border-gray-900 px-4 py-2 rounded hover:bg-gray-200 transition cursor-pointer inline-block"
        >
          Google Play
        </a>
        <a 
          href="https://apps.apple.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="border border-gray-900 px-4 py-2 rounded hover:bg-gray-200 transition cursor-pointer inline-block"
        >
          App Store
        </a>
      </div>
    </div>
  );
}
