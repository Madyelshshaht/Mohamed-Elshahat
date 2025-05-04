import React, { lazy, Suspense } from "react";
const Education = lazy(() => import("../components/Education/Education"));
const Experiences = lazy(() => import("../components/Experinces/Experiences"));
import Heading from "../components/heading/Heading";
import { motion } from 'framer-motion';
import { fadeIn } from "../animation";
import { ArrowDown } from "lucide-react";


const About = () => {

    const scrollToPosition = () => {
        console.log("Scrolling...");
        window.scrollTo({ top: 200, behavior: "smooth" });
    };

    return (
        <>
            <Heading title="About" />
            <motion.div
                className="items-start"
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.4 }}>
                <div className="p-2">
                    <Suspense fallback={<div>Loading Education...</div>}>
                        <Education />
                    </Suspense>
                </div>
                {/* <h1 className="flex justify-center ">
                <motion.p
                    className="bg-green-600 rounded-full p-2 text-white cursor-pointer"
                    onClick={scrollToPosition}
                    animate={{ y: [0, -10, 0] }} // Move up and down
                    transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 1.2,
                        ease: "easeInOut",
                    }}
                >
                    <ArrowDown />
                </motion.p>
            </h1> */}
                <div className="px-2 py-9"
                >
                    <Suspense fallback={<div>Loading Experiences...</div>}>
                        <Experiences />
                    </Suspense>
                </div>
            </motion.div>
        </>
    );
};

export default About;
