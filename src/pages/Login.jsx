import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import login from "../assets/loti/login.json";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const res = await fetch("https://backendportfolio-seven.vercel.app/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        const data = await res.json();
        console.log("LoginData:", data)

        if (data.logedin) {
            localStorage.setItem("token", data.token);
            toast.success("Login to Admin Page successfully");
            setTimeout(() => {
                navigate("/admin");
            }, 1700);
        } else {
            toast.error(data.message);
        }
    };

    return (
        <>
            <ToastContainer />
            <h1 className="text-3xl text-center font-bold mt-10 ">Login</h1>
            <div className=" py-2  flex lg:flex-row-reverse flex-col  ">

                {/* Lottie Animation Section */}
                <div className="lottie lg:w-[80%] md:w-[70%] w-[100%] m-auto">
                    <Lottie animationData={login} loop={true} className="" />
                </div>

                <div className="form  m-auto py-10  lg:w-[80%] w-[100%]">

                    <form onSubmit={handleLogin} className=" flex flex-col justify-center items-start gap-5  lg:py-5 lg:px-2 p-4">
                        <div className="w-[100%] ">
                            <label >UserName</label>
                            <br />
                            <input
                                className="w-[100%] p-2 rounded-sm border-green-600 border-1"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div className="w-[100%] ">
                            <label>Password</label>
                            <br />
                            <input
                                className="w-[100%] p-2 rounded-sm border-green-600 border-1"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                autoComplete="off"

                            />
                        </div>
                        <button type="submit" className="bg-green-800 mt-3 py-2 px-8 fw-semibold rounded-md hover:bg-transparent text-white hover:border-green-600 hover:border-1 cursor-pointer hover:text-green-600" >
                            Login
                        </button>
                    </form>
                </div>



            </div>
        </>
    )
}

export default Login