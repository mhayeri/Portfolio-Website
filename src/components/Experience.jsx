import React from "react";

import { experience } from "../utils/Experience/Experience";

const Experience = () => {
    return (
        <div
            name="EXPERIENCE"
            className="bg-gradient-to-b from-gray-800 to-black w-full"
        >
            <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div className=" pt-8 pb-8 text-center">
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline my-4">
                        EXPERIENCE
                    </p>
                </div>

                <div className="w-full flex flex-col flex-grow py-8 px-12 sm:px-0">
                    {experience.map(
                        ({
                            id,
                            employer_name,
                            employer_logo,
                            job_title,
                            job_description,
                            dates_employed,
                            tools,
                            style,
                        }) => (
                            <div
                                key={id}
                                className={`z-40 shadow-md hover:scale-105 duration-500 py-8 px-4 mb-8 rounded-lg ${style} flex flex-col flex-grow h-auto`}
                            >
                                <div className="flex">
                                    <p className="text-2xl font-bold">
                                        {employer_name}
                                    </p>
                                    <img
                                        src={employer_logo}
                                        alt=""
                                        className="w-20 hidden md:flex"
                                    />
                                </div>
                                <div className="my-4">
                                    <p className="mt-4 font-bold">
                                        {job_title}
                                    </p>
                                    <p>{dates_employed}</p>
                                </div>

                                <div className="flex flex-wrap space-x-2 mb-8 md:mb-0">
                                    {tools.map((tool, index) => (
                                        <img
                                            key={index}
                                            src={tool}
                                            alt="tech"
                                            className="w-10"
                                        />
                                    ))}
                                </div>
                                <div className="xl:flex flex-col">
                                    <ul className="mt-3">
                                        {job_description.map((desc, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="flex justify-between items-center h-fit py-2"
                                                >
                                                    {desc}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Experience;
