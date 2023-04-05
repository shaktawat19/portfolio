import React, { useState } from "react";
import Logo from "../assets/logo1.png";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div className="">
        <img src={Logo} alt="logoImage" style={{ width: "50px" }} />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li className="cursor-pointer">
          <Link className="hover:border-b-2 hover:border-pink-600" to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link className="hover:border-b-2 hover:border-pink-600" to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link className="hover:border-b-2 hover:border-pink-600" to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link className="hover:border-b-2 hover:border-pink-600" to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link className="hover:border-b-2 hover:border-pink-600" to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          nav
            ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="cursor-pointer py-6 text-4x">
          <Link onClick={handleClick} className="hover:border-b-2 hover:border-pink-600" to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="cursor-pointer py-6 text-4x">
          <Link onClick={handleClick} className="hover:border-b-2 hover:border-pink-600" to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="cursor-pointer py-6 text-4x">
          <Link onClick={handleClick} className="hover:border-b-2 hover:border-pink-600" to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="cursor-pointer py-6 text-4x">
          <Link onClick={handleClick} className="hover:border-b-2 hover:border-pink-600" to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="cursor-pointer py-6 text-4x">
          <Link onClick={handleClick} className="hover:border-b-2 hover:border-pink-600" to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#df1e0c]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              {" "}
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              {" "}
              Linkedin <FaLinkedin size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              {" "}
              Github <FaGithub size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              {" "}
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ff2c72]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              {" "}
              Instagram <FaInstagram size={30} color="" />{" "}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
