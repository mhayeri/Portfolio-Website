import React from "react";
import profile from "../assets/images/profile.png";
import { FaFileDownload } from "react-icons/fa";

const Home = () => {
    return (
        <div
            name="about"
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center my-20">
                    <h2 className="text-4xl sm:text-6xl font-bold text-white">
                        Software Engineer
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        Proficient in multiple high-level programming languages
                        and modern development technologies. Understanding and
                        skills in software design and code, including
                        object-oriented analysis. Collaborated across multiple
                        scrum teams and experience in software development
                        lifecycle (Agile). Bachelor of Science (B.S.) in
                        Computer Science from San Diego State University.
                    </p>
                    <div>
                        <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Resume
                            <span>
                                <FaFileDownload className="ml-1" />
                            </span>
                        </button>
                    </div>
                </div>

                <div className="w-64 h-64 mx-auto overflow-hidden ">
                    <img src={profile} alt="profile" />
                </div>
            </div>
        </div>
    );
};

export default Home;
