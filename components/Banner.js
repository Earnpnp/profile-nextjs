"use client";
import React, { useState, useEffect } from "react";
import { HiBars3 } from "react-icons/hi2";
import { Link } from "react-scroll";

const Banner = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
        <div className="w-full md:w-880 bg-slate-900 p-4 rounded-2xl flex items-center">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={400}
            className="text-lg text-slate-200 font-medium cursor-pointer"
          >
            Earn
          </Link>
          <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
            <Link
              to="education"
              spy={true}
              smooth={true}
              offset={-70}
              duration={400}
              className="font-medium text-slate-500 hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
            >
              About
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={400}
              className="font-medium text-slate-500 hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
            >
              Projects
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={400}
              className="font-medium text-slate-500 hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
            >
              Contact
            </Link>
          </div>

          <div
            className="block md:hidden ml-auto cursor-pointer"
            onClick={() => setIsActive(!isActive)}
          >
            <HiBars3 className="text-2xl text-slate-500" />
          </div>

          {isActive && (
            <div
              className="md:hidden p-4 w-[220px] h-[220px] bg-slate-900 rounded-lg fixed top-24 right-16 flex 
            flex-col items-center justify-evenly gap-6"
            >
              <Link
                to="education"
                spy={true}
                smooth={true}
                offset={-70}
                duration={400}
                className="font-medium text-slate-500 hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                About
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={400}
                className="font-medium text-slate-500 hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                Projects
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={400}
                className="font-medium text-slate-500 hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Banner;
