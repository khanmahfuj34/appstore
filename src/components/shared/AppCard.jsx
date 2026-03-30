import { Link } from "react-router-dom";

export default function AppCard({ app }) {
  return (
    <Link to={`/apps/${app.id}`} className="no-underline">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900 overflow-hidden hover:shadow-2xl dark:hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col h-full">
        {/* Icon Container with Gradient Background */}
        <div className="bg-gradient-to-br from-gray-50 dark:from-gray-700 to-gray-100 dark:to-gray-800 p-6 sm:p-8 flex items-center justify-center min-h-32 sm:min-h-40">
          <img 
            src={app.image} 
            alt={app.title} 
            className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-lg hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="p-4 sm:p-5 flex flex-col flex-grow">
          <h3 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white truncate">{app.title}</h3>
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-medium">{app.companyName}</p>
          
          <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm my-2 sm:my-3 line-clamp-2 flex-grow">{app.description}</p>
          
          <div className="flex justify-between items-center mt-auto pt-2 sm:pt-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="text-yellow-400 text-base sm:text-lg">★</span>
              <span className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">{app.ratingAvg}</span>
              <span className="text-gray-400 dark:text-gray-500 text-xs">({(app.reviews/1000).toFixed(0)}K)</span>
            </div>
            <span className="text-gray-500 dark:text-gray-400 text-xs font-semibold bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{app.size}MB</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
