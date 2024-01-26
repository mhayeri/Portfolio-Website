import React from "react";

import { projects } from "../utils/Projects/Projects";

const Projects = () => {
    return (
        <div
            name="projects"
            className="bg-gradient-to-b from-gray-800 to-black w-full text-white pb-8"
        >
            <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pt-8 pb-8">
                    <p className="text-6xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {projects.map(
                        ({
                            id,
                            project_image,
                            project_url,
                            project_name,
                            project_description,
                        }) => (
                            <div
                                key={id}
                                className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
                            >
                                <img
                                    src={project_image}
                                    alt=""
                                    className="rounded-md w-full h-full duration-200 hover:scale-105 object-cover"
                                    style={{ width: "100%", height: "250px" }}
                                />
                                <div className="p-2 flex-grow flex flex-col justify-between">
                                    <div>
                                        <p className="font-bold text-2xl text-center">
                                            {project_name}
                                        </p>
                                        <p className="my-2">
                                            {project_description}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-center mt-auto">
                                        <a
                                            href={project_url}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <button className="px-6 py-4 m-4 text-white flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-300">
                                                View Code
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Projects;
