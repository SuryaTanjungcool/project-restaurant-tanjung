import React from "react";
import { FaArrowRight } from "react-icons/fa";

const PrimaryButton = () => {
  return (
    <div className="flex items-center">
      <button className="bg-primary text-white flex items-center justify-center px-5 py-2 rounded-md group relative">
        <span className="mr-2">Choose Your Meal Plan</span>
        {/* Ikon Panah */}
        <FaArrowRight className="transform group-hover:translate-x-2 transition-transform duration-200 text-white text-lg" />
      </button>
    </div>
  );
};

export default PrimaryButton;
