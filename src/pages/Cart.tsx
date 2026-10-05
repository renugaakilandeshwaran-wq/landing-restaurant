import { useCart } from "../context/CartContext";

function Cart() {
    const { cart, addToCart } = useCart();

    console.log("CART DATA:", cart);

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">

            <h1 className="text-3xl font-bold mb-8">
                Order List
            </h1>

            {cart.length === 0 ? (
                <p className="text-gray-500">
                    No items added yet.
                </p>
            ) : (
                <div className="grid gap-5">

                    {cart.map((cartItem) => (

                        <div
                            key={cartItem.item.id}
                            className="flex items-center justify-between bg-gray-100 rounded-xl p-4"
                        >

                            {/* Image + Name */}
                            <div className="flex items-center gap-4">

                                <img
                                    src={cartItem.item.image}
                                    alt={cartItem.item.name}
                                    className="w-16 h-16 rounded-full object-cover"
                                />

                                <div>
                                    <h2 className="font-bold">
                                        {cartItem.item.name}
                                    </h2>

                                    <p className="text-gray-500">
                                        ${cartItem.item.price}
                                    </p>
                                </div>

                            </div>

                            {/* Quantity */}
                            <div className="flex items-center gap-3">

                                <span className="font-bold">
                                    {cartItem.quantity}x
                                </span>

                                <button
                                    onClick={() =>
                                        addToCart(cartItem.item)
                                    }
                                    className="bg-orange-400 text-white rounded-full w-8 h-8"
                                >
                                    +
                                </button>

                            </div>

                            {/* Total */}
                            <p className="font-bold">
                                $
                                {cartItem.item.price *
                                    cartItem.quantity}
                            </p>

                        </div>

                    ))}

                </div>
            )}

        </div>
    );
}

export default Cart;