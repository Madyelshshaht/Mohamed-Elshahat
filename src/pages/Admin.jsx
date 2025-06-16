import React from 'react'

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import admin from "../assets/loti/admin.json";
// import web from "../assets/loti/web.json";


const Admin = () => {
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }

        const res = fetch("https://backendportfolio-seven.vercel.app/api/admin", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                if (res.status === 403) {
                    navigate("/login");
                }
                return res.json();
            })
            .then((data) => {
                setMessage(data.message)
                console.log("AdimnData:", data)
            })
            .catch(() => navigate("/login"));

    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <>
            <div className="top my-1 md:text-start text-center">
                <h2 className='text-4xl font-bold '>Admin Page</h2>
                <p className=''>{message}</p>
            </div>

            <p className="text-lg text-gray-300 max-w-xl mx-auto text-center mt-2">
                Welcome to your control panel. Here you can manage projects, and system settings efficiently.
            </p>

            <div className="lottie lg:w-[46%]  m-auto ">
                <Lottie animationData={admin} loop={true} className="" />
            </div>



        </>
    );
}

export default Admin;
