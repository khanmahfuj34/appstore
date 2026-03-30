export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-950 transition-colors duration-200">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-gray-200 dark:border-gray-800 border-t-purple-500 dark:border-t-purple-500 rounded-full animate-spin"></div>
        
        {/* Loading Text */}
        <div className="flex gap-1">
          <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0s" }}></span>
          <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
          <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 font-semibold text-sm sm:text-base">Loading...</p>
      </div>
    </div>
  );
}

