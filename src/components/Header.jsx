import React, { useState } from "react";
import Icon from "./Icon";

const Header = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", key: "home" },
    { name: "Troubleshooting", key: "troubleshooting" },
    { name: "Common Issues", key: "common-issues" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => onNavigate("home")}
          className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition"
        >
          Fixora
        </button>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.key}
              onClick={() => onNavigate(link.key)}
              className={`transition ${
                currentPage === link.key
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
        >
          <Icon path="M4 6h16M4 12h16m-7 6h7" />
        </button>
      </div>
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden px-6 pb-4`}>
        {navLinks.map((link) => (
          <button
            key={link.key}
            onClick={() => {
              onNavigate(link.key);
              setIsMenuOpen(false);
            }}
            className={`block py-2 w-full text-left transition ${
              currentPage === link.key
                ? "text-blue-600 font-semibold"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            {link.name}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
