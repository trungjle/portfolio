import React from "react"
const About = () => {
    return (
        <div id="About" className="w-full h-screen text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="xl:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                            About
                        </p>
                    </div>
                </div>
                <div className="max-w-[1000px] w-full grid xl:grid-cols-2 gap-8 px-4">
                    <div className="xl:text-right text-4xl font-bold">
                        <p>
                            Hi, I am Johnny, and it's nice to meet you!
                        </p>
                    </div>
                    <div>
                        <p>
                            I am currently a Junior Software Engineer at Eventsforce and
                            I love to build software that improves the lives of those around me.
                        </p>
                        <br />
                        <p>
                            My hobbies are playing video games, reading books and exercising regularly at the gym!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About