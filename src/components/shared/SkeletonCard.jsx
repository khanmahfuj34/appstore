export default function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900 overflow-hidden animate-pulse flex flex-col h-full">
      <div className="min-h-32 sm:min-h-40 bg-gray-200 dark:bg-gray-700"></div>
      <div className="p-4 sm:p-5 flex flex-col grow space-y-3 sm:space-y-4">
        <div className="h-4 sm:h-5 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
        <div className="h-3 sm:h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-3 sm:h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
        <div className="flex justify-between items-center mt-auto pt-2 sm:pt-3 border-t border-gray-100 dark:border-gray-700">
          <div className="h-3 sm:h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4"></div>
          <div className="h-4 sm:h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/5"></div>
        </div>
      </div>
    </div>
  );
}
