import React, { useRef, useState } from "react";
import { FaHospitalUser } from "react-icons/fa";
import GlowingButton from "./GlowingButton";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import SideScroll from "./SideScroll";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const bottomRef = useRef(null);


  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [nav, setNav] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="flex fixed top-0 left-0 w-full h-[9vh] justify-between px-4 lg:px-8 text-xl shadow-sm z-10 bg-white">
        {/* Logo */}
        <div className="flex items-center p-2">
          <a href="/">
            <FaHospitalUser color="black" size={45} className="w-10 md:w-12" />
          </a>
          <div className="pl-2 text-2xl lg:text-3xl max-md:text-xl max-md:mt-1">
            <a href="/" className="text-black no-underline">
              CityCare
            </a>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="items-center hidden lg:flex gap-x-8 text-slate-600">
          <div
            onClick={() => {
              navigate("/contact-us");
            }}
            className="duration-100 cursor-pointer hover:scale-110"
          >
            Contact Us
          </div>

          <div
            className="relative "
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <a className="no-underline cursor-pointer text-slate-600">
              Sign Up / Sign In
            </a>
            {isDropdownOpen && (
              <div className="absolute left-0 p-3 bg-white shadow-lg rounded-xl text-slate-600">
                <a
                  onClick={() => navigate("/hospital-signin")}
                  className="block duration-300 border-b-2 hover:scale-110"
                >
                  Hospital Login
                </a>
                <a
                  onClick={() =>
                    navigate("/patient-signup/66d316beb1edbdc0f279c00e")
                  }
                  className="block pt-3 duration-300 border-b-2 hover:scale-110"
                >
                  Patient Login
                </a>
                <a
                  onClick={() => navigate("/admin-login")}
                  className="block pt-3 duration-300 border-b-2 hover:scale-110"
                >
                  Admin Login
                </a>
                <div
                  onClick={() => {
                    localStorage.removeItem("token");
                    alert("You have successfully logged out.");
                  }}
                  className="block pt-3 duration-300 cursor-pointer hover:scale-110"
                >
                  Logout
                </div>
              </div>
            )}
          </div>

          <div
            onClick={() => navigate("/dispensation")}
            className="duration-100 cursor-pointer hover:scale-110"
          >
            Medication
          </div>
        </div>

        {/* Glowing Button and Hamburger for mobile */}
        <div className="flex items-center">
          <div
            onClick={() => navigate("/emergency")}
            className="pr-4 lg:pr-0"
          >
            <GlowingButton size="small" />
          </div>
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer lg:hidden"
          >
            {nav ? <RxCross1 size={30} /> : <RxHamburgerMenu size={30} />}
          </div>
        </div>

        {/* Mobile Menu */}
        {nav && <SideScroll nav={nav} />}
      </nav>
    </>
  );
}

export default Navbar;
