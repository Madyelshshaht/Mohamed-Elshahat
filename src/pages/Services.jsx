import React from "react";

// Motion
import { motion } from "framer-motion";

// animation
import { fadeIn } from "../animation";

import { Code2, Figma, PanelTopIcon, TabletSmartphoneIcon } from "lucide-react";
import Service_Cards from "../components/Service_cards/Service_Cards";
// import { motion } from 'framer-motion';

const Services = () => {
    return (
        <div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            <div className="pb-7">
                <h1 className="text-4xl font-bold mb-2">Services</h1>
                <div className="w-10 h-1 outline-0 border-none bg-green-400 rounded-3xl"></div>
            </div>

            <h1 className="text-2xl font-bold text-center ">Services I Provide</h1>
            <p className="text-sm text-gray-400 text-center md:w-[80%] w-[100%] m-auto my-3 px-2">I offer a range of digital solutions tailored to meet modern web and mobile needs. From visually compelling designs to development, I turn ideas into seamless, high-performing digital experiences</p>

            <div className="services grid md:grid-cols-2 grid-cols-1 gap-5 py-10 ">

                <Service_Cards
                    title={" Web Design"}
                    desc={
                        "  Web design involves creating visually appealing and user-friendly   websites, focusing on layout, colors, typography, and responsive design."
                    }
                    icon={<PanelTopIcon color="#00e650" size={30} />}
                />

                <Service_Cards
                    title={"Web Development"}
                    desc={
                        "Web development involves building and maintaining websites, ensuring functionality, performance, and seamless user experience through coding and programming."
                    }
                    icon={<Code2 color="#00e650" size={30} />}
                />

                <Service_Cards
                    title={"Mobile apps"}
                    desc={
                        ">Mobile app development focuses on creating intuitive and high-performing applications for iOS and Android, enhancing user experience and functionality."
                    }
                    icon={<TabletSmartphoneIcon color="#00e650" size={30} />}
                />

                <Service_Cards
                    title={"Figma"}
                    desc={
                        "I specialize in converting Figma designs into fully functional web applications with clean, responsive, and optimized code."
                    }
                    icon={<Figma color="#00e650" size={30} />}
                />

            </div>
        </div>
    );
};

export default Services;
