import { FaArrowAltCircleLeft, FaLocationArrow } from "react-icons/fa";
import map1 from "../assets/map1.png"
import { useState } from "react";
function Order() {
    const [agreeTerms, setAgreeTerms] = useState(false);

    return (
        <div>

            <div className="max-w-7xl  mx-auto lg:px-4 px-8">

                <div className="flex lg:px-0 px-2 max-w-4xl mx-auto lg:mt-10 mt-2 items-center justify-center  lg:gap-60 gap-15 py-10">
                    <FaArrowAltCircleLeft className="lg:text-3xl text-xl" />

                    <h1 className="text-2xl lg:text-6xl  font-bold text-center px-2 ">Checkout</h1>

                </div>
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-2xl font-bold py-4">Order Data</h1>
                    <div className="grid gap-5">
                        <div className="lg:flex grid gap-5 justify-between  ">
                            <div>
                                <input type="text" placeholder="First name" className=" lg:w-82 w-fit    bg-gray-100 rounded-lg px-8 py-2 " />
                            </div>
                            <div>
                                <input type="text" placeholder="Last name" className="bg-gray-100 rounded-lg px-8 py-2 w-fit lg:w-82" />

                            </div>
                        </div>
                        <div className="lg:flex gap-5 grid  justify-between ">
                            <div>
                                <input type="number" placeholder="Phone number" className="bg-gray-100 rounded-lg px-8 py-2 lg:w-82 w-fit" />
                            </div>
                            <div>
                                <input type="email" placeholder="Email Address" className="bg-gray-100 rounded-lg px-8 py-2 w-fit lg:w-82" />
                            </div>

                        </div>
                        <div>
                            <textarea name="" id="" className="h-[120px] bg-gray-100 w-62 lg:w-188 px-8 lg:px-4 py-4">Note</textarea>
                        </div>
                    </div>
                    <div className="py-5 px-4 lg:px-0">
                        <div>
                            <h1 className="text-xl font-bold">Order Time</h1>
                            <div className="flex lg:gap-10  items-center gap-5 py-5">
                                <div className="flex items-center gap-3">
                                    <input type="radio"
                                        name="orderType"
                                        value="now"
                                        className="lg:h-6 lg:w-6  w-4 h-4"

                                    />
                                    <label htmlFor="" className="text-[#5C4529] text-xs lg:text-base">Order Now</label>

                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="radio"
                                        name="orderType"
                                        value="later"
                                        className="lg:h-6 lg:w-6  w-4 h-4"

                                    />
                                    {/* Dropdown */}
                                    <select className="text-[#5C4529] lg:px-3 lg:py-2 text-xs lg:text-base">
                                        <option className="text-[#5C4529]">Order Later</option>
                                        <option>10:00 AM</option>
                                        <option>11:00 AM</option>
                                        <option>12:00 PM</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex lg:gap-15 gap-9 items-center">
                                <div className="flex items-center gap-3">
                                    <input
                                        type="radio"
                                        name="delivery Mode"
                                        value="deleivery"
                                        className="lg:h-6 lg:w-6  w-4 h-4"
                                    />
                                    <label htmlFor="" className="text-[#5C4529] text-xs lg:text-base">Delivery</label>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <input type="radio"
                                        name="delivery Mode"
                                        value="take a way"
                                        className="lg:h-6 lg:w-6  w-4 h-4"
                                    />
                                    <label htmlFor="" className="px-3 text-[#5C4529] text-xs lg:text-base">Take a way</label>
                                </div>
                            </div>
                        </div>
                        <div className="py-5">
                            <h1 className="text-xl font-bold py-4 ">Payment Method</h1>
                            <div className="flex  gap-3 items-center px-6 py-6">
                                <input type="radio"
                                    className="lg:h-6 lg:w-6  w-4 h-4"
                                    value="cash on delivery"
                                    name="payment Method"
                                />
                                <label htmlFor="" className="text-[#5C4529] text-sm lg:text-base">Cash On Delivery</label>
                            </div>
                            <div className="flex  gap-3 items-center px-6 py-6">
                                <input type="radio"
                                    className="lg:h-6 lg:w-6  w-4 h-4"
                                    value="banktransfer"
                                    name="payment Method"
                                />
                                <label htmlFor="" className="text-[#5C4529] text-sm lg:text-base">BCA Virtual Account</label>
                            </div>
                            <div className="flex  gap-3 items-center px-6 py-6">
                                <input type="radio"
                                    className="lg:h-6 lg:w-6  w-4 h-4"
                                    value="card"
                                    name="payment Method"
                                />
                                <label htmlFor="" className="text-[#5C4529] text-sm lg:text-base">Credit Card</label>
                            </div>
                            <div className="flex  gap-3 items-center px-6 py-6">
                                <input type="radio"
                                    className="lg:h-6 lg:w-6  w-4 h-4"
                                    value="card"
                                    name="payment Method"
                                />
                                <label htmlFor="" className="text-[#5C4529] text-sm lg:text-base">Transfer Bank</label>
                            </div>
                        </div>
                        <div className="flex gap-3 py-4 items-center">
                            <input type="checkbox"
                                checked={agreeTerms}
                                onChange={(e) => setAgreeTerms(e.target.checked)}
                                className="w-6 h-6 rounded-lg"
                            />
                            <label className="text-sm lg:text-base">
                                Choose to indicate that you have read and agree to our Terms of use & Privacy Policy.</label>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold py-4">
                                Shipping Address
                            </h1>

                            <div className="flex lg:justify-between justify-center items-center gap-4">
                                <h1 className="lg:text-base text-[#5C4529] text-sm">
                                    Please type your address
                                </h1>

                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="py-3 w-32 lg:w-40 text-center
            bg-[#53A5E0] rounded-lg
            text-white placeholder:text-white
            placeholder:text-xs lg:placeholder:text-base
            outline-none"
                                />
                            </div>

                            {agreeTerms && (
                                <div className="bg-gray-50 rounded-xl p-5 mt-5">

                                    <h2 className="text-lg font-bold mb-5">
                                        Make Search
                                    </h2>

                                    <div className="grid gap-4">

                                        <input
                                            type="text"
                                            placeholder="Street Address"
                                            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none"
                                        />

                                        <div className="grid lg:grid-cols-2 gap-4">

                                            <input
                                                type="text"
                                                placeholder="City"
                                                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none"
                                            />

                                            <input
                                                type="text"
                                                placeholder="State"
                                                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none"
                                            />

                                        </div>

                                        <div className="grid lg:grid-cols-2 gap-4">

                                            <input
                                                type="text"
                                                placeholder="Postal Code"
                                                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none"
                                            />

                                            <input
                                                type="text"
                                                placeholder="Country"
                                                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none"
                                            />

                                        </div>

                                        <textarea
                                            placeholder="Additional Address Details"
                                            className="w-full h-24 bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none resize-none"
                                        />

                                        <button
                                            type="button"
                                            className="bg-[#53A5E0] text-white rounded-lg py-3 px-6 w-fit mx-auto"
                                        >
                                            Save Address
                                        </button>

                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="flex text-[#FF3838] py-5  text-sm lg:text-xl items-center justify-center gap-3">
                            <FaLocationArrow />
                            <h1 >Use your current location</h1>
                        </div>
                        <div className="text-center px-4  lg:px-0 lg:text-start">
                            <img src={map1} alt="" className="lg:w-full w-fit  rounded-lg object-contain lg:object-cover overflow-hidden mx-auto" />
                        </div>
                    </div>
                    <div className="text-center py-10">
                        <button className="text-white rounded-lg bg-orange-400 lg:px-22 px-4 py-2 lg:py-4 w-fit">Order Now</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Order;