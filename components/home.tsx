import React from "react"

const Home = () => {
    return (
        <div id="Home" className="h-screen">
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-2xl text-pink-600">Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Johnny Le</h1>
                <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0]">I'm a Junior Full Stack Developer.</h2>
                <p className="text-[#8892b0] py-4 max-w[700px]">
                    Junior Software Engineer with a proven track record of delivering high-quality solutions using React, TypeScript and Python.
                    Having strong communication, collaboration, and problem-solving skills, I am passionate about staying up-to-date with emerging
                    technologies and industry trends to provide innovative solutions that drive business success
                </p>
                <div>
                </div>
            </div>
        </div>
    )
}

export default Home