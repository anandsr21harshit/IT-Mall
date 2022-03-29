import React from "react";
import { useCart } from "../context/cart-context";
import "../css/cart.css";

function Cart() {

  const { cartState, cartDispatch } = useCart();

  const uniqueItems = [...new Set(cartState.item)];

  function getItemCount(array, id) {
    return array.filter((product) => product._id === id).length;
  }

  return (
    <section className="cart-container">
      <div className="product">
        {uniqueItems.map((items) => {
          return (
            <div className="card-container" key={items._id}>
              <div className="card card-without-icons card-product">
                <div className="card-img">
                  <img src={items.image} alt={items.productName} />
                </div>

                <div className="card-content">
                  <h1 className="product-name">{items.productName}</h1>
                  <h4 className="product-price">
                    {" "}
                    Rs {items.productPrice.toLocaleString("en-IN")}
                  </h4>
                </div>
                <div className="quantity-container">
                  <span>Quantity: </span>
                  <div className="quantity">
                    <button
                      className="quantity-increase"
                      
                    >
                      +
                    </button>
                    <input
                      type="number"
                      className="quantity-input"
                      value={getItemCount(cartState.item, items._id)}
                      readOnly
                    />
                    <button className="quantity-decrease">-</button>
                  </div>
                </div>
                <button
                  className="btn btn-outline btn-primary-outline"
                  type="button"
                  onClick={() =>
                    cartDispatch({ type: "REMOVE_FROM_CART", payload: items })
                  }
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="price-summary">
        <div className="card-container">
          <div className="card card-without-image card-price-summary">
            <h1>Cart Items</h1>
            <hr />
            <div className="price-details">
              <span>Price ({cartState.item.length} items)</span>
              <span className="currency">
                Rs {cartState.price.toLocaleString("en-IN")}
              </span>
            </div>
            <div className="price-details">
              <span>Delivery Charges</span>
              <span className="currency">Free</span>
            </div>
            <hr />
            <div className="price-details">
              <span>Sub Total</span>
              <span className="currency">
                Rs {cartState.price.toLocaleString("en-IN")}
              </span>
            </div>
            <button className="btn btn-primary" type="button">
              Buy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Cart };
