import { useState } from "react";
import CartContext from "./CartContext.jsx";


const CartProvider= (props) => {
    const [cartItemState, setCartItemState] = useState([])
    const [cartAmountState, setCartAmountState] = useState(0)
    const onAddItemHandler = (item) => {
        const arr = [...cartItemState, {...item} ]

        for(let items of arr){
            if(items.id === item.id){
                items.quantity +=1
            }
        }

        setCartItemState(arr);
    }
    const onRemoveItemHandler = () => {

    }

    const cartContext = {
        items: cartItemState,
        totalAmount: cartAmountState,
        addItem: onAddItemHandler,
        removeItem: onRemoveItemHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );

};

export default CartProvider;