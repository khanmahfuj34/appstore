export default function Banner() {
  return (
    <div className="text-center py-16 bg-gray-100">
      <h1 className="text-4xl font-bold">
        We Build <span className="text-purple-500">Productive</span> Apps
      </h1>

      <p className="mt-4 text-gray-500">
        Smart apps to simplify your life
      </p>

      <div className="mt-6 space-x-4">
        <button className="border px-4 py-2 rounded">Google Play</button>
        <button className="border px-4 py-2 rounded">App Store</button>
      </div>
    </div>
  );
}
