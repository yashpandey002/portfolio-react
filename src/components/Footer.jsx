import React from "react";

export default function Footer() {
    return (
        <footer className="px-4 min-[375px]:px-6 md:px-8 min-[1200px]:px-0">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col items-center gap-5 lg:justify-between">
                    <div>
                        <ul className="flex gap-8">
                            <li>
                                <a
                                    href="https://twitter.com/pandeyyash_"
                                    target="_blank"
                                >
                                    <ion-icon
                                        name="logo-twitter"
                                        class="md hydrated text-[30px] text-lightGrey hover:text-[#1da1f2] duration-300"
                                        role="img"
                                        aria-label="logo twitter"
                                    ></ion-icon>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/pandeyyash/"
                                    target="_blank"
                                >
                                    <ion-icon
                                        name="logo-linkedin"
                                        class="md hydrated text-[30px] text-lightGrey hover:text-[#0077b5] duration-300"
                                        role="img"
                                        aria-label="logo linkedin"
                                    ></ion-icon>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/yashpandey002"
                                    target="_blank"
                                >
                                    <ion-icon
                                        name="logo-github"
                                        class="md hydrated text-[30px] text-lightGrey hover:text-[#2da44e] duration-300"
                                        role="img"
                                        aria-label="logo github"
                                    ></ion-icon>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.upwork.com/freelancers/~01257c6c6152f81be8"
                                    target="_blank"
                                >
                                    <img
                                        src="./upwork-icon.svg"
                                        alt="Upwork logo"
                                        className="w-[30px]"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="pb-4 text-lg text-center text-lightGrey">
                            Made with ❤️ by &lt;Yash Pandey/&gt; in beautiful
                            city of lakes, Udaipur.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
