import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import LinkButton from "./LinkButton";

export const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
            <div className="max-w-[1500px] m-auto flex justify-between items-center p-6">
                <Link href="/">
                    <h1 className="font-bold text-2xl">
                        Johnny Le
                    </h1>
                </Link>
                <ul className="hidden sm:flex space-x-6">
                    <LinkButton href="/" buttonName="Home" />
                    <LinkButton href="/#experience" buttonName="Experience" />
                    <LinkButton href="/#portfolio" buttonName="Portfolio" />
                    <LinkButton href="/#contact" buttonName="Contact" />
                </ul>
                <div className="hidden sm:flex space-x-4">
                    <a href="https://www.linkedin.com/in/trungjle/">
                        <AiFillLinkedin size={25} className="hover:text-blue-400" />
                    </a>
                    <a href="https://github.com/trungjle/">
                        <AiFillGithub size={25} className="hover:text-blue-400" />
                    </a>
                    <a href="mailto:tle1911@gmail.com">
                        <AiOutlineMail size={25} className="hover:text-blue-400" />
                    </a>
                </div>

                {/* Mobile Button */}
                <div onClick={handleNav} className="block sm:hidden z-10">
                    {nav ? (
                        <AiOutlineClose size={20} />
                    ) : (
                        <AiOutlineMenu size={20} />
                    )}
                </div>
                {/* Mobile Menu */}
                <div className={
                    nav
                        ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in-out duration-300"
                        : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in-out duration-300"
                }
                >
                    <ul className="text-xl">
                        <LinkButton href="/" buttonName="Home" onClick={handleNav} />
                        <LinkButton href="/#experience" buttonName="Experience" onClick={handleNav} />
                        <LinkButton href="/#portfolio" buttonName="Portfolio" onClick={handleNav} />
                        <LinkButton href="/#contact" buttonName="Contact" onClick={handleNav} />
                        <li className="mt-6">
                            <div className="flex justify-center items-center space-x-5">
                                <a href="https://www.linkedin.com/in/trungjle/">
                                    <AiFillLinkedin size={25} className="hover:text-blue-400" />
                                </a>
                                <a href="https://github.com/trungjle/">
                                    <AiFillGithub size={25} className="hover:text-blue-400" />
                                </a>
                                <a href="mailto:tle1911@gmail.com">
                                    <AiOutlineMail size={25} className="hover:text-blue-400" />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div >
        </div >
    );
};

export default Navbar;