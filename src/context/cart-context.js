import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const useCart = () => useContext(CartContext);

const initialCartState = {
    count:0,
    price:0,
    item:[],
    wishlist:[]
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
           const filteredProduct = state.item.filter ( item => item._id !== action.payload._id)
           const removedItemCount = state.item.filter(item => item._id === action.payload._id).length
            return {
                ...state,
                count: state.count - removedItemCount,
                price: state.price - action.payload.productPrice* removedItemCount,
                item: filteredProduct
            }
        case "DELETE_FROM_CART":
            const firstOccurrence = state.item.findIndex(item => item._id === action.payload._id)
            const newItem = [...state.item]
            newItem.splice(firstOccurrence,1)
            return {
                ...state,
                count: state.count - 1,
                price: state.price - action.payload.productPrice,
                item: newItem
            }
        case "ADD_TO_WISHLIST":
            return {
                ...state,
                wishlist: [...state.wishlist,action.payload]
            }

        case "REMOVE_FROM_WISHLIST":
            const filteredWishList = state.wishlist.filter(myItem => myItem._id !== action.payload._id)
            return {
                ...state,
                wishlist: filteredWishList
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
