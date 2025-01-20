import React from 'react';
import HeroImg from "../../assets/hero.png";
import HeroBG from "../../assets/heroBg.png";
import PrimaryButton from '../Shared/PrimaryButton';

const BgStyle = {
  backgroundImage: `url(${HeroBG})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

const Hero = () => {
  return (
    <div style={BgStyle} className="relative z-[-1]">
      <div className="container mx-auto px-6 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between min-h-[650px] space-y-10 sm:space-y-0">
          {/* text-content section */}
          <div className="space-y-6 text-dark max-w-xl text-center sm:text-left px-4 sm:px-0">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-primary"
            >
              Selamat datang di dunia <span className="text-secondary font-cursive">manis</span> & lezat!
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-lg sm:text-xl leading-relaxed text-gray-700"
            >
              Nikmati berbagai dessert istimewa buatan koki bintang 5, dibuat dengan cinta & bahan berkualitas tinggi. 
            </p>
            
            {/* button section */}
            <div className="flex justify-center sm:justify-start">
              <PrimaryButton text="Jelajahi Menu" />
            </div>
          </div>

          {/* image section */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="relative z-30 w-full max-w-[350px] sm:max-w-md lg:max-w-lg shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={HeroImg}
              alt="Dessert Lezat"
              className="w-full h-auto mx-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Hero;
