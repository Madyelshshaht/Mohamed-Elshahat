import React, { useState } from "react";
import "./Side_Left.css";
import Contact from "../Contact/Contact";



import mady from '../../assets/mady.jpg';

import {
    CalendarDays,
    CircleX,
    Facebook,
    Instagram,
    Mail,
    MapPin,
    Smartphone,
} from "lucide-react";

import { Link } from "react-router-dom";
import Button from "../ButtonUI/Button";
import { GitHub, LinkedIn } from "@mui/icons-material";

const Side_Left = ({ toggleSidebar, sidebarOpen }) => {
    const handleOpenImg = () => {
        window.open(mady, "_blank");
    };

    return (
        <div
            className={`Side_Left text-center fixed inset-y-0 top-0 left-0 z-30 md:w-95 md:text-base sm:w-75 w-70 text-[12px] lg:rounded-2xl overflow-y-hidden
                        transition duration-400 transform lg:translate-x-0 lg:static lg:inset-0 ${sidebarOpen
                    ? "translate-x-0 ease-out"
                    : "-translate-x-full ease-in"
                }`}
        >
            {/* <video autoPlay loop muted playsInline className="video-bg" onError={(e) => console.error("Video failed to load", e)}>
                <source src="https://videos.pexels.com/video-files/2611250/2611250-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="video-bg"
                onError={(e) => console.error("Video failed to load", e)}
                disablePictureInPicture
                controlsList="nodownload nofullscreen noremoteplayback"
            >
                <source src="https://videos.pexels.com/video-files/2611250/2611250-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>


            {sidebarOpen && (
                <div
                    className="text-green-600 absolute top-3 right-4 cursor-pointer"
                    onClick={toggleSidebar}
                >
                    <CircleX size={21} />
                </div>
            )}
            <div className="content lg:overflow-hidden overflow-x-hidden overflow-y-scroll  py-4">
                <div className="pt-4">
                    <div className="Header pt-2 text-white">
                        <div className="Myphoto">
                            <img
                                src={mady}
                                alt="Mady"
                                className="rounded-xl block mx-auto cursor-pointer w-48 h-45 md:w-48 md:h-45 object-fill"
                                onClick={handleOpenImg}
                            />
                        </div>
                        <div className="headerName">
                            <h1 className="text-2xl font-bold mt-5">Mohamed Elshahat</h1>

                            <Button />
                            <div
                                className="headborder border-b-2 pb-6 md:w-75 w-60 m-auto"
                                style={{ color: "#00e650" }}
                            ></div>
                        </div>
                    </div>
                    <div className="contact  text-white py-1 md:px-8  p-5 ">
                        <Contact
                            icon={<Mail color="#00e650" />}
                            title="Email"
                            info="mahamed.elshahat55@gmail.com"
                            linkUrl={"mailto:mahamed.elshahat55@gmail.com"}
                        />
                        <Contact
                            icon={<Smartphone color="#00e650" />}
                            title="Phone"
                            info="010 655 60 657"
                            linkUrl={"https://wa.me/201065560657"}
                        />
                        <Contact
                            icon={<CalendarDays color="#00e650" />}
                            title="Age"
                            info="10 / Jul / 2004"
                            linkUrl={""}
                        />
                        <Contact
                            icon={<MapPin color="#00e650" />}
                            title="Location"
                            info="Mansoura / shirbin"
                            linkUrl={
                                "https://www.google.com/maps/place/Shirbin,+Dakahlia+Governorate,+Egypt/"
                            }
                        />
                    </div>
                    <div className="footer flex justify-center items-center gap-8 md:pt-4 pt-10  text-white">
                        <Link
                            to={
                                "https://www.instagram.com/madyelshahat?igsh=dXV1MGNjcm9seXVl&utm_source=qr"
                            }
                            className="link-media cursor-pointer"
                        >
                            <Instagram />
                        </Link>
                        <Link
                            to={
                                "https://www.facebook.com/profile.php?id=100074183542303&mibextid=LQQJ4d"
                            }
                            className="link-media cursor-pointer"
                        >
                            <Facebook />
                        </Link>
                        <Link
                            to={"https://www.linkedin.com/in/mohamed-elshahawi-2a736134b"}
                            className="link-media cursor-pointer"
                        >
                            <LinkedIn />
                        </Link>
                        <Link
                            to={"https://github.com/Madyelshshaht"}
                            className="link-media cursor-pointer"
                        >
                            <GitHub />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Side_Left;
