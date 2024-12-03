import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5'; // Correct icon import

const Popup = ({ showPopup, setshowPopup }) => {
  return (
    <>
      {showPopup && ( // Render popup only when showPopup is true
        <div>
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            {/* Popup content */}
            <div className="flex justify-center items-center h-full">
              <div className="bg-white p-6 rounded-lg">
                <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded-md duration-200 w-[300px]">
                  {/* Header section */}
                  <div>
                    <h1 className="text-2xl font-bold text-dark">Login</h1>
                  </div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer"
                    onClick={() => setshowPopup(false)} // Close the popup
                  />
                </div>
              </div>
              {/* Login form section */}
              <div className="mt-4">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4"
                />
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4"
                />
              </div>
              {/* Login button section */}
              <div className="mt-4">
                <p className="text-center">Or login with</p>
                <div className="flex justify-center space-x-4">
                  <FaFacebook className="text-3xl hover:text-blue-500 duration-200" />
                  <FaGoogle className="text-3xl hover:text-primary duration-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
