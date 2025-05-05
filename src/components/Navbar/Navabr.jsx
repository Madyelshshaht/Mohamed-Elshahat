import React from 'react'
import { useState } from "react";

import {
    CircleX,
    Menu,
    X,
} from "lucide-react";


import { Link, useNavigate } from 'react-router-dom';
const Navabr = () => {
    const token = localStorage.getItem("token")
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <>
            {/* Nav */}
            <nav className=" text-white ">
                {/* Overlay */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-50 z-20 lg:hidden"
                        onClick={() => setIsOpen(false)}
                    ></div>
                )}
                {/* Desktop Menu  */}
                <div className="container flex justify-between items-center  gap-5">

                    {/* Hamburger Menu */}
                    <button
                        className="lg:hidden rounded-md text-white cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={25} color='#6a7282' /> : <Menu size={25} color='#6a7282' />}
                    </button>

                    {/* Links (Desktop) */}
                    <ul className="hidden lg:flex gap-6  ">
                        <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
                        <li><Link to="about" className="hover:text-gray-400">About</Link></li>
                        <li><Link to="skills" className="hover:text-gray-400">Skills</Link></li>
                        <li><Link to="services" className="hover:text-gray-400">Services</Link></li>
                        <li><Link to="project" className="hover:text-gray-400">Projects</Link></li>
                        <li><Link to="contact" className="hover:text-gray-400">Contact us</Link></li>
                        {token &&
                            <li><Link to="addproject" className="hover:text-gray-400">AddProject</Link></li>
                        }
                        <li><Link to="login" className="hover:text-gray-400">Login</Link></li>
                    </ul>
                    {token &&
                        <button onClick={handleLogout} className="text-red-700 hover:text-white  flex items-center cursor-pointer border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center  dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                            logOut
                        </button>
                    }

                </div>

                {/* Mobile Menu (Opens from Right) */}
                <div
                    className={`fixed top-0 right-0 h-full w-64 bg-[#3b393c] z-30 text-white p-6 transform ${isOpen ? "translate-x-0" : "translate-x-full"
                        } transition-transform duration-400 ease-in-out lg:hidden`}
                >
                    <button
                        className="absolute top-3 left-4 text-white cursor-pointer"
                        onClick={() => setIsOpen(false)}
                    >
                        <CircleX size={20} />
                    </button>
                    <ul className="mt-10 flex flex-col gap-6">
                        <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
                        <li><Link to="about" className="hover:text-gray-400">About</Link></li>
                        <li><Link to="skills" className="hover:text-gray-400">Skills</Link></li>
                        <li><Link to="services" className="hover:text-gray-400">Services</Link></li>
                        <li><Link to="project" className="hover:text-gray-400">Projects</Link></li>
                        <li><Link to="contact" className="hover:text-gray-400">Contact us</Link></li>
                        {token &&
                            <li><Link to="addproject" className="hover:text-gray-400">AddProject</Link></li>
                        }
                        <li><Link to="login" className="hover:text-gray-400">Login</Link></li>
                    </ul>
                </div>
            </nav >

        </>
    )
}

export default Navabr