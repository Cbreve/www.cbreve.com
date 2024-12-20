import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-[#995a7d]" />
            <span className="ml-2 text-xl font-bold text-[#995a7d]">CBreve</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-[#995a7d]">Home</a>
            <a href="#about" className="text-gray-700 hover:text-[#995a7d]">About</a>
            <a href="#services" className="text-gray-700 hover:text-[#995a7d]">Services</a>
            <a href="#team" className="text-gray-700 hover:text-[#995a7d]">Team</a>
            <a href="#contact" className="text-gray-700 hover:text-[#995a7d]">Contact</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-[#995a7d]">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-[#995a7d]">About</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-[#995a7d]">Services</a>
            <a href="#team" className="block px-3 py-2 text-gray-700 hover:text-[#995a7d]">Team</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-[#995a7d]">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;