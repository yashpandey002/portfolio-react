import React from "react";

export default function Header() {
    return (
        <header className="py-14 px-10 ">
            <nav className="flex justify-between">
                <div>
                    <a className="text-3xl inline-block no-underline cursor-pointer font-[700] text-lightGrey">
                        YP()
                    </a>
                </div>
                <div>
                    <ul className="flex gap-10">
                        <li className="hidden">
                            <a
                                href="https://twitter.com/pandeyyash_"
                                target="_blank"
                            >
                                Twitter
                            </a>
                        </li>
                        <li className="hidden">
                            <a
                                href="https://www.linkedin.com/in/pandeyyash"
                                target="_blank"
                            >
                                Linkedin
                            </a>
                        </li>
                        <li className="hidden">
                            <a
                                href="https://github.com/yashpandey002"
                                target="_blank"
                            >
                                Github
                            </a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a
                                href="https://drive.google.com/file/d/1uVy-jLyuU4KGvITdoj83zPoq5fq1wVgJ/view?usp=sharing"
                                target="_blank"
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
