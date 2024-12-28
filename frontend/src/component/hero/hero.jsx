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
      <div className="container mx-auto px-6 py-10 sm:py-8">
        <div className="flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between min-h-[600px] space-y-8 sm:space-y-0">
          {/* text-content section */}
          <div className="space-y-5 text-dark max-w-lg text-center sm:text-left px-4 sm:px-0">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
            >
              Fresh & Healthy Meal Plan{' '}
              <span className="text-secondary font-cursive text-4xl sm:text-5xl md:text-6xl">
                delivery
              </span>{' '}
              in Miami
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-base sm:text-lg leading-relaxed"
            >
              Delicious Meals Delivered to your Door From $132.95 per week
            </p>

            {/* button section */}
            <div className="flex justify-center sm:justify-start">
              <PrimaryButton />
            </div>
          </div>

          {/* image section */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="relative z-30 w-full max-w-[300px] sm:max-w-md lg:max-w-lg"
          >
            <img
              src={HeroImg}
              alt="Healthy Meal"
              className="w-full h-auto mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
