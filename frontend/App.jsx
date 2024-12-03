import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom"; // Tambahkan impor BrowserRouter
import Navbar from "./src/component/Navbar.jsx";
import Banner from "./src/component/banner/Banner.jsx";
import Hero from "./src/component/hero/hero.jsx";
import About from "./src/component/About/About.jsx";
import WhyChoose from "./src/component/WhyChoose/WhyChoose.jsx";
import Footer from "./src/component/Footer/Footer.jsx";
import Popup from "./src/component/popup/popup.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [showPopup, setshowPopup] = useState(false);

  // Handle popup show/hide
  const handlePopup = () => {
    setshowPopup(true);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <Navbar handlePopup={handlePopup} />
        <Hero />
        <Banner />
        <About handlePopup={handlePopup} />
        <WhyChoose />
        <Banner />
        <Footer />
        <Popup showPopup={showPopup} setshowPopup={setshowPopup} />
      </BrowserRouter>
      {/* Example trigger for popup */}
      <button onClick={handlePopup}>Show Popup</button>
    </div>
  );
};

export default App;
