import React from "react";
import profile from "../assets/images/profile.png";
import { FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
    return (
        <div
            name="HOME"
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-screen px-4 md:flex-row ">
                <div className="flex flex-col justify-center my-10 sm:my-20 px-4 mt-32 md:mt-0">
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
                    <div className="flex flex-col md:flex-row md:justify-between md:space-x-3">
                        <a
                            href="/MustafaResume.pdf"
                            download="Mustafa_Hayeri_Resume.pdf"
                        >
                            <button className="text-white w-full md:w-auto px-6 py-3 my-2 flex justify-center items-center rounded-md bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer hover:scale-105 duration-300">
                                Resume
                                <span className="ml-2 hidden md:inline-block">
                                    <FaFileDownload className="ml-1" />
                                </span>
                            </button>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mustafa-hayeri/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className="text-white w-full md:w-auto px-6 py-3 my-2 flex justify-center items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-300">
                                LinkedIn
                                <span className="ml-2 hidden md:inline-block">
                                    <FaLinkedin className="ml-1" />
                                </span>
                            </button>
                        </a>
                        <a
                            href="https://github.com/mhayeri"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className="text-white w-full md:w-auto px-6 py-3 my-2 flex justify-center items-center rounded-md bg-gradient-to-r from-green-400 to-green-600 cursor-pointer hover:scale-105 duration-300">
                                Github
                                <span className="ml-2 hidden md:inline-block">
                                    <FaGithub className="ml-1" />
                                </span>
                            </button>
                        </a>
                    </div>
                </div>

                <div className="w-48 h-48 md:w-72 md:h-72 mx-auto overflow-hidden">
                    <img src={profile} alt="profile" />
                </div>
            </div>
        </div>
    );
};

export default Home;
