import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header className="bg-white shadow-md">
    <nav className="container mx-auto px-6 py-3">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800">phyra.ai</Link>
        {/* <div>
          <Link to="/" className="text-gray-800 hover:text-blue-500 px-3 py-2">Home</Link>
          <Link to="/about" className="text-gray-800 hover:text-blue-500 px-3 py-2">About</Link>
          <Link to="/contact" className="text-gray-800 hover:text-blue-500 px-3 py-2">Contact</Link>
        </div> */}
      </div>
    </nav>
  </header>
);

export default Header;