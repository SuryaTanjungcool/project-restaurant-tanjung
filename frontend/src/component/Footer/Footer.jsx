import React from "react";
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5"; // Corrected import statement
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="text-white mt-20">
        <div data-aos="fade-down" className="container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl">
          <h1 className="py-18 text-3xl font-bold text-yellow">Contact Us</h1>

          {/* Grid section */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6"
          >
            {/* Address Section */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <IoLocationSharp className="text-5xl" />
                <p>
                  Semarang Barat Jl.Puspojonlo Selatan <br />
                  Bojongsalaman
                </p>
              </div>
            </div>

            {/* Emails Section */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <MdEmail className="text-5xl" />
              </div>
              <p>info@goodfood.com</p>
              <p>hr@goodfood.com</p>
            </div>

            {/* Phone Numbers Section */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <FaPhone className="text-5xl" />
              </div>
              <p>084536278191 - Sales and Service</p>
              <p>085654378213 - Hiring Queries</p>
              <p>081342156732 - WhatsApp</p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex justify-between p-4 items-center">
          <p>© 2024 SMG, All rights reserved</p>
          <div className="flex items-center gap-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
