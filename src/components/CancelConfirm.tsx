import { FaCalendar, FaPerson } from "react-icons/fa6";
import { FaClock, FaIdBadge } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import reserve1 from "../assets/reserve1.png";

function CancelConfirm({
    setShowCancel,
}: {
    setShowCancel: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4 py-6">

            {/* Main popup */}
            <div className="bg-white relative rounded-2xl p-6 lg:p-8 w-full max-w-5xl max-h-[90vh] overflow-y-auto">

                {/* Close button */}
                <button
                    onClick={() => setShowCancel(false)}
                    className="absolute top-4 right-4 bg-gray-100 rounded-full w-10 h-10 text-xl flex items-center justify-center"
                >
                    <FiX />
                </button>

                {/* Header */}
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <h1 className="bg-orange-400 text-white rounded-full flex items-center justify-center w-12 h-12">
                            D
                        </h1>

                        <h1 className="font-bold text-xl">
                            Delizi<span className="text-orange-400">oso</span>
                        </h1>
                    </div>

                    {/* Login / Sign Up */}
                    <div className="flex gap-3 items-center lg:pr-10 lg:block hidden">

                        <button className="text-white bg-orange-400 rounded-full px-6 py-2">
                            Login
                        </button>

                        <button className="text-white bg-green-700 rounded-full px-4 py-2">
                            Sign Up
                        </button>

                    </div>

                </div>


                {/* Cancel Message */}
                <div className="bg-orange-400  text-white rounded-lg p-5 mt-8">

                    <h1 className="text-xl lg:text-2xl font-bold">
                        Are you sure you want to cancel the reservation?
                    </h1>

                    <p className="mt-2 font-semibold text-white flex items-center gap-3">
                        <FaIdBadge className="border border-3 rounded-lg" /> Booking ID : #123456
                    </p>
                </div>


                {/* Reservation Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-3xl mx-auto  mt-8">

                    {/* Image */}
                    <div>
                        <img
                            src={reserve1}
                            alt="Restaurant"
                            className="w-fit  lg:h-full object-cover rounded-xl"
                        />
                    </div>


                    {/* Reservation Details */}
                    <div className="bg-gray-100 rounded-xl p-5 grid gap-5">

                        <h1 className="text-xl font-bold">
                            Reservation detail
                        </h1>

                        <div className="flex gap-3 items-center">
                            <FaCalendar />
                            <h1>
                                Saturday, 28 February 2022
                            </h1>
                        </div>

                        <div className="flex gap-3 items-center">
                            <FaClock />
                            <h1>
                                04:30 pm
                            </h1>
                        </div>

                        <div className="flex gap-3 items-center">
                            <FaPerson />
                            <h1>
                                2 people (Standard seating)
                            </h1>
                        </div>

                    </div>

                </div>


                {/* Cancel Button */}
                <div className="flex justify-center mt-8">

                    <button
                        onClick={() => setShowCancel(false)}
                        className="bg-red-500 text-white text-lg font-semibold px-10 py-3 rounded-lg"
                    >
                        Cancel Reservation
                    </button>

                </div>

            </div>

        </div>
    );
}

export default CancelConfirm;