import { FaCalendar, FaPerson } from "react-icons/fa6";
import { FaClock, FaEdit, FaIdBadge } from "react-icons/fa";
import reserve1 from "../assets/reserve1.png";
import { FiX } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import type { Dispatch, SetStateAction } from "react";

function Confirm({
    setShowConfirm,
    setShowForm,
    setShowCancel
}: {
    setShowConfirm: Dispatch<SetStateAction<boolean>>;
    setShowForm: Dispatch<SetStateAction<boolean>>;
    setShowCancel: Dispatch<SetStateAction<boolean>>;

}) {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 lg:px-4 py-6">

            {/* Main white popup */}
            <div className="bg-white relative rounded-2xl p-8  lg:p-8 w-full max-w-5xl max-h-[90vh] overflow-y-auto">


                <button
                    onClick={() => setShowConfirm(false)}
                    className="absolute top-4 right-4 bg-gray-100 rounded-full w-10 h-10 text-xl"
                >
                    ✕
                </button>

                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">

                        <h1 className="bg-orange-400 text-white rounded-full flex items-center justify-center w-12 h-12">
                            D
                        </h1>
                        <h1 className="font-bold text-xl">Delizi<span className="text-orange-400">oso</span></h1>

                    </div>

                    <div className="flex gap-5 justify-between px-10 items-center lg:block hidden">
                        <button className="text-white bg-orange-400 rounded-full px-6 py-2">
                            Login
                        </button>

                        <button className="text-white bg-green-700 rounded-full px-4 py-2">
                            Sign Up
                        </button>
                    </div>

                </div>


                {/* Confirmation Message */}
                <div className="px-4 py-4 w-full mt-8 bg-[#3FC66E] text-start rounded-lg">

                    <h1 className="text-2xl  font-bold text-white">
                        Reservation has been confirmed
                    </h1>

                    <p className="mt-3 text-white flex items-center gap-3">
                        <TiTick className="border border-3 rounded-lg" />

                        The confirmation result has been sent to your email
                    </p>

                    <p className="mt-2 font-semibold text-white flex items-center gap-3">
                        <FaIdBadge className="border border-3 rounded-lg" /> Booking ID : #123456
                    </p>

                </div>


                {/* Reservation Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">

                    {/* Image */}
                    <div>
                        <img
                            src={reserve1}
                            alt=""
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>


                    {/* Reservation Details */}
                    <div className="bg-gray-100 rounded-xl p-5 grid gap-5">

                        <h1 className="text-xl font-bold">
                            Reservation detail
                        </h1>

                        <div className="flex gap-3 items-center">
                            <FaCalendar />
                            <h1>Saturday, 28 February 2022</h1>
                        </div>

                        <div className="flex gap-3 items-center">
                            <FaClock />
                            <h1>04:30 pm</h1>
                        </div>

                        <div className="flex gap-3 items-center">
                            <FaPerson />
                            <h1>2 people (Standard seating)</h1>
                        </div>

                    </div>


                    {/* Buttons */}
                    <div className="flex flex-col justify-center gap-5">

                        <button
                            onClick={() => {
                                setShowConfirm(false);
                                setShowForm(true);
                            }}
                            className="bg-blue-100 flex text-xl items-center justify-center gap-3 text-blue-900 py-3 rounded-lg"
                        >
                            Modify <FaEdit />
                        </button>

                        <button
                            onClick={() => {
                                setShowConfirm(false);
                                setShowCancel(true);
                            }}
                            className="bg-red-100 flex items-center text-xl justify-center gap-3 text-red-500 py-3 rounded-lg"
                        >
                            Cancel <FiX />
                        </button>
                    </div>

                </div>


                {/* Bottom Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">

                    {/* Left */}
                    <div className="grid gap-5">

                        <div>
                            <label className="font-semibold">
                                Select an occasion (Optional)
                            </label>

                            <select className="bg-gray-100 w-full rounded-lg px-4 py-3 mt-2">
                                <option value="">
                                    Select an occasion
                                </option>

                                <option value="birthday">
                                    Birthday
                                </option>

                                <option value="anniversary">
                                    Anniversary
                                </option>

                                <option value="date">
                                    Date
                                </option>

                                <option value="other">
                                    Other
                                </option>
                            </select>
                        </div>


                        <div>
                            <label className="font-semibold">
                                Add a special request
                            </label>

                            <textarea
                                rows={5}
                                placeholder="Add a special request..."
                                className="bg-gray-100 w-full rounded-lg px-4 py-3 mt-2 resize-none"
                            />
                        </div>

                    </div>


                    {/* Right */}
                    <div>

                        <h1 className="text-xl font-bold">
                            Restaurant information
                        </h1>

                        <p className="leading-7 mt-4">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam rem
                            aperiam, eaque ipsa quae ab illo inventore veritatis et
                            quasi architecto beatae vitae dicta sunt explicabo.
                        </p>

                        <p className="leading-7 mt-4">
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                            amet, consectetur, adipisci velit, sed quia non numquam
                            eius modi tempora incidunt ut labore et dolore magnam
                            aliquam quaerat voluptatem.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Confirm;