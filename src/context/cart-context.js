import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const useCart = () => useContext(CartContext);

const initialCartState = {
    count:0,
    price:0,
    item:[]
}

function cartHandler (state,action){
    switch(action.type){
        case "ADD_TO_CART":
            return {
                ...state,
                count: state.count + 1,
                price: state.price + action.payload.productPrice,
                item: [...state.item,action.payload]
            }
        case "REMOVE_FROM_CART":
           const filteredProduct = state.item.filter ( item => item._id != action.payload._id)
           
            return {
                ...state,
                count: state.count - 1,
                price: state.price - action.payload.productPrice,
                item: filteredProduct
            }
        default:
            return state
        
    }
}

const CartProvider = ({children})=>{

    const [cartState, cartDispatch] = useReducer(cartHandler,initialCartState)

    return (
        <CartContext.Provider value={{cartState:cartState,cartDispatch:cartDispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider,useCart}
