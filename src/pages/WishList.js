import React from "react";
import { useCart } from "../context/cart-context";
import "../css/wishlist.css";

function WishList() {
  const { cartState, cartDispatch } = useCart();

  const uniqueWishlistItems = [...new Set(cartState.wishlist)]

  return (
    <main className="wishlist-container">
      {uniqueWishlistItems.map((items) => {
        return (
          <div className="wishlist-card">
            <div className="wishlist-image-container">
              <img src={items.image} alt="" />
            </div>
            <div className="wishlist-description">
              <h3 className="wishlist-name">{items.productName}</h3>
              <h6 className="wishlist-price">
                Rs {items.productPrice.toLocaleString("en-IN")}
              </h6>
            </div>
            <button className="btn btn-primary" onClick={()=>cartDispatch({type:"ADD_TO_CART",payload:items})}>Add to Cart</button>
            <button className="btn btn-outline btn-primary-outline" onClick={()=>cartDispatch({type:"REMOVE_FROM_WISHLIST",payload:items})}>
              Delete
            </button>
          </div>
        );
      })}
    </main>
  );
}

export { WishList };
