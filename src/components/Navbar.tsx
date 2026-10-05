import { useState } from "react";
import { FiMenu, FiShoppingCart, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { cart } = useCart();

    const cartCount = cart.reduce(
        (total, cartItem) => total + cartItem.quantity,
        0
    );
    return (

        <>
            <nav className="fixed top-0 left-0 w-full z-50 bg-white">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <div className="lg:flex item-center justify-between hidden">
                        <div className="flex items-center gap-5 justify-between ">
                            <h1 className="text-white bg-orange-400 px-7 py-5 text-4xl items-center text-center font-bold rounded-full">D</h1>
                            <h1 className="font-bold text-2xl">Delizi<span className="text-orange-400">oso</span></h1>
                        </div>
                        <div className="lg:flex grid items-center lg:justify-between lg:gap-10 text-xl">
                            <NavLink to="/home" className="hove:text-orange-500">
                                Home
                            </NavLink>
                            <NavLink to="/menu" className="hove:text-orange-500">
                                Menu
                            </NavLink>
                            <NavLink to="/about" className="hove:text-orange-500">
                                About Us
                            </NavLink>  <NavLink to="/orders" className="hove:text-orange-500">
                                Order Online
                            </NavLink>
                            <NavLink to="/reservations" className="hove:text-orange-500">
                                Reservation
                            </NavLink>
                            <NavLink to="/contact" className="hove:text-orange-500">
                                Contact Us
                            </NavLink>
                        </div>

                        <div className="flex items-center justify-center gap-5">
                            <NavLink to="/cart">
                                <div className="relative">
                                    <FaShoppingCart className="text-xl" />

                                    {cartCount > 0 && (
                                        <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                            {cartCount}
                                        </span>
                                    )}
                                </div>
                            </NavLink>
                            <NavLink to="/login">
                                <button className="text-white bg-green-600 w-fit px-4 py-2 rounded-full">
                                    Login
                                </button>
                            </NavLink>
                        </div>

                    </div>
                    <div className="lg:hidden px-4">

                        <div className="flex items-center w-full px-2 justify-center gap-5">

                            {/* Logo - Left */}
                            <div className="flex items-center ">
                                <div className="flex items-center gap-3">
                                    <h1 className="text-white bg-orange-400 w-12 h-12 flex items-center justify-center text-2xl font-bold rounded-full">
                                        D
                                    </h1>

                                    <h1 className="font-bold text-xl">
                                        Delizi<span className="text-orange-400">oso</span>
                                    </h1>
                                </div>

                            </div>
                            {/* Hamburger - Right */}
                            <div className="flex items-center justify-between gap-5 w-full">
                                <NavLink to="/cart">
                                    <FiShoppingCart className="text-xl" />
                                </NavLink>
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="text-2xl"
                                >
                                    {isOpen ? <FiX /> : <FiMenu />}
                                </button>

                            </div>
                        </div>

                    </div>
                </div>

                {isOpen && (
                    <div className="bg-white px-6 py-5 flex  flex-col gap-4 shadow-lg lg:hidden">
                        <NavLink to="/home" className="hove:text-orange-500">
                            Home
                        </NavLink>
                        <NavLink to="/menu" className="hove:text-orange-500">
                            Menu
                        </NavLink>
                        <NavLink to="/about" className="hove:text-orange-500">
                            About Us
                        </NavLink>  <NavLink to="/orders" className="hove:text-orange-500">
                            Order Online
                        </NavLink>
                        <NavLink to="/reservations" className="hove:text-orange-500">
                            Reservation
                        </NavLink>
                        <NavLink to="/contact" className="hove:text-orange-500">
                            Contact Us
                        </NavLink>
                        <NavLink to="/login">
                            <button className="text-white bg-green-600 w-fit px-4 py-2 rounded-full">
                                Login
                            </button>
                        </NavLink>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar;