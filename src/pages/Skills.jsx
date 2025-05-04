import React from 'react'
import html from "../assets/Skills-Img/html.png"
import css from "../assets/Skills-Img/css.png"
import js from "../assets/Skills-Img/javascript.png"
import bootstrap from "../assets/Skills-Img/boot.png"

import tailwind from "../assets/Skills-Img/tailwind.png";
import photoshop from "../assets/Skills-Img/photoshop.png"
import vue from "../assets/Skills-Img/vue.png"
import figma from "../assets/Skills-Img/figma.png"
import git from "../assets/Skills-Img/git.png"
import github from "../assets/Skills-Img/github.png"
import reactIcon from "../assets/Skills-Img/react.png"
import redux from "../assets/Skills-Img/redux.png"
import TanStack from "../assets/Skills-Img/tanStack.png"
import Typescript from "../assets/Skills-Img/typescript.png"
import Nodejs from "../assets/Skills-Img/nodejs.png"
import materialUI from "../assets/Skills-Img/material ui.png"
import mongo from "../assets/Skills-Img/mogdo.png"


import Skills_Card from '../components/Skills_Card/Skills-Card'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Heading from '../components/heading/Heading'


import { motion } from "framer-motion";
import { fadeIn } from "../animation";



const Skills = () => {
    return (
        <motion.div className='skills '
        // initial={{ width: 0 }}
        // animate={{ width: "100%" }}
        // exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            <Heading title="Skills" />
            <div className="text-center my-6">
                <h3 className='text-2xl font-bold'>Essential tools I Use</h3>
                <p className='mt-2'>Discover the powerful tools and technologies i use to create exceptional, <br />  high-performance websites & applications.</p>
            </div>
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}

                className="my-skills  md:p-3 p-0">

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    speed={1500}
                    loop={true}
                    breakpoints={{
                        0: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    className='mb-20'
                >
                    <SwiperSlide >
                        <Skills_Card img={html} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skills_Card img={css} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skills_Card img={js} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skills_Card img={Typescript} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skills_Card img={bootstrap} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skills_Card img={reactIcon} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skills_Card img={redux} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skills_Card img={TanStack} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skills_Card img={vue} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skills_Card img={tailwind} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skills_Card img={Nodejs} />
                    </SwiperSlide>
                </Swiper>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    speed={1500}
                    loop={true}
                    breakpoints={{
                        0: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}

                >
                    <SwiperSlide>
                        <Skills_Card img={git} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skills_Card img={github} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skills_Card img={photoshop} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skills_Card img={figma} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skills_Card img={mongo} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skills_Card img={materialUI} />
                    </SwiperSlide>
                </Swiper>
            </motion.div>
        </motion.div>
    )
}

export default Skills


