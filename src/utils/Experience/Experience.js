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
            "Collaborated with cross-functional teams to add new features in a large-scale, cryptographic key management web application using Java, SmartGWT, and PostgreSQL.",
            "Developed RESTful APIs in Java to enhance data exchange between front-end and backend systems, boosting application performance.",
            "Utilized JUnit for unit testing to validate API functionality and achieve extensive code coverage, leading to a 20% decrease in bug reports.",
            "Facilitated sprint planning sessions with peers to define, scope, prioritize, and build impactful features at high velocity.",
            "Contributed to design, documentation, and code reviews, ensuring alignment with high development standards.",
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
            "Diagnosed critical C# performance issues across two major customer-side applications using Python test scripting and Robot Framework.",
            "Developed over 100 test automation scripts by creating REST endpoints in C# and utilizing Robot Framework in Python, significantly decreasing testing time from over a week to mere minutes.",
            "Utilized Jenkins for seamless integration of automated testing into CI/CD pipeline, enhancing software management efficiency and reducing production time by 40%.",
            "Participated in design sessions and sprint plannings to align team capabilities with business requirements and prioritize objectives.",
        ],
        dates_employed: "Aug 2019 - June 2021",
        tools: [csharp, python, mysql, github, jira, jenkins],
        style: "shadow-green-500",
    },
    {
        id: 3,
        employer_name: "Sheek Media",
        employer_logo: "",
        job_title: "Frontend Web Developer",
        job_description: [
            "Led a team of frontend developers to design and launch Sheek Developer+, an online course aimed at facilitating web development education and practice, attracting over 500 active users within the first month of release.",
            "Leveraged HTML, CSS, and JavaScript to create interactive modules and animations in order to enhance user engagement and understanding.",
            "Redesigned and improved functionality of three local business websites to boost customer traffic and optimize SEO performance.",
        ],
        dates_employed: "Jan 2018 - Aug 2018",
        tools: [html, css, javascript, github, vscode],
        style: "shadow-cyan-500",
    },
];
