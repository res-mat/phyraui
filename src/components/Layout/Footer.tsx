import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white">
    <div className="container mx-auto px-6 py-4">
      <div className="flex justify-between items-center">
        <p>&copy; 2024 Phyra.ai. All rights reserved.</p>
        <div>
          <a href="https://twitter.com/phyraai" className="text-white hover:text-blue-400 px-3 py-2">Twitter</a>
          <a href="https://linkedin.com/company/phyraai" className="text-white hover:text-blue-400 px-3 py-2">LinkedIn</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;