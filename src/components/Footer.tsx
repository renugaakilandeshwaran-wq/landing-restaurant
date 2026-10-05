import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <div>
            <div className="bg-[#311F09] max-w-6xl mx-auto mt-20">
                <div className="grid lg:grid-cols-[2fr_1fr_1fr_1fr] gap-5 px-8 lg:px-12 lg:py-4 items-center lg:justify-center">
                    <div className="lg:items-center lg:p-5 p-4 grid gap-5 lg:gap-10">
                        <div className="flex items-center gap-2 ">
                            <h1 className="text-white bg-orange-400 px-5 py-3 text-4xl items-center text-center font-bold rounded-full">D</h1>
                            <h1 className="font-bold text-xl text-white">Delizi<span className="text-orange-400">oso</span></h1>
                        </div>
                        <div>
                            <p className="text-white font-sans ">Viverra gravida morbi egestas facilisis tortor netus non duis tempor.  </p>
                        </div>
                        <div className="flex lg:items-center gap-5">
                            <div className="bg-white rounded-full flex items-center justify-center  w-fit p-4">
                                <FaTwitter className="" />

                            </div>
                            <div className="bg-white rounded-full flex items-center justify-center  w-fit p-4">
                                <FaInstagram className="" />

                            </div> <div className="bg-white rounded-full flex items-center justify-center  w-fit p-4">
                                <FaFacebook className="" />

                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:items-center grid gap-5">
                        <h1 className="text-2xl text-orange-400 font-bold">Page</h1>
                        <div className="grid gap-3">
                            <NavLink to="/home" className="text-white text-xl">
                                Home
                            </NavLink>
                            <NavLink to="/menu" className="text-white text-xl">
                                Menu
                            </NavLink>
                            <NavLink to="/orders" className="text-white text-xl">
                                Order Online
                            </NavLink>
                            <NavLink to="/catering" className="text-white text-xl">
                                Catering
                            </NavLink>
                            <NavLink to="/reservation" className="text-white text-xl">
                                Reservation
                            </NavLink>
                        </div>
                    </div>
                    <div className="grid lg:p-5 p-4">
                        <h1 className="text-2xl text-orange-400 font-bold">Informaion</h1>
                        <div className="grid gap-5 py-10">
                            <NavLink to="/about" className="text-white text-xl">
                                About Us
                            </NavLink>
                            <NavLink to="/testimonial" className="text-white text-xl">
                                Testimonial
                            </NavLink>
                            <NavLink to="/event" className="text-white text-xl">
                                Event
                            </NavLink>
                        </div>
                    </div>
                    <div className="grid gap-5 p-5">
                        <h1 className="text-2xl text-orange-400 font-bold">Get in touch</h1>
                        <p className="text-white text-xl">3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat</p>
                        <h1 className="text-white text-xl">delizioso@gmail.com</h1>
                        <h1 className="text-white text-xl">+123 4567 8901</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;