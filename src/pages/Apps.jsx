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
    <>
      <Breadcrumb />
      <div className="max-w-7xl mx-auto py-10 px-4">
        <div className="flex flex-col sm:flex-row sm:justify-between mb-6 gap-4">
          <p className="font-semibold">{filtered.length} Apps Found</p>

          <div className="relative">
            <input
              placeholder="Search"
              className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-purple-500 w-full sm:w-64"
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

        {filtered.length === 0 && <p className="text-center text-gray-600">No App Found</p>}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {isSearching ? (
            Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
          ) : (
            filtered.map(app => (
              <AppCard key={app.id} app={app} />
            ))
          )}
        </div>
      </div>
    </>
  );
}