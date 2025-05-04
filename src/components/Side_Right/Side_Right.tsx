import React, { useEffect } from 'react'
// import "./Side_Right.css"
import { useState } from "react";

import {
  CircleX,
  MoonIcon,
  Menu,
  X,
  SunIcon,
} from "lucide-react";


import { Link } from 'react-router-dom';
import AppRouter from '../../routers/AppRouter';
import Navabr from '../Navbar/Navabr';

const Side_Right = ({ toggleSidebar }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"))

  useEffect(() => {
    localStorage.setItem("theme", theme as string);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const [isOpen, setIsOpen] = useState(false);

  const HandleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="flex flex-col flex-1 overflow-hidden lg:rounded-sm border-white">
      <header className={`flex items-center justify-between  ps-5 py-5 ${theme === 'light' ? 'bg-white , text-black' : 'bg-[#1f1e1f]  , text-white'} `}>

        <div className="left-Header ">
          <div className="flex items-center ">
            <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none lg:hidden cursor-pointer">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round"></path>
              </svg>
            </button>
          </div>
        </div>


        <div className="Right-Header relative h-full py-3 ">

          <div className="up absolute flex lg:justify-between justify-end items-center gap-10 md:gap-10 pt-3 right-0 rounded-s-2xl rounded-t-none lg:bg-[#2e2d2fd9] lg:w-max lg:-mt-8 -mt-6 lg:p-4 px-4">


            {/* Navbar */}
            <Navabr />

            {/* Theme */}
            <div className="theme">
              <button
                className="rounded-md focus:outline-none focus:shadow-outline-purple cursor-pointer mt-1 "
                onClick={HandleTheme}
                aria-label="Toggle color mode"
              >
                {theme === 'dark' ? (
                  <SunIcon className="w-5 h-5" aria-hidden="true" color='white' />
                ) : (
                  <MoonIcon className="w-5 h-5 lg:text-white text-black" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

        </div>

      </header >

      <main className={`${theme === 'light' ? 'bg-white , text-black' : 'bg-[#1f1e1f] , text-white'} p-2 flex-1 overflow-x-hide overflow-y-auto `}>
        <div className="container px-6 py-2 mx-auto ">
          <AppRouter />
        </div>
      </main>

    </div>
  );
};

export default Side_Right;