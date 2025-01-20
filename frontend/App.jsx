import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./src/component/Navbar.jsx";
import AdminNavbar from "./src/component/Navbarkhusus.jsx";
import Banner from "./src/component/banner/Banner.jsx";
import Hero from "./src/component/hero/hero.jsx";
import About from "./src/component/About/About.jsx";
import WhyChoose from "./src/component/WhyChoose/WhyChoose.jsx";
import Popup from "./src/component/popup/popup.jsx";
import DashboardAdmin from "./src/component/DashboardAdmin/Dashbord.jsx";
import PrimaryButton from "./src/component/Shared/PrimaryButton.jsx";
import AccountAdmin from "./src/component/AccountAdmin/AkunAdmin.jsx";
import AddDashboard from "./src/component/DashboardAdmin/AddDashboard.jsx";
import EditDessert from "./src/component/EditDessert/EditDessert.jsx";
import Register from "./src/component/Register/Register.jsx";
import EditDashboard from "./src/component/DashboardAdmin/EditDashboard.jsx";

import PrivateRoute from "./src/PrivateRoute/PrivateRoute"; // Import PrivateRoute
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [showPopup, setshowPopup] = useState(false);

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
    <BrowserRouter>
      <div className="overflow-x-hidden">
        {/* Navbar berubah sesuai halaman */}
        <Routes>
          {/* Halaman dengan Navbar umum */}

          
          <Route
            path="/"
            element={
              <>
                <Navbar handlePopup={handlePopup} />
                <Hero />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Navbar handlePopup={handlePopup} />
                <Register />
              </>
            }
          />
          <Route
            path="/banner"
            element={
              <>
                <Navbar handlePopup={handlePopup} />
                <Banner />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navbar handlePopup={handlePopup} />
                <About handlePopup={handlePopup} />
              </>
            }
          />
          <Route
            path="/why-choose"
            element={
              <>
                <Navbar handlePopup={handlePopup} />
                <WhyChoose />
              </>
            }
          />
         
          
          <Route
            path="/popup"
            element={
              <>
                <Navbar handlePopup={handlePopup} />
                <Popup />
              </>
            }
          />
          <Route
            path="/PrimaryButton"
            element={
              <>
                <Navbar handlePopup={handlePopup} />
                <PrimaryButton />
              </>
            }
          />
          <Route
            path="/akunlogin"
            element={
              <>
                <Navbar handlePopup={handlePopup} />
                <AccountAdmin />
              </>
            }
          />

          {/* Halaman dengan AdminNavbar khusus */}
          <Route
            path="/dashboard"
            element={
              <>
                <PrivateRoute element={<DashboardAdmin />} />
              </>
            }
          />
          <Route
            path="/AddDashboard"
            element={
              <>
                <PrivateRoute element={<AddDashboard />} />
              </>
            }
          />
          <Route
            path="/EditDashboard/:id"
            element={
              <>
                <PrivateRoute element={<EditDashboard />} />
              </>
            }
          />
        
          <Route
            path="/edit-dessert/:id"
            element={
              <>
                <PrivateRoute element={<EditDessert />} />
              </>
            }
          />
        </Routes>


        {/* Popup tetap bisa digunakan */}
        <Popup showPopup={showPopup} setshowPopup={setshowPopup} />
        <button onClick={handlePopup}>Show Popup</button>
      </div>
    </BrowserRouter>
  );
};

export default App;