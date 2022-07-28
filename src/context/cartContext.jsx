import { createContext, useState, useEffect } from "react"

export const CartContext = createContext()

function CartContextProvider({ children }) {
    const [cart, setCart] = useState([])
    const [counterCart, setCounterCart] = useState(0)

    useEffect(() => {
    }, [cart, counterCart])

    function addItem(count, item) {
        if (!cart.some(i => i.item.id == item.id)) {
            cart.push({"item" : item, "count" : count})
            setCart(cart)
            setCounter(cart)
        } else {
            console.log("Item already added!")
        }
    }

    function clearCart() {
        setCart([])
        setCounter(cart)
    }

    function removeItem(id) {
        setCart(cart.filter(i => i.id !== id))
        setCounter(cart)
    }

    function setCounter(cart) {
        var totalItemCount = cart.reduce((accum,i) => accum + i.count, 0)
        setCounterCart(totalItemCount)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, clearCart, removeItem, counterCart }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextProvider