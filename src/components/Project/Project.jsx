import React, { useCallback, useEffect, useMemo, useState } from 'react'
import "./Project.css"

import { fadeIn } from "../../animation";

import { motion } from "framer-motion";


import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { GitHub } from "@mui/icons-material";



import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import ModelDelete from '../ModelDelete/ModelDelete';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

import { ScaleLoader } from "react-spinners";



const Project = () => {

    const token = localStorage.getItem("token");

    const [projects, setProjects] = useState([]);
    console.log(projects)
    const [loading, setloading] = useState(false)


    const [showModal, setShowModal] = useState(false);
    const [selectedProjectId, setSelectedProjectId] = useState(null);



    const GetProjects = async () => {
        try {
            setloading(true);
            const res = await fetch("https://backendportfolio-seven.vercel.app/api/projects");
            const data = await res.json();

            if (data.success) {
                setProjects(data.projects);
            } else {                                   
                toast.error("API response error:", data.message || "Unknown error");
            }
        } catch (err) {
            toast.warning("Fetch error:", err);
        } finally {
            setloading(false);
        }
    }



    useEffect(() => {
        GetProjects();
    }, []);

    const handleDeleteClick = (id) => {
        setSelectedProjectId(id);
        setShowModal(true);
    };




    const handleConfirmDelete = async () => {
        if (!selectedProjectId) return;

        try {
            const res = await fetch(`https://backendportfolio-seven.vercel.app/api/projects/${selectedProjectId}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await res.json();

            if (data.success) {
                toast.success("Projetc Deleted Successfully");
                setProjects(projects.filter((p) => p._id !== selectedProjectId));
            } else {
                toast.error('Failed to delete project');
            }
        } catch (err) {
            console.error(err);
            toast.error('Error deleting project');
        } finally {
            setShowModal(false);
            setSelectedProjectId(null);
        }
    };

    const handleCancelDelete = () => {
        setShowModal(false);
        setSelectedProjectId(null);
        toast.error("Deleted Cansel");
    };




    if (loading) {
        return (
            <div className="text-center flex justify-center items-center h-100">
                <ScaleLoader color="#41c900" />
            </div>
        )
    }


    return (
        <>
            <ToastContainer />
            {projects.length > 0 ? projects.map((pro, idx) => {
                const side = idx % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row";


                return (

                    <motion.div
                        key={idx}
                        variants={fadeIn("up", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.5 }}
                        className={`project flex md:flex-row ${side}  items-center flex-col gap-2 shadow-md shadow-gray-500 mb-10`}>


                        <div

                            className="img md:w-1/2 w-full  p-2">
                            <Swiper
                                slidesPerView={1}
                                // autoHeight={true}
                                spaceBetween={30}
                                loop={true}
                                autoplay={{
                                    delay: 8000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Autoplay, Pagination]}
                                className="mySwiper"
                            >
                                {pro.images?.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={img.url} alt={`${img} ${index + 1}`} className="rounded-lg" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <motion.div
                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="info p-2 lg:p-4 md:w-1/2 w-full flex flex-col  overflow-hidden gap-2"
                        >

                            <h3 className="title mb-2 text-2xl">{pro.title}</h3>
                            <div className="desc mb-2 text-xs md:text-md lg:text-lg ">{pro.desc}</div>
                            <div className="skills-used flex items-center gap-x-5 gap-y-3 flex-wrap text-black">
                                {pro.skills?.map((skill, idx) => (
                                    <div className='rounded-2xl cursor-pointer bg-gray-200' key={idx} >
                                        <span className="text-sm p-2">{skill}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="links p-2 flex items-center gap-5 ">
                                <Link to={pro.deployLink} target="_blank"><ExternalLink size={20} /></Link>
                                <Link to={pro.githubLink} target="_blank"><GitHub style={{ fontSize: "22px" }} /></Link>
                            </div>

                            {token && <div className="links  p-2 flex items-center gap-2 ">
                                <button
                                    onClick={() => handleDeleteClick(pro._id)}
                                    className="text-red-700 hover:text-white hover:font-semibold flex items-center cursor-pointer border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center  dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                                >
                                    Delete <span><MdDelete size={20} /></span>
                                </button>

                                <Link to={`/edit/${pro._id}`}>
                                    <button
                                        className="text-blue-700 hover:text-white hover:font-semibold flex gap-1 items-center cursor-pointer border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center  dark:border-blue-500 dark:text-blue-500  dark:hover:bg-blue-600 dark:focus:ring-blue-900"
                                    >
                                        Edit <span className='mb-[2px]'><FaEdit size={19}  /></span>
                                    </button>
                                </Link>
                            </div>
                            }

                            <ModelDelete
                                isOpen={showModal}
                                message="Are you sure you want to delete this project?"
                                onConfirm={handleConfirmDelete}
                                onCancel={handleCancelDelete} />

                        </motion.div>

                    </motion.div>

                )
            }
            ) : <h1 className='text-center sm:text-3xl text-2xl font-bold'> No Projects Found</h1>
            }

        </>
    );
};



export default Project;