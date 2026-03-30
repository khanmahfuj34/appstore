import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function AppCard({ app }) {
  const handleInstall = (e) => {
    e.preventDefault();
    toast.success(`${app.title} installed successfully!`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <Link to={`/apps/${app.id}`} className="no-underline">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col h-full">
        {/* Icon Container with Gradient Background */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center min-h-40">
          <img 
            src={app.image} 
            alt={app.title} 
            className="w-24 h-24 object-contain drop-shadow-lg hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <h3 className="font-bold text-lg text-gray-900 truncate">{app.title}</h3>
          <p className="text-gray-500 text-sm font-medium">{app.companyName}</p>
          
          <p className="text-gray-600 text-sm my-3 line-clamp-2 flex-grow">{app.description}</p>
          
          <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-lg">★</span>
              <span className="font-bold text-gray-900">{app.ratingAvg}</span>
              <span className="text-gray-400 text-xs">({(app.reviews/1000).toFixed(0)}K)</span>
            </div>
            <span className="text-gray-500 text-xs font-semibold bg-gray-100 px-2 py-1 rounded">{app.size}MB</span>
          </div>
          
          <button 
            onClick={handleInstall}
            className="w-full mt-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
          >
            Install
          </button>
        </div>
      </div>
    </Link>
  );
}
