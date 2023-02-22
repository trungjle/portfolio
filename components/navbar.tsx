"use client"

import React, { useState } from "react"
import { AiOutlineMenu, AiOutlineClose, AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai"
import { BsFillPersonLinesFill } from "react-icons/bs"
import LinkButton from "./linkButton"

export default function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="fixed top-0 w-full ease-in duration-300 bg-[#0a192f]">
            <div className="max-w-[1500px] m-auto flex justify-between items-center p-6">

                <h1 className="font-bold text-2xl">
                    @trungjle
                </h1>

                <ul className="hidden sm:flex space-x-6">
                    <LinkButton to="Home">Home</LinkButton>
                    <LinkButton to="About">About</LinkButton>
                    <LinkButton to="Skills">Skills</LinkButton>
                    <LinkButton to="Contact">Contact</LinkButton>
                </ul>
                <div className="hidden max-sm:hidden max-xl:flex space-x-4">
                    <a href="https://linkedin.com/in/trungjle/">
                        <AiFillLinkedin size={25} className="hover:text-blue-400" />
                    </a>
                    <a href="https://github.com/trungjle/">
                        <AiFillGithub size={25} className="hover:text-blue-400" />
                    </a>
                    <a href="mailto:tle1911@gmail.com">
                        <AiOutlineMail size={25} className="hover:text-blue-400" />
                    </a>
                    <a href="">
                        <BsFillPersonLinesFill size={25} className="hover:text-blue-400" />
                    </a>
                </div>

                {/* Social Icons */}

                <div className="hidden xl:flex fixed flex-col top-[35%] left-0">
                    <ul>
                        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] duration-300 bg-blue-600">
                            <a className="flex justify-between items-center w-full mx-[14px] text-gray-300" href="http://linkedin.com/in/trungjle">
                                LinkedIn <AiFillLinkedin size={30} />
                            </a>
                        </li>
                        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] duration-300 bg-[#333333]">
                            <a className="flex justify-between items-center w-full mx-[14px] text-gray-300" href="https://github.com/trungjle/">
                                GitHub <AiFillGithub size={30} />
                            </a>
                        </li>
                        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] duration-300 bg-[#6fc2b0]">
                            <a className="flex justify-between items-center w-full mx-[14px] text-gray-300" href="mailto:tle1911@gmail.com">
                                Email <AiOutlineMail size={30} />
                            </a>
                        </li>
                        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] duration-300 bg-[#565f69]">
                            <a className="flex justify-between items-center w-full mx-[14px] text-gray-300" href="/CV.pdf">
                                CV <BsFillPersonLinesFill size={30} />
                            </a>
                        </li>
                    </ul>
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
                        ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in-out duration-300 color: bg-[#0a192f]"
                        : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in-out duration-300"
                }
                >
                    <ul className="text-xl">
                        <LinkButton to="Home" onClick={handleNav}>Home</LinkButton>
                        <LinkButton to="About" onClick={handleNav}>About</LinkButton>
                        <LinkButton to="Skills" onClick={handleNav}>Skills</LinkButton>
                        <LinkButton to="Contact" onClick={handleNav}>Contact</LinkButton>
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
                                <a href="/CV.pdf">
                                    <BsFillPersonLinesFill size={25} />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div >
        </div >
    )
}