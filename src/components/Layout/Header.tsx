// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header: React.FC = () => (
//   <header className="bg-white shadow-md">
//     <nav className="container mx-auto px-6 py-3">
//       <div className="flex justify-between items-center">
//         <Link to="/" className="text-xl font-bold text-gray-800">phyra.ai</Link>
//         {/* <div>
//           <Link to="/" className="text-gray-800 hover:text-blue-500 px-3 py-2">Home</Link>
//           <Link to="/about" className="text-gray-800 hover:text-blue-500 px-3 py-2">About</Link>
//           <Link to="/contact" className="text-gray-800 hover:text-blue-500 px-3 py-2">Contact</Link>
//         </div> */}
//       </div>
//     </nav>
//   </header>
// );

// export default Header;

// src/components/Layout/Header.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Header: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsProfileDropdownOpen(false);
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <Link to="/" className="text-xl font-bold text-gray-800">
            Phyra.ai
          </Link>

          {/* Navigation Links */}
{/*           <div className="hidden md:flex items-center space-x-4">
{/*             <Link to="/" className="text-gray-800 hover:text-blue-500 px-3 py-2">
              Home
            </Link>
            <Link to="/blog" className="text-gray-800 hover:text-blue-500 px-3 py-2">
              Blog
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-blue-500 px-3 py-2">
              About
            </Link> */}

            {/* Auth Buttons */}
            {!isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <Link 
                  to="/login"
                  className="px-4 py-2 text-gray-800 hover:bg-gray-100 rounded"
                >
                  Login
                </Link>
                <Link 
                  to="/signup"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="flex items-center space-x-1 px-3 py-2 text-gray-800 hover:text-blue-500"
                >
                  <span>My Account</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Profile Dropdown */}
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-50">
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileDropdownOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileDropdownOpen(false)}
                    >
                      Profile Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div> */}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-800">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
