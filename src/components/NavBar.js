import "../css/nav.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/cart-context";
import { useState } from "react";

function NavBar() {
  const { cartState } = useCart();

  const [classVal, setClassVal] = useState("nav-bar-collapse");

  function collapseHandler() {
    classVal === "nav-bar-collapse"
      ? setClassVal((classVal) => classVal.concat(" collapsed"))
      : setClassVal("nav-bar-collapse");
  }
  return (
    <nav className="nav-bar">
      <h1 className="nav-brand">The IT Mall</h1>
      <div className="search">
        <i className="bi bi-list" onClick={collapseHandler}></i>
      </div>
      <div className={classVal}>
        <ul className="list-container">
          <Link to={"/"} className="stacked-link" onClick={collapseHandler}>
            <li className="stacked">Home </li>
          </Link>

          <Link to={"/pl"} className="stacked-link" onClick={collapseHandler}>
            <li className="stacked">Products </li>
          </Link>

          <Link
            to={"/wishlist"}
            className="stacked-link"
            onClick={collapseHandler}
          >
            <li className="stacked">WishList</li>
          </Link>

          <Link to={"/cart"} className="stacked-link" onClick={collapseHandler}>
            <li className="stacked">Cart</li>
          </Link>

          <Link
            to={"/login"}
            className="stacked-link"
            onClick={collapseHandler}
          >
            <li className="stacked">Login</li>
          </Link>
        </ul>
      </div>
      <ul className="menus">
        <li className="menu">
          <Link to="/cart" className="stacked-link" id="cart">
            <i className="bi bi-cart"></i>
          </Link>
        </li>
        <li className="menu notif cart-notif">
          <span>{cartState.count}</span>
        </li>
        <li className="menu">
          <Link to="/wishlist" className="stacked-link" id="wishlist">
            <i className="bi bi-heart"></i>
          </Link>
        </li>
        <li className="menu notif wishlist-notif">
          <span>{cartState.wishlist.length}</span>
        </li>
      </ul>
      <ul className="menus">
        <li className="menu">
          <Link to="/" className="stacked-link">
            Home
          </Link>
        </li>
        <li className="menu">
          <Link to="/pl" className="stacked-link">
            Product
          </Link>
        </li>
        <li className="menu">
          <Link to="/login" className="stacked-link">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export { NavBar };
