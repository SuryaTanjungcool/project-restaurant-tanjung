import React, { useState } from "react";
import { FaCaretDown, FaUser } from "react-icons/fa";

// Data Links
const NavLinks = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "About", link: "/#" },
  { id: 3, name: "Contact", link: "/#" },
];

const DropdownLinks = [
  { id: 1, name: "Vegetables", link: "/#" },
  { id: 2, name: "Fruits", link: "/#" },
  { id: 3, name: "Grains", link: "/#" },
];

// Navbar Component
const Navbar = ({ handlePopup }) => {
  return (
    <div data-aos="fade" className="bg-white shadow-md">
      <div className="container flex justify-between py-4 sm:py-3">
        {/* Logo Section */}
        <div className="font-bold">Logo</div>

        {/* Navigation Section */}
        <ul className="flex items-center gap-10">
          {NavLinks.map(({ id, name, link }) => (
            <li key={id}>
              <a
                href={link}
                className="inline-block hover:text-primary text-xl font-semibold"
              >
                {name}
              </a>
            </li>
          ))}

          {/* Dropdown Section */}
          <li className="hidden sm:block cursor-pointer group relative">
            <div className="inline-block text-xl font-semibold">
              <div className="flex items-center gap-2 py-2 hover:text-primary">
                Dropdown
                <FaCaretDown className="group-hover:rotate-180 duration-300" />
              </div>
            </div>
            {/* Dropdown Menu */}
            <div
              className="absolute z-50 hidden group-hover:block w-[200px] bg-white text-black shadow-md p-2"
            >
              <ul>
                {DropdownLinks.map(({ id, name, link }) => (
                  <li key={id}>
                    <a
                      href={link}
                      className="block w-full rounded-md p-2 hover:bg-primary/20 font-semibold"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {/* Login Button Section */}
          <li>
            <button
              onClick={handlePopup}
              className="flex items-center gap-2 bg-secondary text-xl h-[40px] text-white px-2 lg:px-5 mdpy-2 hover:scale-105 duration-300"
            >
              <FaUser />
              My Account
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

// App Component
const App = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handlePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      <Navbar handlePopup={handlePopup} />
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Popup Content</h2>
            <button
              onClick={handlePopup}
              className="bg-secondary text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
