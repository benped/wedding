// src/components/Navigation.tsx
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full p-4">
            {/* Hamburger Menu Button - Only visible on mobile */}
            <button
                className="md:hidden fixed right-4 top-4 text-sage-green z-20 text-4xl p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? '✕' : '☰'}
            </button>

            {/* Navigation Links */}
            <ul className={`
                flex flex-col md:flex-row 
                md:justify-start md:space-x-8 md:space-y-0
                space-y-6 
                max-w-7xl mx-auto px-4 
                font-['Open Sans']
                ${isMenuOpen ? 'fixed inset-0 bg-white pt-20 px-8 z-10' : 'hidden md:flex'}
            `}>
                <li>
                    <NavLink
                        to="/"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            `text-sage-green hover:text-green-800 ${isActive ? 'text-green-800 font-bold' : ''}`
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
                            `text-sage-green hover:text-green-800 ${isActive ? 'text-green-800 font-bold' : ''}`
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
                            `text-sage-green hover:text-green-800 ${isActive ? 'text-green-800 font-bold' : ''}`
                        }
                    >
                        HOTELS
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/transportation"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            `text-sage-green hover:text-green-800 ${isActive ? 'text-green-800 font-bold' : ''}`
                        }
                    >
                        TRANSPORTATION
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/reception-map"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            `text-sage-green hover:text-green-800 ${isActive ? 'text-green-800 font-bold' : ''}`
                        }
                    >
                        RECEPTION MAP
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/minneapolis"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            `text-sage-green hover:text-green-800 ${isActive ? 'text-green-800 font-bold' : ''}`
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
                            `text-sage-green hover:text-green-800 ${isActive ? 'text-green-800 font-bold' : ''}`
                        }
                    >
                        REGISTRY
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/faq"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            `text-sage-green hover:text-green-800 ${isActive ? 'text-green-800 font-bold' : ''}`
                        }
                    >
                        FAQ
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;