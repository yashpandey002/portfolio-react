import React from "react";
import Header from "../components/Header";

export default function HomeScreen() {
    return (
        <>
            <Header />
            <main>
                <section className="px-4 min-[375px]:px-6 md:px-8 min-[1100px]:px-0">
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
                                        href="#projects"
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
            </main>
        </>
    );
}
