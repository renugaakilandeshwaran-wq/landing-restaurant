import { useState } from "react";
import { FaStar } from "react-icons/fa";
import food1 from "../assets/food1.png";
import food3 from "../assets/food3.png";
import food2 from "../assets/food2.png";
import food4 from "../assets/food4.png";
import food5 from "../assets/food5.png";
import food6 from "../assets/food6.png";
import { useCart } from "../context/CartContext";
type MenuItem = {
    id: number;
    image: string;
    name: string;
    ratings: number;
    category: string;
    description: string;
    price: number;
};
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
        category: "Pasta",
        ratings: 5,
        description: "Classic pizza with tomato and mozzarella.",
        price: 400,
    },
    {
        id: 3,
        image: food3,
        name: "Rovioli",
        category: "Pasta",
        ratings: 5,
        description: "Creamy pasta prepared with fresh ingredients.",
        price: 350,
    },
    {
        id: 4,
        image: food4,
        name: "Penne Alla Vodak",
        category: "Pasta",
        ratings: 5,
        description: "Tender grilled chicken with delicious spices.",
        price: 350,
    }, {
        id: 5,
        image: food5,
        name: "Risoto",
        category: "Pizza",
        ratings: 5,
        description: "Milk with Creamy Taste",
        price: 550,
    },
    {
        id: 6,
        image: food6,
        name: "Splitza Signature",
        category: "Pizza",
        ratings: 5,
        description: "Creamy pasta prepared with fresh ingredients.",
        price: 650,
    },
    {
        id: 7,
        image: food4,
        name: "Penne Alla Vodak",
        category: "Pizza",
        ratings: 5,
        description: "Tender grilled chicken with delicious spices.",
        price: 350,
    }, {
        id: 8,
        image: food5,
        name: "Risoto",
        category: "Pizza",
        ratings: 5,
        description: "Milk with Creamy Taste",
        price: 550,
    },
    {
        id: 9,
        image: food6,
        name: "Splitza Signature",
        category: "Pizza",
        ratings: 5,
        description: "Creamy pasta prepared with fresh ingredients.",
        price: 650,
    },
    {
        id: 10,
        image: food1,
        name: "Fettuccine",
        category: "Pasta",
        ratings: 5,
        description: "Delicious creamy fettuccine pasta.",
        price: 450,
    },
    {
        id: 11,
        image: food2,
        name: "Macaroni",
        category: "Pasta",
        ratings: 5,
        description: "Creamy macaroni pasta with fresh ingredients.",
        price: 400,
    },
    {
        id: 12,
        image: food3,
        name: "Margherita",
        category: "Pizza",
        ratings: 5,
        description: "Classic pizza with tomato and mozzarella.",
        price: 500,
    },

]
function MenuItems() {
    const {
        cart,
        addToCart,
        decreaseQuantity,
        removeFromCart
    } = useCart();
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedCategory, setSelectedCategory] = useState("All");


    const pastaItems = menuitems.filter(
        (item) => item.category === "Pasta"
    );
    const pizzaItems = menuitems.filter(
        (item) => item.category === "Pizza"
    )
    const filteredItems =
        selectedCategory === "All"
            ? menuitems
            : selectedCategory === "Dinner"
                ? [
                    ...pastaItems,
                    ...pizzaItems
                ]
                : menuitems.filter(
                    (item) => item.category === selectedCategory
                );
    const itemsPerPage = 4

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentItems = filteredItems.slice(firstIndex, lastIndex);
    const dinnerPageItems = [
        {
            pasta: pastaItems.slice(0, 4),
            pizza: [],
        },
        {
            pasta: pastaItems.slice(4, 6),
            pizza: pizzaItems.slice(0, 2),
        },
        {
            pasta: [],
            pizza: pizzaItems.slice(2, 6),
        },
    ];
    const currentDinnerPage = dinnerPageItems[currentPage - 1];

    const renderCards = (items: MenuItem[]) =>
        items.map((item) => (
            <div
                className="overflow-hidden px-4 grid items-center gap-3 justify-center"
                key={item.id}
            >
                <div>
                    <img
                        src={item.image}
                        alt={item.name}
                        className="lg:w-52 w-fit mx-auto overflow-hidden rounded-full object-cover"
                    />
                </div>

                <div className="grid gap-3 px-4 justify-center items-center">
                    <p className="text-red-500 text-center">
                        {item.category}
                    </p>

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

                    <p className="text-center text-xs lg:text-base">
                        {item.description}
                    </p>

                    <div className="flex justify-between items-center gap-5 px-2 py-1">
                        <h1 className="font-bold lg:text-xl">
                            ${item.price}
                        </h1>
                        <button
                            onClick={() => addToCart(item)}
                            className="text-white bg-orange-400 px-3 py-2 rounded-full w-fit hidden lg:block
    active:scale-90 active:bg-orange-500 transition-transform duration-150"
                        >
                            Order Now
                        </button>
                        <button
                            onClick={() => addToCart(item)}
                            className="text-white bg-orange-400 px-3 py-1 flex items-center rounded-full w-full block lg:hidden
    active:scale-90 active:bg-orange-500 transition-transform duration-150"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        ));
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);


    return (
        <>

            <div className=" mt-20 ">

                <h1 className="text-6xl text-4xl text-center font-bold">Our Popular Menu</h1>
                <section className="mt-15">

                    {/* Categories */}
                    <div className="flex items-center justify-center lg:gap-20 gap-5 px-4 lg:px-0 flex-wrap mb-8">

                        {/* All Category */}
                        <button
                            onClick={() => {
                                setSelectedCategory("All");
                                setCurrentPage(1);
                            }}
                            className="bg-black text-white px-6 py-3 rounded-full">
                            All Category
                        </button>

                        {/* Dinner */}
                        <button
                            onClick={() => {

                                setSelectedCategory("Dinner")
                                setCurrentPage(1);
                            }}
                            className={`px-6 py-3 rounded-full border border-gray-200 hover:bg-black hover:text-white transition ${selectedCategory === "Dinner"
                                ? "bg-black text-white"
                                : "bg-white text-black hover:bg-black hover:text-white"
                                }`}>
                            Dinner
                        </button>

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

            </div>
            {selectedCategory === "Dinner" ? (

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 px-4">

                    {/* LEFT SIDE - DINNER ITEMS */}
                    <div>

                        {currentDinnerPage.pasta.length > 0 && (
                            <>
                                <h2 className="text-xl lg:text-2xl font-bold mt-5">
                                    Pasta
                                </h2>

                                <div className="grid grid-cols-2 lg:grid-cols-2 gap-2 mt-5">
                                    {renderCards(currentDinnerPage.pasta)}
                                </div>
                            </>
                        )}

                        {currentDinnerPage.pizza.length > 0 && (
                            <>
                                <h2 className="text-xl lg:text-2xl font-bold mt-8">
                                    Pizza
                                </h2>

                                <div className="grid grid-cols-2 lg:grid-cols-2 gap-2 mt-5">
                                    {renderCards(currentDinnerPage.pizza)}
                                </div>
                            </>
                        )}

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
                                                        removeFromCart(
                                                            cartItem.item.id
                                                        )
                                                    }
                                                    className="text-red-500 hover:text-red-700"
                                                >
                                                    🗑
                                                </button>

                                            </div>


                                            {/* QUANTITY + PRICE */}
                                            <div className="flex justify-between items-center mt-3">

                                                {/* - COUNT + */}
                                                <div className="flex items-center gap-3">

                                                    <button
                                                        onClick={() =>
                                                            decreaseQuantity(
                                                                cartItem.item.id
                                                            )
                                                        }
                                                        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                                                    >
                                                        -
                                                    </button>

                                                    <span className="font-bold">
                                                        {cartItem.quantity}
                                                    </span>

                                                    <button
                                                        onClick={() =>
                                                            addToCart(
                                                                cartItem.item
                                                            )
                                                        }
                                                        className="w-8 h-8 rounded-full bg-orange-400 text-white flex items-center justify-center"
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

                                    <div className="flex justify-between items-center bg-white rounded-lg px-4 py-3">

                                        <span className="text-gray-500">
                                            Free to eat
                                        </span>

                                        <button className="text-xl font-bold">
                                            +
                                        </button>

                                    </div>

                                </div>


                                {/* PRICE DETAILS */}
                                <div className="mt-7 grid gap-3">

                                    {/* SUBTOTAL */}
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">
                                            Subtotal
                                        </span>

                                        <span className="font-bold">
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


                                    {/* TAX */}
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">
                                            Tax fee
                                        </span>

                                        <span className="font-bold">
                                            $3.5
                                        </span>
                                    </div>


                                    {/* VOUCHER */}
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">
                                            Voucher
                                        </span>

                                        <span className="font-bold">
                                            $5.0
                                        </span>
                                    </div>


                                    {/* TOTAL */}
                                    <div className="flex justify-between text-xl font-bold border-t pt-4 mt-2">

                                        <span>
                                            Total
                                        </span>

                                        <span>
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
                                <button
                                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-full mt-7 transition"
                                >
                                    Checkout
                                </button>

                            </div>

                        )}

                    </div>

                </div>

            ) : (

                /* ALL CATEGORY */
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-20 px-4 py-2">
                    {renderCards(currentItems)}
                </div>

            )}
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
        </>
    )
}

export default MenuItems