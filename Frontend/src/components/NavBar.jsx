import { NavLink } from "react-router-dom";
import { HomeIcon, BookOpenIcon, ArrowUpTrayIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

const NAV_ITEMS = [
  { path: "/", label: "Home", icon: HomeIcon },
  { path: "/modeldetails", label: "Details", icon: BookOpenIcon },
  { path: "/upload", label: "Upload", icon: ArrowUpTrayIcon },
  { path: "/About", label: "About", icon: InformationCircleIcon },
];

function NavBar() {
  return (
    <nav className="fixed  bottom-5 left-1/2 transform -translate-x-1/2 bg-white border-2 rounded-full border-white/80 shadow-lg z-50">
      <ul className="flex flex-row items-center p-2 space-x-4">
        {NAV_ITEMS.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 rounded-full text-base font-medium transition-all duration-300 ease-in-out
                ${isActive 
                  ? "bg-[#9f10fe] text-black shadow-md" 
                  : "text-black hover:bg-white/20 hover:text-black"}`
              }
              aria-label={item.label}
            >
              <item.icon className="h-6 w-6 mr-2 text-black" />
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;