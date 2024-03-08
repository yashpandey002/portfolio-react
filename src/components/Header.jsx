import React from "react";

export default function Header() {
    return (
        <header className="px-3 pt-5 pb-14 sm:pb-16 lg:pb-20 min-[375px]:px-6 min-[375px]:pt-6 md:px-8 md:pt-10 lg:pt-12">
            <nav className="flex items-center justify-between">
                <div>
                    <a className="text-[32px] inline-block no-underline cursor-pointer font-[700] text-lightGrey min-[375px]:text-[34px] sm:text-[36px]">
                        YP()
                    </a>
                </div>
                <div>
                    <ul className="flex items-center gap-7 sm:gap-10 lg:gap-12">
                        <li className="hidden md:block">
                            <a
                                href="https://twitter.com/pandeyyash_"
                                target="_blank"
                                className="md:text-lg lg:text-xl text-lightGrey"
                            >
                                <ion-icon
                                    name="logo-twitter"
                                    class="header__nav-icon md hydrated"
                                    role="img"
                                    aria-label="logo twitter"
                                ></ion-icon>
                            </a>
                        </li>
                        <li className="hidden md:block">
                            <a
                                href="https://www.linkedin.com/in/pandeyyash"
                                target="_blank"
                                className="text-lightGrey md:text-lg lg:text-xl"
                            >
                                <ion-icon
                                    name="logo-linkedin"
                                    class="header__nav-icon md hydrated"
                                    role="img"
                                    aria-label="logo linkedin"
                                ></ion-icon>
                            </a>
                        </li>
                        <li className="hidden md:block">
                            <a
                                href="https://github.com/yashpandey002"
                                target="_blank"
                                className="text-lightGrey md:text-lg lg:text-xl"
                            >
                                <ion-icon
                                    name="logo-github"
                                    class="header__nav-icon md hydrated"
                                    role="img"
                                    aria-label="logo github"
                                ></ion-icon>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="text-lightGrey font-[700] text-base md:text-lg"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://drive.google.com/file/d/1uVy-jLyuU4KGvITdoj83zPoq5fq1wVgJ/view?usp=sharing"
                                target="_blank"
                                className=" text-lightGrey font-[700] text-base flex items-center md:text-lg"
                            >
                                Resume
                                <span>
                                    <ion-icon
                                        name="download-outline"
                                        role="img"
                                        class="md hydrated"
                                        aria-label="download outline"
                                    ></ion-icon>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
