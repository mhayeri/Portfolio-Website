import React from "react";

import { skills } from "../utils/Skills/Skills";

const Skills = () => {
    return (
        <div
            name="SKILLS"
            className="bg-gradient-to-b from-black to-gray-800 w-full"
        >
            <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full text-white pt-5">
                <div className=" pt-8 pb-8 text-center">
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline my-4">
                        SKILLS
                    </p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {skills.map(
                        ({ id, skill_logo, skill_name, skill_style }) => (
                            <div
                                key={id}
                                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${skill_style}`}
                            >
                                <img
                                    src={skill_logo}
                                    alt=""
                                    className="w-20 mx-auto"
                                />
                                <p className="mt-4">{skill_name}</p>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Skills;
