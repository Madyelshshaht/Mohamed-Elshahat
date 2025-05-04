import React, { useState } from "react";
import Side_Left from "../components/Side_Left/Side_Left";
import Side_Right from "../components/Side_Right/Side_Right";
import { BrowserRouter } from "react-router-dom";


const Layout = () => {

    // Parent
    const [sidebarOpen, setsidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setsidebarOpen(!sidebarOpen)
    }
    return (
        <BrowserRouter basename="/Mohamed-Elshahat/" >
            <div>
                <div className="flex h-screen gap-4">
                    <Side_Left sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
                    <Side_Right toggleSidebar={toggleSidebar} />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default Layout;
