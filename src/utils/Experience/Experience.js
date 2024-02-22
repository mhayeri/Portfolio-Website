import csharp from "../../assets/logos/c-sharp.png";
import css from "../../assets/logos/css.png";
import github from "../../assets/logos/github.png";
import html from "../../assets/logos/html.png";
import intellij from "../../assets/logos/intellij.png";
import java from "../../assets/logos/java.png";
import javascript from "../../assets/logos/javascript.png";
import jenkins from "../../assets/logos/jenkins.png";
import jira from "../../assets/logos/jira.png";
import mysql from "../../assets/logos/mysql.png";
import postgresql from "../../assets/logos/postgresql.png";
import python from "../../assets/logos/python.png";
import vscode from "../../assets/logos/vs-code.png";

import leidos from "../../assets/images/Leidos.png";
import northrop from "../../assets/images/northrop.png";

export const experience = [
    {
        id: 1,
        employer_name: "Leidos",
        employer_logo: leidos,
        job_title: "Software Engineer",
        job_description: [
            "Collaborated closely with cross-functional teams and contributed to the implementation of multiple features within a large-scale application using Java and SmartGWT, resulting in a 15% increase in project efficiency.",
            "Facilitated the development, implementation, and demonstration of the DIAS File Parser, a pivotal feature designed for specialized file types using Java and PostgreSQL, ensuring rigorous validation of incoming files.",
            "Led the development of comprehensive unit tests using JUnit to validate web application functionality, reducing bug reports by 20% and ensuring a reliable software product.",
            "Conducted multiple sprint planning sessions with peers to define, scope, prioritize, and build impactful features at a high velocity, ensuring minimal errors during the development process.",
            "Actively engaged in design and code reviews, contributing to the maintenance of high development standards.",
        ],
        dates_employed: "June 2021 - Aug 2023",
        tools: [java, postgresql, github, intellij],
        style: "shadow-purple-500",
    },
    {
        id: 2,
        employer_name: "Northrop Grumman",
        employer_logo: northrop,
        job_title: "Software Engineer",
        job_description: [
            "Designed and implemented a comprehensive automated test suite with 100+ tests using Python to rigorously test several proprietary applications, resulting in a 50% reduction in cycle time for hundreds of tests.",
            "Partnered with a Senior Engineer to facilitate the seamless migration of an entire project codebase from C# to Python, while meticulously preserving the integrity of all core functionalities.",
            "Supported a DevOps team to integrate automated test scripts into a CI/CD Pipeline using Jenkins, enabling more efficient management of existing software and increasing overall project efficiency by 20%.",
            "Adhered to Agile principles, actively participating in tri-weekly Sprint meetings, fostering a collaborative team environment to drive progress.",
        ],
        dates_employed: "Aug 2019 - May 2021",
        tools: [csharp, python, mysql, github, jira, jenkins],
        style: "shadow-green-500",
    },
    {
        id: 3,
        employer_name: "Sheek Media",
        employer_logo: "",
        job_title: "Frontend Web Developer",
        job_description: [
            "Collaborated with a team of developers to revamp the design and functionality of local business websites, focusing on increasing customer traffic and simultaneously enhancing SEO performance.",
            "Led a team of frontend developers to design and launch Sheek Developer+, an online course aimed at facilitating web development education and practice, attracting over 500 active users within the first month of release.",
            "Created interactive modules and animations by leveraging HTML5, CSS3, and JavaScript to foster increased user engagement and facilitate a deeper understanding of diverse subject matter.",
        ],
        dates_employed: "Jan 2018 - Aug 2018",
        tools: [html, css, javascript, github, vscode],
        style: "shadow-cyan-500",
    },
];
