import { useState } from "react";
import reserve1 from "../assets/reserve1.png";
import CancelConfirm from "../components/CancelConfirm";
import { FaCalendar, FaPerson } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Confirm from "../components/Confirm";
function Reservation() {
    const [showForm, setShowForm] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [showCancel, setShowCancel] = useState(false);
    return (
        <div className="max-w-7xl mx-auto px- py-">
            <h1 className="text-center mt-2 lg:mt-10 text-6xl font-bold py">Book a table</h1>
            <div className="lg:flex grid justify-center mx-auto lg:justify-between max-w-5xl mx-auto items-center py-8 ">
                <div className="py-4 lg:px-0 px-4">
                    <img src={reserve1} alt="" className="mx-auto  border-40  border-gray-100 rounded-[0%_50%_50%_0%] w-102 h-full" />
                </div>
                <div className="grid gap-5 px-2 lg:px-10 mx-auto">
                    <div className="grid gap-2">
                        <label htmlFor="" className="text-xl">Date</label>
                        <input type="date"
                            className="bg-gray-100 rounded-lg w-62 lg:w-fit lg:px-30 px-4 py-2 lg:py-4 placeholder:text-[#A0978C]"
                            placeholder="Date"

                        />
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="" className="text-xl">Time</label>
                        <input type="time"
                            className="bg-gray-100 rounded-lg w-62 lg:w-fit lg:px-38 lg:py-4 px-4 py-2 placeholder:text-[#A0978C]"
                            placeholder="time"
                        />
                    </div>

                    <div>
                        <select className="lg:w-fit w-62 lg:px-36 px-2 py-2 lg:py-4 rounded-lg bg-gray-100">
                            <option value="">Party Size</option>
                            <option value="1">1 Person</option>
                            <option value="2">2 People</option>
                            <option value="4">4 People</option>
                            <option value="6">6 People</option>
                        </select>
                    </div>
                    <div className="flex  py-8">
                        <button
                            onClick={() => setShowForm(true)}
                            className="text-base lg:text-xl bg-orange-400 text-white w-fit px-8 lg:px-34 lg:py-4 py-2 rounded-lg mx-auto">Book Now</button>
                    </div>
                </div>

            </div>
            {/* reservaton details */}

            <div >

                {showForm && (

                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4 py-6">

                        <div className="bg-white relative rounded-2xl p-6 lg:p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                            <button
                                onClick={() => setShowForm(false)}
                                className="absolute top-4 right-4 text-xl bg-gray-100 rounded-full h-10 w-10"
                            >
                                ✕
                            </button>
                            <div className="px-10">
                                <div className="lg:flex items-center py-2 px-4 justify-between">
                                    <div className="flex gap-2 items-center">
                                        <h1 className="bg-orange-400 text-white rounded-full flex items-center justify-center lg:w-12 w-8 h-8 lg:h-12">D</h1>
                                        <h1 className="font-bold text-xl">Delizi<span className="text-orange-400">oso</span></h1>
                                    </div>

                                    <div className="lg:flex grid lg:block hidden  gap-3 items-center text-sm">
                                        <h1 className="text-white bg-orange-400 w-fit rounded-full px-6 py-2">Login</h1>
                                        <h1 className="text-white bg-green-700 w-fit rounded-full px-4 py-2">Sign Up</h1>
                                    </div>
                                </div>
                                <div className="bg-[#8AEAFF] w-fit mx-auto mt-5 mb-5 text-center px-4 py-2 lg:px-20 lg:py-4 rounded-lg ">
                                    <p>Due to limited availability, we can hold this table for you for <span className="font-bold">5:00 minutes</span></p>
                                </div>

                            </div>
                            <div className="grid lg:grid-cols-2 gap-25  items-center justify-center px-4 mt-10 ">
                                <div className="grid gap-2">

                                    <h2 className="text-2xl font-bold text-start ">
                                        Data Order
                                    </h2>

                                    <div className="grid gap-4">

                                        <div className="">
                                            <input
                                                type="text"
                                                placeholder="Enter your First name"
                                                className="bg-gray-100 w-full rounded-lg px-4 py-3"
                                            />
                                        </div>
                                        <div className="  ">
                                            <input
                                                type="text"
                                                placeholder="Enter your Last name"
                                                className="bg-gray-100 w-full rounded-lg px-4 py-3"
                                            />
                                        </div>

                                        <div className="">
                                            <input
                                                type="tel"
                                                placeholder="Enter your phone number"
                                                className="bg-gray-100 w-full rounded-lg px-4 py-3"
                                            />
                                        </div>

                                        <div className="">
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                className="bg-gray-100 w-full rounded-lg px-4 py-3"
                                            />
                                        </div>
                                        <div className="">
                                            <select className="bg-gray-100 w-full rounded-lg px-4 py-3"
                                            >
                                                <option value="">Select an accation</option>
                                                <option value="Utty">Utty</option>
                                                <option value="">Goa</option>
                                                <option value="">Mysore</option>

                                            </select>
                                        </div>
                                        <div className="">
                                            <textarea
                                                placeholder="Any special request?"
                                                className="bg-gray-100 w-full rounded-lg px-4 py-3 resize-none"
                                                rows={3}
                                            />
                                        </div>
                                        <NavLink to="/signup" className="flex gap-2">
                                            <input type="checkbox" className="rounded-lg w-8 h-8" />
                                            <label htmlFor="">
                                                Sign me up to receive dining offers and news
                                                from this restaurant by email.
                                            </label>
                                        </NavLink>
                                        <button
                                            onClick={() => {
                                                setShowForm(false);
                                                setShowConfirm(true);
                                            }}
                                            className="bg-orange-400 text-white py-3 rounded-lg text-lg font-semibold mt-2"
                                        >
                                            Confirm Reservation
                                        </button>

                                    </div>

                                </div>
                                <div className="bg-gray-100  px-4 py-4 grid gap-5 ">
                                    <h1 className="text-xl font-bold">Reservation detail</h1>

                                    <div className="flex gap-3  items-center ">
                                        <h1><FaCalendar /></h1>
                                        <h1>Saturday, 28 february 2022</h1>
                                    </div>

                                    <div className="flex gap-3  items-center">
                                        <h1><FaClock /></h1>
                                        <h1>04:30 pm</h1>

                                    </div>
                                    <div className="flex gap-3  items-center">
                                        <h1><FaPerson /></h1>
                                        <h1>2 people (Standar seating)</h1>

                                    </div>
                                    <div className="leading-7 mt-10 ">
                                        <h1 className="text-xl font-bold">Restaurant informations</h1>
                                        <p className=" ">
                                            Sed ut perspiciatis unde omnis iste natus
                                            error sit voluptatem accusantium doloremque
                                            laudantium, totam rem aperiam, eaque ipsa quae ab
                                            illo inventore veritatis
                                            et quasi architecto beatae vitae dicta sunt explicabo.
                                        </p>
                                        <p className="leading-">
                                            Neque porro quisquam est, qui dolorem ipsum quia
                                            dolor sit amet, consectetur, adipisci velit, sed
                                            quia non numquam eius modi tempora incidunt ut labore
                                            et dolore magnam
                                            aliquam quaerat voluptatem. Ut enim ad minima veniam.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                )}
                {showConfirm && (
                    <Confirm
                        setShowConfirm={setShowConfirm}
                        setShowForm={setShowForm}
                        setShowCancel={setShowCancel}

                    />
                )}
                {showCancel && (
                    <CancelConfirm
                        setShowCancel={setShowCancel}
                    />
                )}
            </div>
        </div>
    )
}

export default Reservation;