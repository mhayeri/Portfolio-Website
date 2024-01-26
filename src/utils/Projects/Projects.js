import Campfinder from "../../assets/images/CampFinder.png";
import Netflix from "../../assets/images/Netflix.png";
import Portfolio from "../../assets/images/Portfolio.png";
import LeetCode from "../../assets/images/LeetCode.png";

export const projects = [
    {
        id: 1,
        project_image: Campfinder,
        project_url: "https://github.com/mhayeri/CampFinder",
        project_name: "CampFinder",
        project_description:
            "A full-stack application that replicates key features of Yelp. Allows users to create an account in order to discover, review, and manage campgrounds and reviews.",
    },
    {
        id: 2,
        project_image: Netflix,
        project_url: "https://github.com/mhayeri/Netflix-Clone",
        project_name: "Netflix Clone",
        project_description:
            "A Netflix clone built using React.js, Webhooks, CSS, Firestore, and Stripe Checkout. Movie data is fetched from the TMDb API.",
    },
    {
        id: 3,
        project_image: Portfolio,
        project_url: "https://github.com/mhayeri/Portfolio-Website",
        project_name: "Portfolio Website",
        project_description:
            "A portfolio website built using React.js and Tailwind CSS that showcases my work experience, technical skills and projects.",
    },
    {
        id: 4,
        project_image: LeetCode,
        project_url: "https://github.com/mhayeri/Technical-Interview",
        project_name: "Techincal-Interview",
        project_description:
            "Solutions to commonly asked LeetCode problems in Java. Tracking progress for technical interview preparation.",
    },
];
