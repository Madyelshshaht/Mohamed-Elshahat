import React from "react";
// import styled from "styled-components";
import cv from "/mohamed c cv .pdf"
import { motion } from "framer-motion"
import { BookUser } from "lucide-react";

const Button = () => {

    const handleDownloadCV = () => {
        window.open(cv, "_blank");
    };

    return (

        <button className="download-button mt-5 cursor-pointer">
            <div className="docs flex bg-green-600 hover:bg-white hover:text-black hover:scale-105 transition p-2 rounded gap-2 items-center" onClick={handleDownloadCV}>
                {/* <img width="30" height="40" src="https://img.icons8.com/arcade/64/resume.png" alt="resume"/> */}
                <BookUser />
                Resume
            </div>
        </button>

    );
};

export default Button;
