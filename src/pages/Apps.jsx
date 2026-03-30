import { useState, useEffect, useCallback } from "react";
import apps from "../data/apps.json";
import AppCard from "../components/shared/AppCard";
import SkeletonCard from "../components/shared/SkeletonCard";
import Breadcrumb from "../components/shared/Breadcrumb";
import { debounce } from "../utils/debounce";

export default function Apps() {
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearch = useCallback(
    debounce((value) => {
      setIsSearching(false);
    }, 500),
    []
  );

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setIsSearching(true);
    debouncedSearch(e.target.value);
  };

  const filtered = apps.filter(app =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-200 min-h-screen">
      <Breadcrumb />
      <div className="max-w-7xl mx-auto py-6 sm:py-10 px-3 sm:px-4">
        <div className="flex flex-col gap-4 mb-6">
          <p className="text-sm sm:text-base font-semibold dark:text-white">{filtered.length} Apps Found</p>

          <div className="relative w-full">
            <input
              placeholder="Search apps..."
              className="w-full border border-gray-300 px-3 sm:px-4 py-2 rounded-lg focus:outline-none focus:border-purple-500 dark:bg-gray-800 dark:text-white dark:border-gray-700 text-sm sm:text-base"
              onChange={handleSearch}
              value={search}
            />
            {isSearching && (
              <div className="absolute right-3 top-2">
                <div className="w-6 h-6 border-2 border-gray-300 border-t-purple-500 rounded-full animate-spin"></div>
              </div>
            )}
          </div>
        </div>

        {filtered.length === 0 && <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-300">No App Found</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-4 md:gap-6">
          {isSearching ? (
            Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
          ) : (
            filtered.map(app => (
              <AppCard key={app.id} app={app} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
