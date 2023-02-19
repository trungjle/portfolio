import React from "react"

const Contact = () => {
    return (
        <div id="Contact" className="w-full h-screen flex justify-center items-center p-4">
            <form action="https://getform.io/f/f1c86f7f-2b65-4596-bad7-26f1be4954ae" className="flex flex-col max-w-[600px] w-full" method="POST">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline-border b-4 border-pink-600 text-gray-300">
                        Contact
                    </p>
                    <p className="text-gray-300 py-4">
                        Submit the form below to contact me. Otherwise, send me an <a href="mailto:tle1911@gmail.com" className="underline">email!</a>

                    </p>
                </div>
                <input className="bg-[#ccd6f6] p-2 text-black" type="text" placeholder="Name" name="name" required={true} />
                <input className="my-4 p-2 bg-[#ccd6f6] text-black" type="email" placeholder="Email" name="email" required={true} />
                <textarea className="bg-[#ccd6f6] p-2 text-black" name="message" rows={10} placeholder="Message" required={true} />
                <br />
                <input className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3" type={"submit"} name="submit" />
            </form>

        </div>
    )
}

export default Contact