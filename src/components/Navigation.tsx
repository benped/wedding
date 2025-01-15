// src/components/Navigation.tsx
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="w-full bg-pink-100 p-4">
      <ul className="flex justify-center space-x-8">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-gray-600 hover:text-gray-800 ${isActive ? 'font-bold' : ''}`
            }
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/schedule" 
            className={({ isActive }) => 
              `text-gray-600 hover:text-gray-800 ${isActive ? 'font-bold' : ''}`
            }
          >
            SCHEDULE
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/hotels" 
            className={({ isActive }) => 
              `text-gray-600 hover:text-gray-800 ${isActive ? 'font-bold' : ''}`
            }
          >
            HOTELS
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/minneapolis" 
            className={({ isActive }) => 
              `text-gray-600 hover:text-gray-800 ${isActive ? 'font-bold' : ''}`
            }
          >
            MINNEAPOLIS
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/registry" 
            className={({ isActive }) => 
              `text-gray-600 hover:text-gray-800 ${isActive ? 'font-bold' : ''}`
            }
          >
            REGISTRY
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/mystery" 
            className={({ isActive }) => 
              `text-gray-600 hover:text-gray-800 ${isActive ? 'font-bold' : ''}`
            }
          >
            MYSTERY
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;