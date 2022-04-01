import "../css/nav.css"
import {Link} from "react-router-dom"
import { useCart } from "../context/cart-context";
import { useState } from "react";

function NavBar(){

    const {cartState} = useCart();

    const [classVal, setClassVal] = useState("nav-bar-collapse")

    function collapseHandler(){
        classVal === "nav-bar-collapse" ? setClassVal(classVal => classVal.concat(" collapsed")) : setClassVal("nav-bar-collapse")
    }
    return(
        <nav className="nav-bar">
            <h1 className="nav-brand">The IT Mall</h1>
            <div className="search">
                <input type="search" placeholder="Search"/>
                <i className="bi bi-list" onClick={collapseHandler}></i>
            </div>
            <div className={classVal}>
                <ul className="list-container">
                    <li className="stacked"><Link to={"/"} className="stacked-link" onClick={collapseHandler}>Home</Link></li>
                    <li className="stacked"><Link to={"/pl"} className="stacked-link" onClick={collapseHandler}>Products</Link></li>
                    <li className="stacked"><Link to={"/wishlist"} className="stacked-link" onClick={collapseHandler}>WishList</Link></li>
                    <li className="stacked"><Link to={"/cart"} className="stacked-link" onClick={collapseHandler}>Cart</Link></li>
                    <li className="stacked"><Link to={"/login"} className="stacked-link" onClick={collapseHandler}>Login</Link></li>
                </ul>
            </div>
            <ul className="menus">
                <li className="menu">
                    <Link to="/cart" className="stacked-link" id="cart"><i className="bi bi-cart"></i></Link>
                </li>
                <li className="menu notif cart-notif"><span>{cartState.count}</span></li>
                <li className="menu">
                    <Link to="/wishlist" className="stacked-link" id="wishlist"><i className="bi bi-heart"></i></Link>
                </li>
                <li className="menu notif wishlist-notif"><span>{cartState.wishlist.length}</span></li>
            </ul>
            <ul className="menus">
                <li className="menu"><Link to="/" className="stacked-link">Home</Link></li>
                <li className="menu"><Link to="/pl" className="stacked-link">Product</Link></li>
                <li className="menu"><Link to="/login" className="stacked-link">Login</Link></li>
            </ul>
        </nav>
    );
}

export {NavBar};