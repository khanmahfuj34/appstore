import Banner from "../components/home/Banner";
import Stats from "../components/home/Stats";
import TrendingApps from "../components/home/TrendingApps";
import RecentlyViewed from "../components/home/RecentlyViewed";
import Recommended from "../components/home/Recommended";
import Breadcrumb from "../components/shared/Breadcrumb";

export default function Home() {
  return (
    <>
      <Breadcrumb />
      <Banner />
      <Stats />
      <TrendingApps />
      <RecentlyViewed />
      <Recommended />
    </>
  );
}