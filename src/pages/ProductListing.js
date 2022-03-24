import React from 'react'
import "../css/product-list.css";
import {Filter} from "../components/Filter"
import {products} from "../backend/db/products"
import { useCart } from '../context/cart-context';
import { useFilter } from '../context/filter-context';


function ProductListing() {
    const {cartDispatch} = useCart();
    const {filterState} = useFilter()

  return (
    <div className='product-wrapper'>
    <Filter/>
    <main className="product-container">
        {filterState.filteredData.map(product =>{
            return (
                <div className="product-card">
                    <div className="product-image-container">
                        <img src={product.image} alt=""/>
                    </div>
                    <div className="product-description">
                        <div className="product-rating">{product.productRating}<span className='fa fa-star'></span></div>
                        <h3 className="product-name">{product.productName}</h3>
                        <h6 className="product-price">Rs {product.productPrice.toLocaleString("en-IN")}</h6>
                    </div>
                    <button 
                        className="btn btn-primary" 
                        onClick={()=>cartDispatch({type:"ADD_TO_CART",payload:product})}
                    >Add to Cart</button>
                    <button className="btn btn-outline btn-primary-outline">Add to WishList</button>
                </div>
            );
        })}
    </main>
    </div>
  )
}

export {ProductListing}