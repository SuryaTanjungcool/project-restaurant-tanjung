import React from 'react';
import Coklat from "../../assets/png/Coklat.png";
import Kiwi from "../../assets/png/Kiwi.png";
import Oreo from "../../assets/png/Oreo.png";
import Raspberry from "../../assets/png/Raspberry.png";
import PrimaryButton from '../Shared/PrimaryButton';
import Leaf from "../../assets/png/Leaf.png";

const Banner = () => {
  return ( 
    <>
    <div className="container py-14 relative">
      <div className='relative z-10'>
         {/* Title Section */}
      <h1  data-aos="fade-up"
              data-aos-delay="300" className="py-8 tracking-wider text-2xl font-semibold text-dark text-center">
        Taste the Healthy Difference
      </h1>

      {/* Content Section 1 */}
      <div  className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
        <div  data-aos="fade-up"
              data-aos-delay="300">
          <p className="text-base leading-relaxed">
            We know that{' '}
            <span className="text-primary">
              time is the greatest value in the modern world.
            </span>{' '}
            Our healthy meal plan delivery service in Miami is the answer for those who want to eat healthily while saving time for buying and preparing delicious, healthy meals.
          </p>
        </div>

        <div>
          <p className="text-base leading-relaxed">
            We ensure that{' '}
            <span className="text-primary">
              every meal is crafted with fresh, high-quality ingredients
            </span>{' '}
            to deliver maximum flavor and nutrition. Explore our wide range of options for a balanced and happy lifestyle.
          </p>
        </div>
      </div>

      {/* Content Section 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
        <div>
          <p className="text-base leading-relaxed">
            We know that{' '}
            <span className="text-primary">
              time is the greatest value in the modern world.
            </span>{' '}
            Our healthy meal plan delivery service in Miami is the answer for those who want to eat healthily while saving time for buying and preparing delicious, healthy meals.
          </p>
        </div>

        <div>
          <p className="text-base leading-relaxed">
            We ensure that{' '}
            <span className="text-primary">
              every meal is crafted with fresh, high-quality ingredients
            </span>{' '}
            to deliver maximum flavor and nutrition. Explore our wide range of options for a balanced and happy lifestyle.
          </p>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex justify-center mt-10 sm:mt-14">
        <PrimaryButton />
      </div>

      {/* Decorative Images */}
      <div data-aos=" fade-right">
      <div className="absolute top-5 left-16">
        <img src={Leaf} alt="Leaf decoration" className="max-w-[160px]" />
      </div>
      <div data-aos="fade-left" className="absolute -bottom-16 -left-16 sm:bottom-0 sm:left-0">
        <img src={Coklat} alt="Coklat" className="max-w-[280px]" />
      </div>
      <div data-aos="fade-right" className="absolute top-10 right-16 sm:right-20">
        <img src={Raspberry} alt="Raspberry" className="max-w-[200px]" />
      </div>
      <div data-aos="fade-left" className="hidden sm:block absolute bottom-0 right-0">
        <img src={Kiwi} alt="Kiwi" className="max-w-[200px]" />
      </div>
      <div data-aos="fade"
       className="absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2">
        <img src={Oreo} alt="Oreo" className="max-w-[180px]" />
      </div>
      </div>
    
    </div>
      </div>
     
    </>
  );
};

export default Banner;
