import React from 'react'
// Motion
import { motion } from "framer-motion";

// animation
import { fadeIn } from "../../animation";

const Service_Cards = ({ title, desc, icon }) => {
    return (
        <>
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}
                className="service flex md:flex-row flex-col items-center md:gap-10 md:p-10 p-8 rounded-2xl text-balance shadow-lg hover:scale-102 hover:italic shadow-gray-500 md:my-2 my-6">
                <div className="icon mb-10">
                    {icon}
                </div>
                <div className="info">
                    <h3 className='text-xl font-semibold '> {title} </h3>
                    <p>{desc} </p>
                </div>
            </motion.div>
        </>
    )
}

export default Service_Cards