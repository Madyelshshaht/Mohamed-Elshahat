import React from "react";
import "./Contact.css"
const Contact = ({ icon, title, info, linkUrl }) => {
    return (
        <>
            <a href={linkUrl} className="info-Link w-80" target="_blank">
                <div className="contact-info flex text-start justify-start items-center gap-8 py-3 w-80 m-auto ">
                    <div className="Icon flex items-center justify-center">
                        {icon}
                    </div>
                    <div className="info">
                        <p className="text-lg text-gray-400 font-semibold">{title}</p>
                        <h2>{info}</h2>
                    </div>
                </div >
            </a>
        </>
    );
};

export default Contact;
