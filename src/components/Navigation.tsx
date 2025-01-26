// src/components/Navigation.tsx
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full p-4">
            {/* Hamburger Menu Button - Only visible on mobile */}
            <button
                className="md:hidden absolute left-4 top-4 text-sage-green z-20 text-7xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? '✕' : '☰'}
            </button>

            {/* Navigation Links */}
            <ul className={`
                flex flex-col md:flex-row 
                md:justify-start md:space-x-8 md:space-y-0
                space-y-4 
                max-w-7xl mx-auto px-4 
                font-altivo
                ${isMenuOpen ? 'absolute inset-0 bg-white pt-16 px-8' : 'hidden md:flex'}
            `}>
                <li>
                    <NavLink
                        to="/"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            `text-sage-green hover:text-green-800 ${isActive ? 'text-green-800 font-["Altivo-Bold"]' : ''}`
                        }
                    >
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/schedule"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            `text-sage-green hover:text-green-800 ${isActive ? 'text-green-800 font-["Altivo-Bold"]' : ''}`
                        }
                    >
                        SCHEDULE
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/hotels"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            `text-sage-green hover:text-green-800 ${isActive ? 'text-green-800 font-["Altivo-Bold"]' : ''}`
                        }
                    >
                        HOTELS
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/minneapolis"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            `text-sage-green hover:text-green-800 ${isActive ? 'text-green-800 font-["Altivo-Bold"]' : ''}`
                        }
                    >
                        MINNEAPOLIS
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/registry"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            `text-sage-green hover:text-green-800 ${isActive ? 'text-green-800 font-["Altivo-Bold"]' : ''}`
                        }
                    >
                        REGISTRY
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/mystery"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            `text-sage-green hover:text-green-800 ${isActive ? 'text-green-800 font-["Altivo-Bold"]' : ''}`
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