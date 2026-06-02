import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden text-white">

      {/* BACKGROUND IMAGE */}
      <img
        src="./images/Rectangle 26.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col justify-between px-4 md:px-16 py-10 gap-10">

        {/* TOP AREA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* LEFT */}
          <div className="flex items-center md:items-start gap-3 justify-center md:justify-start text-center md:text-left">

            <img
              src="./images/image 13.png"
              alt="logo"
              className="w-10 md:w-12 h-10 md:h-12"
            />

            <h1 className="text-2xl md:text-3xl font-bold">
              Renovex
            </h1>

          </div>

          {/* CENTER TEXT */}
          <div className="text-center max-w-md mx-auto">
            <p className="text-sm md:text-[15px] font-serif leading-6 md:leading-7 text-gray-200 font-medium">
              Our craftsmanship and attention to detail
              are evident in every project,
              ensuring long-lasting results that reflect
              our commitment to excellence.
              <br />
              We let our work stand as a testament to
              our dedication to quality.
            </p>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex flex-col sm:flex-row md:flex-row justify-center md:justify-between gap-10 text-center md:text-left">

            {/* LINKS */}
            <div className="space-y-3">
              <h2 className="text-yellow-400 font-semibold">
                About Us
              </h2>

              <p className="cursor-pointer hover:text-yellow-400">
                Contact Us
              </p>

              <p className="cursor-pointer hover:text-yellow-400">
                Blog
              </p>

              <p className="cursor-pointer hover:text-yellow-400">
                Services
              </p>
            </div>

            {/* CONTACT */}
            <div className="space-y-4">

              <div className="flex items-center gap-3 justify-center md:justify-start">
                <FaPhoneAlt className="text-yellow-400 text-sm" />
                <span className="text-sm md:text-base">+234 xxx xxx xxx</span>
              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start">
                <FaEnvelope className="text-yellow-400 text-sm" />
                <span className="text-sm md:text-base">renovexng@gmail.com</span>
              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start">
                <FaMapMarkerAlt className="text-yellow-400 text-sm" />
                <span className="text-sm md:text-base">Lagos, Nigeria</span>
              </div>

            </div>

          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="text-center text-xs md:text-[15px] font-semibold text-gray-300">
          © Copyright 2026 Renovex Services. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;