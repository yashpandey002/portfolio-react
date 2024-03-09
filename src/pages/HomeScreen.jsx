import React, { useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

export default function HomeScreen() {
    const [emailCopyStatus, setEmailCopyStatus] = useState("");
    const emailRef = useRef(null);
    const email = "pandeyyash002@gmail.com";

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText(email);
        setEmailCopyStatus("Email copied");
    };

    const handleEmailButtonClick = () => {
        copyEmailToClipboard();
        setTimeout(() => setEmailCopyStatus(""), 3000); // Clear status after 3 seconds
    };

    const projects = [
        {
            projectId: 1,
            projectName: "Yash-Server",
            skillsUsed: [
                "MERN stack",
                "React state management",
                "REST API",
                "CORS",
                "Tailwind CSS",
                "Validation with ZOD",
            ],
            projectDesc:
                "A Full-stack application for adding and viewing user profiles, built using MERN stack.",
            githubLink: "https://github.com/yashpandey002/yash-server",
            liveLink: "https://yash-server.netlify.app/",
            imgSrc: "./yash-server-screen.png",
        },
        {
            projectId: 2,
            projectName: "Resume-Builder",
            skillsUsed: ["React", "React state management", "React Components"],
            projectDesc:
                "A Form-based Resume builder built using React thatto helps building tech resume quickly.",
            githubLink: "https://github.com/yashpandey002/resume-builder",
            liveLink: "https://tech-resume-builder-by-yash-pandey.vercel.app/",
            imgSrc: "./buildResume-screen.png",
        },
        {
            projectId: 3,
            projectName: "Etch-a-Sketch",
            skillsUsed: [
                "Vanilla Javascript",
                "Complex Mouse Events",
                "DOM manipulation",
                "Dynamic Grid",
                "Different color modes",
            ],
            projectDesc:
                "Browser version of something between a sketchpad and an Etch-A-Sketch. Built with Vanilla Javascript.",
            githubLink: "https://github.com/yashpandey002/esketch",
            liveLink: "https://yashpandey002.github.io/esketch/",
            imgSrc: "./esketch-screen.png",
        },
        {
            projectId: 4,
            projectName: "Rock Paper Scissors",
            skillsUsed: [
                "Vanilla Javascript",
                "DOM manipulation",
                "Game logic",
            ],
            projectDesc:
                "The classic game of Rock Paper Scissors, built using Vanilla Javascript can be played against Computer.",
            githubLink:
                "https://github.com/yashpandey002/rock-paper-scissors-game",
            liveLink:
                "https://yashpandey002.github.io/rock-paper-scissors-game/",
            imgSrc: "./rps-screen.png",
        },
    ];

    return (
        <>
            <Header />
            <main>
                <section
                    id="hero-section"
                    className="px-4 min-[375px]:px-6 md:px-8 min-[1100px]:px-0 pb-16 md:pb-32"
                >
                    <div className="max-w-[1100px] mx-auto">
                        <div className="mb-4 sm:mb-[18px] lg:mb-[20px]">
                            <h2 className="flex items-center justify-between text-sm text-white min-[375px]:justify-normal min-[375px]:gap-4 lg:gap-8 font-[700]">
                                <span>I&apos;m Yash Pandey</span>
                                <svg
                                    height="1"
                                    className="fill-white w-[20px] sm:w-[40px]"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M0 0h66v4H0z"
                                    ></path>
                                </svg>
                                <span>Creative Web Developer</span>
                            </h2>
                        </div>
                        <div className="mb-8">
                            <h1 className="text-5xl font-[800] text-white leading-[120%] sm:text-6xl lg:text-8xl lg:font-[700] md:pr-32 sm:leading-[125%] lg:leading-[130%]">
                                I convert your ideas to{" "}
                                <span className="text-gradient">
                                    Full-stack
                                </span>{" "}
                                web apps
                            </h1>
                        </div>
                        <div>
                            <div className="flex flex-col md:flex-row md:gap-8 lg:gap-16">
                                <div className="mb-6 md:mb-0">
                                    <img
                                        src="./yash-pandey.png"
                                        alt="Yash Pandey smiling"
                                        className="w-[200px] md:w-[240px] lg:w-[286px]"
                                    />
                                </div>
                                <div className="relative">
                                    <p className="max-w-[592px] font-base text-lightGrey font-openSans tracking-wider font-[400] leading-[170%] mb-6  sm:mb-8">
                                        Namaste, I am Yash Pandey, a Full-stack
                                        web developer based in Udaipur, India
                                        and I love solving problems using Design
                                        & Code. Experienced in building
                                        Full-stack solutions using MERN stack.
                                        Ready to adapt fast-moving work
                                        environment. Passionate about learning,
                                        sharing, and building with the
                                        community.
                                    </p>
                                    <a
                                        href="#projects-section"
                                        className="cta-primary inline-block px-4 py-3 uppercase rounded-md cta-primary-bg font-[700] text-white text-base lg:text-lg lg:py-5 lg:px-7 relative z-10 rotate-[0] md:rotate-[-3deg]"
                                    >
                                        See my projects
                                    </a>
                                    <img
                                        src="./hero-arrow.svg"
                                        className="hidden hero-arrow md:block"
                                        alt="Moving arrow pointing towards button"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    id="techstack-section"
                    className="px-4 min-[375px]:px-6 md:px-8 min-[1200px]:px-0 pb-16 md:pb-32"
                >
                    <div className="max-w-[1200px] mx-auto">
                        <div className="mb-4 sm:mb-8 lg:mb-10">
                            <h2 className="text-lightGrey text-3xl font-[700] sm:text-4xl md:text-6xl">
                                My{" "}
                                <span className="text-gradient">
                                    Tech-stack
                                </span>
                            </h2>
                        </div>
                        <div>
                            <div className="flex flex-wrap gap-5 mb-4 sm:mb-6 md:gap-8">
                                <img
                                    src="./javascript.svg"
                                    alt="Javascript"
                                    className="skill-icon floatingAnimationLow h-[25px] sm:h-[35px] lg:h-[50px]"
                                />
                                <img
                                    src="./react.svg"
                                    alt="React"
                                    className="skill-icon floatingAnimationMedium h-[25px] sm:h-[35px] lg:h-[50px]"
                                />
                                <img
                                    src="./express.svg"
                                    alt="Express"
                                    className="skill-icon floatingAnimationLow h-[25px] sm:h-[35px] lg:h-[50px]"
                                />
                                <img
                                    src="./mongo-db.svg"
                                    alt="MongoDb"
                                    className="skill-icon floatingAnimationMedium h-[25px] sm:h-[35px] lg:h-[50px]"
                                />
                                <img
                                    src="./node.svg"
                                    alt="Node"
                                    className="skill-icon floatingAnimationLow h-[25px] sm:h-[35px] lg:h-[50px]"
                                />
                            </div>
                            <div className="flex flex-wrap gap-4 md:gap-8">
                                <img
                                    src="./tailwind.svg"
                                    alt="Tailwind"
                                    className="skill-icon floatingAnimationMedium h-[25px] sm:h-[35px] lg:h-[50px]"
                                />
                                <img
                                    src="./sass.svg"
                                    alt="SCSS"
                                    className="skill-icon floatingAnimationLow h-[25px] sm:h-[35px] lg:h-[50px]"
                                />
                                <img
                                    src="./html.svg"
                                    alt="HTML"
                                    className="skill-icon floatingAnimationMedium h-[25px] sm:h-[35px] lg:h-[50px]"
                                />
                                <img
                                    src="./css.svg"
                                    alt="CSS"
                                    className="skill-icon floatingAnimationLow h-[25px] sm:h-[35px] lg:h-[50px]"
                                />
                                <img
                                    src="./npm.svg"
                                    alt="NPM"
                                    className="skill-icon floatingAnimationMedium h-[25px] sm:h-[35px] lg:h-[50px]"
                                />
                                <img
                                    src="./github.svg"
                                    alt="Github"
                                    className="skill-icon floatingAnimationLow h-[25px] sm:h-[35px] lg:h-[50px]"
                                />
                                <img
                                    src="./git.svg"
                                    alt="Git"
                                    className="skill-icon floatingAnimationMedium h-[25px] sm:h-[35px] lg:h-[50px]"
                                />
                                <img
                                    src="./figma.svg"
                                    alt="Figma"
                                    className="skill-icon floatingAnimationLow h-[25px] sm:h-[35px] lg:h-[50px]"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    id="projects-section"
                    className="px-4 min-[375px]:px-6 md:px-8 min-[1200px]:px-0 mb-20 md:mb-32"
                >
                    <div className="max-w-[1200px] mx-auto">
                        <div className="mb-6 sm:mb-8 md:mb-12 lg:mb-16">
                            <h2 className="text-lightGrey text-3xl font-[700] sm:text-4xl md:text-6xl">
                                <span className="text-gradient">Projects</span>{" "}
                                I worked on
                            </h2>
                        </div>
                        <div className="flex flex-col gap-12 md:gap-20 lg:gap-32">
                            {projects.map((project) => (
                                <ProjectCard
                                    key={project.projectId}
                                    projectName={project.projectName}
                                    projectDesc={project.projectDesc}
                                    githubLink={project.githubLink}
                                    liveLink={project.liveLink}
                                    imgSrc={project.imgSrc}
                                    skillsUsed={project.skillsUsed}
                                />
                            ))}
                        </div>
                    </div>
                </section>
                <section
                    id="contact-section"
                    className="relative mb-20 md:mb-32 lg:mb-40"
                >
                    <div className="w-[90%] md:w-[80%] bg-gradient mx-auto rounded-lg px-5 py-8 md:px-8 md:py-10 lg:px-0 lg:py-0">
                        <div className="flex">
                            <div className="lg:py-16 lg:pl-16">
                                <h2 className="text-3xl font-[800] text-white sm:text-4xl lg:text-7xl mb-2">
                                    Let&apos;s Be In Touch
                                </h2>
                                <p className="mb-8 text-base text-white font-openSans lg:max-w-[400px]">
                                    I&apos;m open to hearing about new
                                    opportunities. Feel free to reach out to me
                                    via{" "}
                                    <a
                                        href="https://twitter.com/pandeyyash_"
                                        target="_blank"
                                    >
                                        <strong>Twitter</strong>
                                    </a>{" "}
                                    or{" "}
                                    <a
                                        href="https://www.linkedin.com/in/pandeyyash/"
                                        target="_blank"
                                    >
                                        <strong>Linkedin</strong>
                                    </a>{" "}
                                    if you have a question, or just want to say
                                    hi!
                                </p>
                                <button
                                    className="w-[100%] py-2 text-white border border-white relative email-btn pl-4 min-[375px]:pl-[30px] sm:w-[50%] lg:w-[300px] contact__email hover:border-[#592c42] transition-colors duration-300"
                                    ref={emailRef}
                                    onClick={handleEmailButtonClick}
                                >
                                    <ion-icon
                                        name="mail-outline"
                                        role="img"
                                        class="md hydrated absolute top-[50%] translate-y-[-50%] left-[5px] min-[375px]:left-[10px]"
                                        aria-label="mail outline"
                                    ></ion-icon>
                                    pandeyyash002@gmail.com
                                    <span className="hide-with-animation contact__email-cta">
                                        {emailCopyStatus ||
                                            "Click to Copy Email"}
                                    </span>
                                </button>
                            </div>
                            <div className="hidden ml-auto lg:flex">
                                <img
                                    src="./contact-illustration.svg"
                                    alt="Man chatting with friends"
                                    className="self-end"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
