import {
    createContext,
    useContext,
    useState,
    type ReactNode
} from "react";

type MenuItem = {
    id: number;
    image: string;
    name: string;
    ratings: number;
    category: string;
    description: string;
    price: number;
};

type CartItem = {
    item: MenuItem;
    quantity: number;
};

type CartContextType = {
    cart: CartItem[];
    addToCart: (item: MenuItem) => void;
    decreaseQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {

    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (item: MenuItem) => {

        console.log("Order Now clicked:", item.name);

        setCart((prevCart) => {

            const existingItem = prevCart.find(
                (cartItem) => cartItem.item.id === item.id
            );

            if (existingItem) {

                return prevCart.map((cartItem) =>
                    cartItem.item.id === item.id
                        ? {
                            ...cartItem,
                            quantity: cartItem.quantity + 1,
                        }
                        : cartItem
                );

            }

            return [
                ...prevCart,
                {
                    item: item,
                    quantity: 1,
                },
            ];
        });
    };
    const decreaseQuantity = (id: number) => {
        setCart((prevCart) =>
            prevCart
                .map((cartItem) =>
                    cartItem.item.id === id
                        ? {
                            ...cartItem,
                            quantity: cartItem.quantity - 1,
                        }
                        : cartItem
                )
                .filter((cartItem) => cartItem.quantity > 0)
        );
    };

    const removeFromCart = (id: number) => {
        setCart((prevCart) =>
            prevCart.filter(
                (cartItem) => cartItem.item.id !== id
            )
        );
    };
    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                decreaseQuantity,
                removeFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {

    const context = useContext(CartContext);

    if (!context) {
        throw new Error(
            "useCart must be used inside CartProvider"
        );
    }

    return context;
}