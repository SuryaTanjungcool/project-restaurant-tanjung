import React from 'react';
import HeroImg from "../../assets/hero.png";
import HeroBG from "../../assets/heroBg.png";
import PrimaryButton from '../Shared/PrimaryButton';

const BgStyle = {
    backgroundImage: `url(${HeroBG})`, // Gunakan template literal
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width:"100%",
    height:"100%",
  };
  
const Hero = () => {
  return (
    <>
      <div style={BgStyle} className="relative z-[-1]">
        <div className="container py-16 sm:py-0">
          {/* Wrapper menggunakan flex untuk align teks dan gambar */}
          <div className="flex flex-col sm:flex-row items-center justify-between min-h-[600px]">
            {/* text-content section */}
            <div className="space-y-7 text-dark order-2 sm:order-1 max-w-lg">
              <h1 data-aos="fade-up" className="text-5xl">
                Fresh & Healthy Meal Plan{' '}
                <span className="text-secondary font-cursive text-7xl">delivery</span> in Miami
              </h1>
              <p data-aos="fade-up"
              data-aos-delay="300" className="lg:pr-64">
                Delicious Meals Delivered to your Door From $132.95 per week
              </p>

              {/* button section */}
              <div>
                <PrimaryButton/>
              </div>
            </div>
            {/* image section */}
            <div  data-aos="fade-up"
              data-aos-delay="300" className="relative z-30 order-1 sm:order-2">
              <img
                src={HeroImg}
                alt ="Healthy Meal"
                className="w-full sm:scale-125 sm:translate-x-16"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
