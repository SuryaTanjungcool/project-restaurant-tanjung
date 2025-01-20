import React from 'react';
import Hero from './Hero';
import About from './About';
import Banner from './Banner';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="mt-16">
        <About />
      </section>

      {/* Banner Section */}
      <section id="banner" className="mt-16">
        <Banner />
      </section>
    </div>
  );
};

export default HomePage;
