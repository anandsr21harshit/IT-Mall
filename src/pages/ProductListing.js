import React from "react";
import "../css/product-list.css";
import { Filter } from "../components/Filter";
import { products } from "../backend/db/products";
import { useCart } from "../context/cart-context";
import { useFilter } from "../context/filter-context";
import {useNavigate} from "react-router-dom" 

function ProductListing() {
  const { cartDispatch, cartState } = useCart();
  const { filterState } = useFilter();
  const navigate = useNavigate()

  function sortByPrice(productList, sortBy) {
    if (sortBy && sortBy === "LOW_TO_HIGH") {
      return productList.sort((a, b) => a.productPrice - b.productPrice);
    }
    if (sortBy && sortBy === "HIGH_TO_LOW") {
      return productList.sort((a, b) => b.productPrice - a.productPrice);
    }

    return productList;
  }

  function filterByCategory(productList, category) {
    let newList = [];
    let flag = false;

    for (const keys in category) {
      if (category[keys]) {
        flag = true;
        newList = newList.concat(
          productList.filter((item) => item.category === keys)
        );
      }
    }

    return flag ? newList : productList;
  }

  function sortByRate(productList, rating) {
    return productList.filter((item) => item.productRating >= rating);
  }

  const categorizedData = filterByCategory(
    products,
    filterState.filters.category
  );
  const ratedData = sortByRate(categorizedData, filterState.filters.rating);
  const sortedData = sortByPrice(ratedData, filterState.filters.sortBy);

  return (
    <div className="product-wrapper">
      <Filter />
      <main className="product-container">
        {sortedData.map((product) => {
          return (
            <div className="product-card" key={product._id}>
              <div className="product-image-container">
                <img src={product.image} alt="" />
              </div>
              <div className="product-description">
                <div className="product-rating">
                  {product.productRating}
                  <span className="fa fa-star"></span>
                </div>
                <h3 className="product-name">{product.productName}</h3>
                <h6 className="product-price">
                  Rs {product.productPrice.toLocaleString("en-IN")}
                </h6>
              </div>
              <button
                className="btn btn-primary"
                onClick={() =>
                  cartDispatch({ type: "ADD_TO_CART", payload: product })
                }
              >
                Add to Cart
              </button>
              {cartState.wishlist.find(
                (myItem) => myItem._id === product._id
              ) ? (
                <button className="btn btn-outline btn-primary-outline" onClick={()=>navigate("/wishlist")}>
                  Go to WishList
                </button>
              ) : (
                <button
                  className="btn btn-outline btn-primary-outline"
                  onClick={() =>
                    cartDispatch({ type: "ADD_TO_WISHLIST", payload: product })
                  }
                >
                  Add to WishList
                </button>
              )}
            </div>
          );
        })}
      </main>
    </div>
  );
}

export { ProductListing };
