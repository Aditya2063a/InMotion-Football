import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md border-2 border-white/80 rounded-2xl shadow-lg z-50 w-[calc(100%-2rem)] max-w-5xl mx-auto">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Tagline */}
          <div className="flex flex-col">
            <Link
              to="/"
              className="text-2xl font-extrabold tracking-tight uppercase text-black hover:scale-105 transition-transform duration-300"
            >
              InMotion Football
            </Link>
            <span className="text-xs text-gray-600">Analyze Matches Like a Pro</span>
          </div>

          {/* Action Button */}
          <Link
            to="/upload"
            className="px-4 py-2 bg-[#9f10fe] text-white rounded-full font-medium uppercase tracking-wide hover:bg-[#b87ddf] hover:scale-105 transition-all duration-300 shadow-md"
          >
            Analyze Now
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;