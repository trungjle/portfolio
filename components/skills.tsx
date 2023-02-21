import React from "react"
import Image from "next/image"

const Skills = () => {
    return (
        <div id="Skills" className="h-screen">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600">Skills</p>
                    <p className="py-4">These are the technologies I have worked with:</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 text-black">
                    <div className="shadow-md shadow-[#040c16] rounded-md hover:scale-110 duration-500 bg-[#ccd6f6]">
                        <Image className="mx-auto my-4" width={80} height={80} src={"/HTML.png"} alt="HTML icon" />
                        <p className="my-4">HTML</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] rounded-md hover:scale-110 duration-500 bg-[#ccd6f6]">
                        <Image className="mx-auto my-4" width={80} height={80} src={"/CSS.png"} alt="CSS icon" />
                        <p className="my-4">CSS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] rounded-md hover:scale-110 duration-500 bg-[#ccd6f6]">
                        <Image className="mx-auto my-4" width={80} height={80} src={"/React.png"} alt="React icon" />
                        <p className="my-4">React</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] rounded-md hover:scale-110 duration-500 bg-[#ccd6f6]">
                        <Image className="mx-auto my-4" width={80} height={80} src={"/TypeScript.png"} alt="TypeScript icon" />
                        <p className="my-4">TypeScript</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] rounded-md hover:scale-110 duration-500 bg-[#ccd6f6]">
                        <Image className="mx-auto my-4" width={80} height={80} src={"/AWS.png"} alt="AWS icon" />
                        <p className="my-4">AWS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] rounded-md hover:scale-110 duration-500 bg-[#ccd6f6]">
                        <Image className="mx-auto my-4" width={80} height={80} src={"/NextJS.png"} alt="NextJS icon" />
                        <p className="my-4">NextJS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] rounded-md hover:scale-110 duration-500 bg-[#ccd6f6]">
                        <Image className="mx-auto my-4" width={80} height={80} src={"/SQL.png"} alt="SQL icon" />
                        <p className="my-4">SQL</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] rounded-md hover:scale-110 duration-500 bg-[#ccd6f6]">
                        <Image className="mx-auto my-4" width={80} height={80} src={"/GitHub.png"} alt="GitHub icon" />
                        <p className="my-4">GitHub</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills