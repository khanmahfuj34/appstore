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
        <button className="border border-gray-900 px-4 py-2 rounded hover:bg-gray-200 transition">Google Play</button>
        <button className="border border-gray-900 px-4 py-2 rounded hover:bg-gray-200 transition">App Store</button>
      </div>
    </div>
  );
}
