import { useState } from "react";
import { FaStar, FaTrash } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import food1 from "../assets/food1.png";
import food3 from "../assets/food3.png";
import food2 from "../assets/food2.png";
import food4 from "../assets/food4.png";
import food5 from "../assets/food5.png";
import food6 from "../assets/food6.png";
import { useCart } from "../context/CartContext";

const menuitems = [
    {
        id: 1,
        image: food1,
        name: "Spaghetti",
        ratings: 5,
        category: "Pasta",

        description: "Juicy chicken burger with fresh vegetables.",
        price: 200,
    },
    {
        id: 2,
        image: food2,
        name: "Gnocchi",
        ratings: 5,
        category: "Pasta",

        description: "Classic pizza with tomato and mozzarella.",
        price: 400,
    },
    {
        id: 3,
        image: food3,
        name: "Rovioli",
        ratings: 5,
        category: "Pasta",

        description: "Creamy pasta prepared with fresh ingredients.",
        price: 350,
    },
    {
        id: 4,
        image: food4,
        name: "Penne Alla Vodak",
        ratings: 5,
        category: "Pasta",

        description: "Tender grilled chicken with delicious spices.",
        price: 350,
    }, {
        id: 5,
        image: food5,
        name: "Risoto",
        ratings: 5,
        category: "Pizza",

        description: "Milk with Creamy Taste",
        price: 550,
    },
    {
        id: 6,
        image: food6,
        name: "Splitza Signature",
        ratings: 5,
        category: "Pizza",

        description: "Creamy pasta prepared with fresh ingredients.",
        price: 650,
    },
    {
        id: 7,
        image: food4,
        name: "Penne Alla Vodak",
        ratings: 5,
        category: "Pasta",

        description: "Tender grilled chicken with delicious spices.",
        price: 350,
    }, {
        id: 8,
        image: food5,
        name: "Risoto",
        ratings: 5,
        category: "Pizza",

        description: "Milk with Creamy Taste",
        price: 550,
    },
    {
        id: 9,
        image: food6,
        name: "Splitza Signature",
        ratings: 5,
        category: "Pasta",

        description: "Creamy pasta prepared with fresh ingredients.",
        price: 650,
    },

]
function Menu() {

    const [currentPage, setCurrentPage] = useState(1)
    const {
        cart,
        addToCart,
        decreaseQuantity,
        removeFromCart
    } = useCart();

    const itemsPerPage = 4

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentItems = menuitems.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(menuitems.length / itemsPerPage);


    return (
        <div>

            <div className=" mt-5 ">

                <h1 className="text-2xl lg:text-4xl text-center font-bold">Menu</h1>
                <section className="mt-15">

                    {/* Categories */}
                    <div className="flex items-center justify-center lg:gap-20 gap-5 px-4 lg:px-0 flex-wrap mb-8">

                        {/* All Category */}
                        <button className="bg-white text-black px-6 py-3 rounded-full  border border-gray-200 hover:bg-black hover:text-white transition">
                            All Category
                        </button>

                        {/* Dinner */}
                        <Link to="/dinner" className="bg-white text-black px-6 py-3 rounded-full border border-gray-200 hover:bg-black hover:text-white transition">
                            Dinner
                        </Link>

                        {/* Lunch */}
                        <button className="bg-white text-black px-6 py-3 rounded-full border border-gray-200 hover:bg-black hover:text-white transition">
                            Lunch
                        </button>

                        {/* Dessert */}
                        <button className="bg-white text-black px-6 py-3 rounded-full border border-gray-200 hover:bg-black hover:text-white transition">
                            Dessert
                        </button>

                        {/* Drink */}
                        <button className="bg-white text-black px-6 py-3 rounded-full border border-gray-200 hover:bg-black hover:text-white transition">
                            Drink
                        </button>

                    </div>

                </section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20 px-4">

                    {/* LEFT SIDE - MENU ITEMS */}
                    <div>
                        <div className="grid lg:grid-cols-3 gap-5">
                            {currentItems.map((item) => (
                                <div
                                    className="overflow-hidden px-4 grid items-center gap-3 justify-center"
                                    key={item.id}
                                >

                                    <div>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="lg:w-52 w-32 mx-auto overflow-hidden rounded-full object-cover"
                                        />
                                    </div>

                                    <div className="grid gap-3 px-4 justify-center items-center">

                                        <p className="lg:text-xl text-sm text-center font-bold">
                                            {item.name}
                                        </p>

                                        <div className="flex items-center justify-center my-2">
                                            {[...Array(item.ratings)].map((_, index) => (
                                                <FaStar
                                                    key={index}
                                                    className="text-orange-400"
                                                />
                                            ))}
                                        </div>

                                        <p className="text-center text-xs lg:text-sm">
                                            {item.description}
                                        </p>

                                        <div className="flex justify-between items-center gap-5 px-2 py-1">

                                            <h1 className="font-bold lg:text-sm">
                                                ${item.price}
                                            </h1>

                                            {/* Desktop */}
                                            <button
                                                onClick={() => addToCart(item)}
                                                className="text-white bg-orange-400 px-2 py-1 rounded-full w-fit hidden lg:block active:scale-90 active:bg-orange-500 transition-transform duration-150 text-xs"
                                            >
                                                Order Now
                                            </button>

                                            {/* Mobile */}
                                            <button
                                                onClick={() => addToCart(item)}
                                                className="text-white bg-orange-400  flex items-center rounded-full w-8 h-8 text-center flex  items-center justify-center lg:hidden active:scale-90 active:bg-orange-500 transition-transform duration-150"
                                            >
                                                +
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* RIGHT SIDE - ORDER LIST */}
                    <div className="bg-gray-50 rounded-2xl p-6 h-fit sticky top-28">

                        <h2 className="text-2xl font-bold mb-6">
                            Your Order
                        </h2>

                        {cart.length === 0 ? (

                            <p className="text-gray-500 text-center py-10">
                                No items added yet.
                            </p>

                        ) : (

                            <div>

                                {/* ORDER ITEMS */}
                                <div className="grid gap-5">

                                    {cart.map((cartItem) => (

                                        <div
                                            key={cartItem.item.id}
                                            className="border-b pb-5"
                                        >

                                            {/* NAME + DELETE */}
                                            <div className="flex justify-between items-center">

                                                <h3 className="font-bold text-lg">
                                                    {cartItem.item.name}
                                                </h3>

                                                <button
                                                    onClick={() =>
                                                        removeFromCart(cartItem.item.id)
                                                    }
                                                    className="text-red-500 hover:text-red-700"
                                                >
                                                    <FaTrash />
                                                </button>

                                            </div>


                                            {/* QUANTITY + TOTAL PRICE */}
                                            <div className="flex justify-between items-center mt-3">

                                                {/* - COUNT + */}
                                                <div className="flex items-center gap-3">

                                                    <button
                                                        onClick={() =>
                                                            decreaseQuantity(cartItem.item.id)
                                                        }
                                                        className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center"
                                                    >
                                                        -
                                                    </button>

                                                    <span className="font-bold">
                                                        {cartItem.quantity}
                                                    </span>

                                                    <button
                                                        onClick={() =>
                                                            addToCart(cartItem.item)
                                                        }
                                                        className="w-7 h-7 rounded-full bg-orange-400 text-white flex items-center justify-center"
                                                    >
                                                        +
                                                    </button>

                                                </div>


                                                {/* ITEM TOTAL */}
                                                <p className="font-bold">
                                                    $
                                                    {cartItem.item.price *
                                                        cartItem.quantity}
                                                </p>

                                            </div>

                                        </div>

                                    ))}

                                </div>


                                {/* VOUCHER */}
                                <div className="mt-7">

                                    <p className="font-bold mb-3">
                                        Voucher Code
                                    </p>

                                    <div className="flex rounded-lg justify-between text-xl items-center bg-white rounded-lg px-4 py-3">

                                        <span className="text-[#0875C3]">
                                            FreeToEat
                                        </span>

                                        <button className="text-xl rounded-lg  w-8 h-8 font-bold text-white bg-[#0875C3]">
                                            +
                                        </button>

                                    </div>

                                </div>


                                {/* PRICE DETAILS */}
                                <div className="mt-7 grid gap-3">

                                    <div className="flex justify-between">
                                        <span className="text-xl font-bold">
                                            Subtotal
                                        </span>

                                        <span className="font-bold text-orange-300">
                                            $
                                            {cart.reduce(
                                                (total, cartItem) =>
                                                    total +
                                                    cartItem.item.price *
                                                    cartItem.quantity,
                                                0
                                            )}
                                        </span>
                                    </div>


                                    <div className="flex justify-between">
                                        <span className="text-xl font-bold">
                                            Tax fee
                                        </span>

                                        <span className="font-bold text-orange-300">
                                            $3.5
                                        </span>
                                    </div>


                                    <div className="flex justify-between">
                                        <span className="text-xl font-bold">
                                            Voucher
                                        </span>

                                        <span className="font-bold text-orange-300">
                                            $5.0
                                        </span>
                                    </div>


                                    {/* TOTAL */}
                                    <div className="flex justify-between text-xl font-bold border-t pt-4 mt-2">

                                        <span className="text-xl font-bold">
                                            Total
                                        </span>

                                        <span className="text-orange-300">
                                            $
                                            {cart.reduce(
                                                (total, cartItem) =>
                                                    total +
                                                    cartItem.item.price *
                                                    cartItem.quantity,
                                                0
                                            ) + 3.5 - 5}
                                        </span>

                                    </div>

                                </div>


                                {/* CHECKOUT */}
                                <NavLink to="/orders">
                                    <button
                                        className=" text-center flex items-center  mx-auto justify-center  text-center  bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-full mt-7 transition w-52 "
                                    >
                                        Checkout
                                    </button>

                                </NavLink>
                            </div>
                        )}

                    </div>

                </div>

                <div className="flex justify-center items-center gap-2 mt-8">

                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`w-10 h-10 rounded-full ${currentPage === index + 1
                                ? "bg-black text-white"
                                : "bg-gray-200 text-black"
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Menu