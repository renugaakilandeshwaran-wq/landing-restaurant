import contact1 from "../assets/contact1.png";
function Contact() {
    return (
        <div className="max-w-7xl mx-auto px-8 lg:px-4 mt-9">
            <div className="leading-">
                <h1 className="text-2xl lg:text-6xl font-bold py-2 text-center">
                    Contact Us
                </h1>
                <p className="text-[#5C4529] py-4 text-center lg:text-xl">We love hearing from our customers. Feel free to share your experience or ask any questions you may have.</p>
            </div>

            <div className="grid gap-5 max-w-mx- py-4">
                <div className="grid  justify-center gap-5 items-center py-8 ">
                    <div className="lg:flex grid gap-5">
                        <div>
                            <input type="text"
                                className="bg-gray-100 w-fit rounded-lg py-2 px-4 lg:px-30 py-4  placeholder:text-[#A0978C]"
                                placeholder="First name"
                            />
                        </div>
                        <div>
                            <input type="text"
                                className="bg-gray-100 w-full  rounded-lg py-2 px-4 lg:px-30 py-4  placeholder:text-[#A0978C]"
                                placeholder="Last name"
                            />
                        </div>
                    </div>
                    <div className="lg:flex grid gap-5">
                        <div>
                            <input type="email"
                                className="bg-gray-100 w-fit rounded-lg py-2 px-4 lg:px-30 py-4 placeholder:text-[#A0978C]"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <input type="text"
                                className="bg-gray-100 w-full  rounded-lg py-2 lg:px-30 py-4 px-4  placeholder:text-[#A0978C]"
                                placeholder="Subject"
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <textarea placeholder="Message" className="w-full h-42 lg:h-52 rounded-lg px-4 py-4   resize-none placeholder:text-[#A0978C] bg-gray-100" >
                        </textarea>
                    </div>
                </div>
                <div className="text-center py-4 lg:py-8">
                    <button className="w-fit lg:px-30 px-16 py-3  lg:py-4 text-white bg-orange-400 rounded-lg">Submit</button>
                </div>
            </div>
            <div className="pt-10">
                <img src={contact1} alt="" className="overflow-hidden w-full object-contain mx-auto rounded-lg" />
            </div>
        </div>
    )
}

export default Contact;