import React from "react";

const Contact = () => {
    return (
        <div
            name="contact"
            className="p-4 text-white bg-gradient-to-b from-black to-gray-800 w-full h-screen"
        >
            <div className="flex flex-col p-4 justify-center max-w-screen-xl mx-auto h-full">
                <div className="pb-8 text-center">
                    <p className="text-6xl font-bold inline border-b-4 border-gray-500">
                        Contact
                    </p>
                    <p className="py-6">Get in touch with me!</p>
                </div>

                <div className="flex justify-center items-center">
                    <form
                        action="https://getform.io/f/3411fdf6-2b8f-4ca0-b5a3-dde3de076c62"
                        method="POST"
                        className="flex flex-col w-full md:w-1/2"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="p-2 my-6 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <textarea
                            name="message"
                            rows="10"
                            placeholder="Message"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        ></textarea>
                        <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
