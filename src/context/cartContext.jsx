import { createContext, useState, useEffect } from "react"

export const CartContext = createContext()

function CartContextProvider({ children }) {
    const [cart, setCart] = useState([])
    const [counterCart, setCounterCart] = useState(0)

    useEffect(() => {
        setCounter(cart)
    }, [cart, counterCart])

    function addItem(count, item) {
        if (!cart.some(i => i.item.id == item.id)) {
            cart.push({"item" : item, "count" : count, "totalCountPrice": (item.price * count)})
            setCart(cart)
            setCounter(cart)
        } else {
            console.log("Item already added!")
        }
    }

    function clearCart() {
        setCart([])
    }

    function removeItem(id) {
        setCart(cart.filter(i => i.item.id !== id))
    }

    function setCounter(cart) {
        let totalItemCount = cart.reduce((accum,i) => accum + i.count, 0)
        setCounterCart(totalItemCount)
    }

    function totalCountInCart() {
        let sum = 0
        cart.forEach((item) => {
            sum += item.totalCountPrice
        })
        return sum
    }

    return (
        <CartContext.Provider value={{ cart, addItem, clearCart, removeItem, counterCart, totalCountInCart }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextProvider