import React from "react";
// import styled from "styled-components";
import cv from "/Mahamed_Elshshat-cv.pdf"
import { motion } from "framer-motion"
import { BookUser } from "lucide-react";

const Button = () => {

    const handleDownloadCV = () => {
        window.open(cv, "_blank");
    };

    return (

        <button className="download-button mt-5 cursor-pointer text-center w-[150px]">
            <div className="docs flex bg-green-600 hover:bg-white  hover:text-black hover:scale-105 transition p-2 rounded gap-2 items-center justify-center" onClick={handleDownloadCV}>
                <BookUser />
                Resume
            </div>
        </button>

    );
};

export default Button;
