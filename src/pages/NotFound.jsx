import { Link } from "react-router-dom";
import { FaUnlink, FaArrowLeft } from "react-icons/fa";

function NotFound() {
  return (
    <div className="w-full h-[calc(100vh-80px)] flex flex-col justify-center items-center px-4 text-center">
      
      {/* Icon / Visual */}
      <div className="bg-red-50 p-6 rounded-full mb-6 animate-pulse">
        <FaUnlink className="text-red-500 text-6xl md:text-7xl" />
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-2">
        404
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
        Oops! You&apos;ve gone off-chain.
      </h2>

      {/* Subtext */}
      <p className="text-gray-500 max-w-md mx-auto mb-8 text-sm md:text-base">
        The block you are looking for does not exist or has been moved. 
        Let&apos;s get you back to the main network.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/"
          className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors"
        >
          <FaArrowLeft /> Back to Home
        </Link>
        
        <Link
          to="/featured"
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 hover:text-black transition-colors"
        >
          View Markets
        </Link>
      </div>
      
    </div>
  );
}

export default NotFound;