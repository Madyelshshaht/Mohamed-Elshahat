
import { motion } from 'framer-motion';

import Heading from "../components/heading/Heading";


import React, { useEffect, useState } from 'react'


import { ScaleLoader } from "react-spinners";


import Project from "../components/Project/Project";








const Projects = () => {
    const [projects, setProjects] = useState([]);

    const [availableSkills, setAvailableSkills] = useState([]);
    const [selectedSkill, setSelectedSkill] = useState("all");
    const [loading, setloading] = useState(false)


    // console.log("availableSkills", availableSkills)
    // console.log("selectedSkill", selectedSkill)


    const GetProjects = async () => {
        try {
            setloading(true);
            const res = await fetch("https://backendportfolio-seven.vercel.app/api/projects");
            const data = await res.json();

            if (data.success) {
                setProjects(data.projects);
                const preferredSkills = ["next", "react", "js", "node", "asp.net", "typescript"];


                const allSkills = data.projects.flatMap(p => p.skills);
                const filteredSkills = [...new Set(allSkills)].filter(skill =>
                    preferredSkills.includes(skill.trim().toLowerCase())
                );
                setAvailableSkills(filteredSkills);
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

    const filteredProjects =
        selectedSkill === "all"
            ? projects
            : projects.filter(project => project.skills.includes(selectedSkill));

    if (loading) {
        return (
            <div className="text-center flex justify-center items-center h-100">
                <ScaleLoader color="#41c900" />
            </div>
        )
    }


    return (
        <>
            <Heading title="Projects" />
            <motion.div className="projects py-5 lg:px-10 ">
                {!loading && (
                    <div className="flex gap-2 flex-wrap mb-6  justify-center">
                        <button
                            className={`px-3 py-1 rounded-xl border cursor-pointer hover:bg-gray-400 hover:text-white ${selectedSkill === "all"
                                ? "bg-green-600 text-white"
                                : "bg-gray-200 text-black"
                                }`}
                            onClick={() => setSelectedSkill("all")}
                        >
                            All
                        </button>

                        {availableSkills.map((skill, i) => (
                            <button
                                key={i}
                                className={`px-3 py-1 rounded-xl border cursor-pointer hover:bg-gray-400 hover:text-white ${selectedSkill === skill
                                    ? "bg-green-600 text-white"
                                    : "bg-gray-200 text-black"
                                    }`}
                                onClick={() => setSelectedSkill(skill)}
                            >
                                {skill}
                            </button>
                        ))}
                    </div>
                )}


                <Project filteredProjects={filteredProjects} />
            </motion.div>
        </>
    );
};

export default Projects;
