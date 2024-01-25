import React from "react";
import { Links } from "../utils/Navbar/Links";
// import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
            <div>
                <h1 className="text-5xl ml-2 font-signature ">Mustafa</h1>
            </div>
            <ul className="hidden md:flex">
                {Links.map((link, index) => (
                    <li
                        key={index}
                        className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200"
                    >
                        {link}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
