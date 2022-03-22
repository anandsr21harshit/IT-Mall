import React from 'react'
import "../css/cart.css"

function Cart() {
  return (
    <section className="cart-container">
        {/* <div className="product">
            {cartState.item.map(items =>{
                return(
                    <div className="card-container">
                        <div className="card card-without-icons card-product">
                            <div className="card-img">
                                <img src={items.image} alt="Boat-Headphone"/>
                            </div>
                            
                            <div className="card-content">
                                <h1 className="product-name">{items.productName}</h1>
                                <h4 className="product-price"> Rs {items.productPrice.toLocaleString("en-IN")}</h4>
                            </div>
                            <div className="quantity-container">
                                <span>Quantity: </span>
                                <div className="quantity">
                                    <button className="quantity-increase">+</button>
                                    <input type="number" className="quantity-input"/>
                                    <button className="quantity-decrease">-</button>
                                </div>
                            </div>
                            <button className="btn btn-outline btn-primary-outline" type="button">Remove from Cart</button>
                        </div>
                    </div>
                );
            })}
        </div> */}
        <div className="price-summary">
            <div className="card-container">
                <div className="card card-without-image card-price-summary">
                    <h1>Cart Items</h1>
                    <hr/>
                    <div className="price-details">
                        <span>Price (0 items)</span>
                        <span className="currency">Rs 0</span>
                    </div>
                    <div className="price-details">
                        <span>Delivery Charges</span>
                        <span className="currency">Free</span>
                    </div>
                    <hr/>
                    <div className="price-details">
                        <span>Sub Total</span>
                        <span className="currency">0</span>
                    </div>
                    <button className="btn btn-primary" type="button">Buy</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export {Cart}