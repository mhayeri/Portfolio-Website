import React, { useState } from "react";
import { Links } from "../utils/Navbar/Links";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
    const [nav, setIsNav] = useState(false);

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-50">
            <div>
                <h1 className="text-5xl ml-2 font-signature ">Mustafa</h1>
            </div>
            <ul className="hidden md:flex">
                {Links.map((link, index) => (
                    <li
                        key={index}
                        className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200"
                    >
                        <Link to={link} smooth duration={500}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>

            <div
                onClick={() => setIsNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-gray-500  md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
                    {Links.map((link, index) => (
                        <li
                            key={index}
                            className="px-4 cursor-pointer py-6 text-4xl"
                        >
                            <Link to={link} smooth duration={500}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navbar;
