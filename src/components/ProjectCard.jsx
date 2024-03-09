import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function ProjectCard({
    projectName,
    projectDesc,
    githubLink,
    liveLink,
    imgSrc,
    skillsUsed,
}) {
    let id = 0;
    Aos.init();
    return (
        <figure
            className="aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1500"
        >
            <div className="flex flex-col-reverse gap-4 sm:gap-7 lg:flex-row lg:justify-between lg:gap-12">
                <div className="flex flex-col gap-4 lg:gap-6">
                    <div>
                        <h4 className="text-2xl text-white font-[700] sm:text-3xl">
                            {projectName}
                        </h4>
                        <p className="text-base md:text-lg text-lightGrey font-openSans">
                            {projectDesc}
                        </p>
                    </div>
                    <div>
                        <ul className="flex flex-wrap gap-2">
                            {skillsUsed.map((skill) => (
                                <li
                                    className="px-2 py-1 text-xs rounded md:text-base text-mainGrey bg-lightGrey font-[700]"
                                    key={id++}
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center gap-4">
                        <a
                            href={githubLink}
                            className="inline-block text-[28px] leading-[0px] sm:text-[32px]"
                            target="_blank"
                        >
                            <ion-icon
                                name="logo-github"
                                class="hydrated fill-lightGrey hover:fill-[#2da44e] transition-colors duration-300"
                                role="img"
                                aria-label="logo github"
                            ></ion-icon>
                        </a>
                        <a
                            href={liveLink}
                            className="flex gap-[2px] text-base py-[2px] px-[4px] bg-gradient items-center font-[700] leading-[1.15] hover:skew-x-[-20deg] transition duration-300"
                            target="_blank"
                        >
                            <span>View Live</span>
                            <img
                                src="./arrow-right.png"
                                alt="Arrow pointing right"
                            />
                        </a>
                    </div>
                </div>
                <div>
                    <a href={liveLink} target="_blank">
                        <img
                            src={imgSrc}
                            alt={`Screenshot of ${projectName} Project`}
                            className="w-[100%] hover:scale-[1.03] transition duration-300 lg:w-[692px] max-w-[692px]"
                        />
                    </a>
                </div>
            </div>
        </figure>
    );
}
