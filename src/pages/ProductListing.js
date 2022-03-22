import React from 'react'
import "../css/product-list.css";
import {Filter} from "../components/Filter"
import {products} from "../backend/db/products"


function ProductListing() {
  return (
    <div className='product-wrapper'>
    <Filter/>
    <main className="product-container">
        {products.map(product =>{
            return (
                <div className="product-card">
                    <div className="product-image-container">
                        <img src={product.image} alt=""/>
                    </div>
                    <div className="product-description">
                        <h3 className="product-name">{product.productName}</h3>
                        <h6 className="product-price">Rs {product.productPrice.toLocaleString("en-IN")}</h6>
                    </div>
                    <button className="btn btn-primary">Add to Cart</button>
                    <button className="btn btn-outline btn-primary-outline">Add to WishList</button>
                </div>
            );
        })}
    </main>
    </div>
  )
}

export {ProductListing}