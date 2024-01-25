import React from "react";
import { socials } from "../utils/Socials/SocialLinks";

const SocialLinks = () => {
    return (
        <div className="hidden xl:flex flex-col top-[35%] left:-0 fixed">
            <ul>
                {socials.map(
                    ({
                        id,
                        social_media_name,
                        social_media_url,
                        social_media_colorway,
                        social_media_icon: SocialMediaIcon,
                    }) => {
                        return (
                            <li
                                key={id}
                                className={`flex justify-between items-center w-40 h-14 px-4 bg-yellow ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300 ${social_media_colorway}`}
                            >
                                <a
                                    href={social_media_url}
                                    className="flex justify-between items-center w-full text-white"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <>
                                        {social_media_name}
                                        <SocialMediaIcon size={25} />
                                    </>
                                </a>
                            </li>
                        );
                    }
                )}
            </ul>
        </div>
    );
};

export default SocialLinks;
