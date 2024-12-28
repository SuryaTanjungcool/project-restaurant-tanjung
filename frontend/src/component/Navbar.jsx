import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Data Links
const NavLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Produk", link: "/banner" },
];

// Navbar Component
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State untuk toggle menu
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    const isConfirmed = window.confirm("Apakah Anda yakin ingin log out?");
    if (isConfirmed) {
      navigate("/Register"); // Redirect to the login page
    }
  };

  return (
    <div data-aos="fade" className="bg-white shadow-md dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-3">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="font-bold text-xl text-black dark:text-white">List</div>

          {/* Hamburger for Mobile */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-2xl text-black dark:text-white"
            >
              <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
            </button>
          </div>

          {/* Navigation Section */}
          <ul
            className={`sm:flex items-center gap-10 space-x-8 ${
              isMobileMenuOpen ? "block absolute bg-white shadow-lg top-full left-0 w-full p-4 sm:p-0 sm:relative sm:flex" : "hidden sm:flex"
            }`}
          >
            {NavLinks.map(({ id, name, link }) => (
              <li key={id}>
                <a
                  href={link}
                  className="inline-block hover:text-primary text-xl font-semibold text-black dark:text-white"
                >
                  {name}
                </a>
              </li>
            ))}

            {/* Admin Account Button Section */}
            <li>
              <AccountAdminButton />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Account Admin Button
const AccountAdminButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/AkunLogin"); // Navigate to the AdminAccount page
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 bg-secondary text-xl h-[40px] text-white px-2 lg:px-5 py-2 hover:scale-105 duration-300"
    >
      <FaUser />
      Account Admin
    </button>
  );
};

export default Navbar;
