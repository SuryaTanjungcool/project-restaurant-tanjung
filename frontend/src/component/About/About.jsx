import React from 'react';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import BgPolygon from "../../assets/png/polygon.png";
import Vector from "../../assets/png/Vector.png";

const BgStyle = {
  backgroundImage: `url(${BgPolygon})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  position: "relative",
};

const About = () => {
  const navigate = useNavigate();

  const handleAccountClick = () => {
    navigate("/my-account");
  };

  return (
    <div style={BgStyle} className="py-14">
      <div className="container min-h-[580px] relative z-10">
        <h1 className="pt-20 tracking-wider text-4xl font-semibold text-white text-center">
          About Us
        </h1>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="bg-white/80 p-10 my-10"
        >
          Kami menyediakan produk makanan yang sehat dan lezat, Semua makanan disini telah terverifikasi sehat dan bersih. Bila tidak bisa makan di tempat kami, kalian masih bisa untuk mencicipi makanan dengan cara pesan online. Makanan Anda akan siap hanya dengan menunggu di rumah. Jangan lupa makan di tempat kami,dan beri rating bintang lima yah😊   
          <br />
          Jam operasional: Setiap hari: pukul 09.00 – 16.00 WIB
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="pt-10 flex justify-center"
          >
            <button
              onClick={handleAccountClick}
              className="flex justify-center items-center gap-2 bg-primary text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300"
            >
              <FaUser />
              My Account
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-10 right-0 w-full">
        <img src={Vector} alt="" className="absolute top-0 right-0 w-full" />
      </div>
    </div>
  );
};

export default About;
  