import Banner from "../components/home/Banner";
import Stats from "../components/home/Stats";
import TrendingApps from "../components/home/TrendingApps";
import RecentlyViewed from "../components/home/RecentlyViewed";
import Recommended from "../components/home/Recommended";
import Breadcrumb from "../components/shared/Breadcrumb";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-200 min-h-screen">
      <Breadcrumb />
      <Banner />
      <Stats />
      <TrendingApps />
      <RecentlyViewed />
      <Recommended />
    </div>
  );
}