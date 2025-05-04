import React, { useMemo } from "react";

import { motion } from 'framer-motion';

import Heading from "../components/heading/Heading";

// Cars
import Cars from "../assets/Projects-img/Cars/cars.png";
import cc1 from "../assets/Projects-img/Cars/cc1.png";
import cc2 from "../assets/Projects-img/Cars/c22.png";
import cc3 from "../assets/Projects-img/Cars/c33.png";
import cc4 from "../assets/Projects-img/Cars/cc4.png";
import cc5 from "../assets/Projects-img/Cars/cc5.png";
import cc6 from "../assets/Projects-img/Cars/cc6.png";
import cc7 from "../assets/Projects-img/Cars/cc7.png";


// Crypto-Img
import Crypto from "../assets/Projects-img/Crypto-img/Crypto123.png";
import c1 from "../assets/Projects-img/Crypto-img/c1.png";
import c2 from "../assets/Projects-img/Crypto-img/c2.png";
import c3 from "../assets/Projects-img/Crypto-img/c3.png";
import c4 from "../assets/Projects-img/Crypto-img/c4.png";
import c5 from "../assets/Projects-img/Crypto-img/c5.png";


// TRAVEL

import Travel from "../assets/Projects-img/travel-img/travel.png";
import t1 from "../assets/Projects-img/travel-img/t1.png";
import t2 from "../assets/Projects-img/travel-img/t2.png";
import t3 from "../assets/Projects-img/travel-img/t3.png";
import t4 from "../assets/Projects-img/travel-img/t4.png";
import t5 from "../assets/Projects-img/travel-img/t5.png";
import t6 from "../assets/Projects-img/travel-img/t6.png";

// shief
import Shief from "../assets/Projects-img/sheif/shief.png";
import s2 from "../assets/Projects-img/sheif/s2.png";
import s3 from "../assets/Projects-img/sheif/s3.png";
import s4 from "../assets/Projects-img/sheif/s4.png";
import s5 from "../assets/Projects-img/sheif/s5.png";
import s6 from "../assets/Projects-img/sheif/s6.png";

// wordpress Protfolio
import porto1 from "../assets/Projects-img/Portofolio/porot1.png"
import p1 from "../assets/Projects-img/Portofolio/p1.png"
import p2 from "../assets/Projects-img/Portofolio/p2.png"
import p3 from "../assets/Projects-img/Portofolio/3p.png"
import p4 from "../assets/Projects-img/Portofolio/p4.png"
import p5 from "../assets/Projects-img/Portofolio/p5.png"
import p6 from "../assets/Projects-img/Portofolio/p6.png"
import porto2 from "../assets/Projects-img/Portofolio/porot1.png"

// XO

import xo from "../assets/Projects-img/XO/XO.png";
import win from "../assets/Projects-img/XO/win.png";


import Project from "../components/Project/Project";






const Projects = () => {

    return (
        <>
            <Heading title="Projects" />
            <motion.div className="projects py-5 lg:px-10 ">
                <Project />
            </motion.div>
        </>
    );
};

export default Projects;
