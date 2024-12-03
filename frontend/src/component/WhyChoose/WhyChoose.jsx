import React from 'react';
import { FaBus } from 'react-icons/fa'; // Import FaBus icon

const WhyChoose = () => {
  return (
    <>
      <div className="py-14 sm:py-48 bg-gray-50">
        {/* Heading Section */}
        <h1 data-aos="fade-up"
              className="py-8 tracking-wider text-2xl font-semibold text-dark text-center">
          Why Choose Us
        </h1>
      </div>

      <div
      data-aos="fade-up" 
       data-aos-delay="300"
        className="grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridAutoRows: "auto",
          gap: "1rem",
        }}
      >
        {/* Card 1 */}
        <div
          className="text-center flex flex-col justify-center items-center gap-2 px-2"
          style={{ gridColumn: "1", gridRow: "1" }}
        >
          <p className="text-dark/70 font-semibold">By Surya Tanjung</p>
          <FaBus className="text-5xl text-primary animate-bus1" />
          <p className="text-sm text-primary">Efficient and Reliable</p>
        </div>

        {/* Card 2 */}
        <div
          className="text-center flex flex-col justify-center items-center gap-2 px-4"
          style={{ gridColumn: "2", gridRow: "2" }}
        >
          <p className="text-dark/70 font-semibold">By Surya Tanjung</p>
          <FaBus className="text-5xl text-secondary animate-bus2" />
          <p className="text-sm text-secondary">Safety First</p>
        </div>

        {/* Card 3 */}
        <div
          className="text-center flex flex-col justify-center items-center gap-2 px-2"
          style={{ gridColumn: "3", gridRow: "1" }}
        >
          <p className="text-dark/70 font-semibold">By Surya Tanjung</p>
          <FaBus className="text-5xl text-primary animate-bus3" />
          <p className="text-sm text-primary">Comfortable Journey</p>
        </div>

        {/* Card 4 */}
        <div
          className="text-center flex flex-col justify-center items-center gap-2 px-2"
          style={{ gridColumn: "4", gridRow: "2" }}
        >
          <p className="text-dark/70 font-semibold">By Surya Tanjung</p>
          <FaBus className="text-5xl text-secondary animate-bus4" />
          <p className="text-sm text-secondary">Trusted Service</p>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
