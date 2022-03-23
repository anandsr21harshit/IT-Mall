import "../css/nav.css"
import {Link} from "react-router-dom"
import { useCart } from "../context/cart-context";

function NavBar(){

    const {cartState} = useCart();

    return(
        <nav className="nav-bar">
            <h1 className="nav-brand">The IT Mall</h1>
            <div className="search">
                <input type="search" placeholder="Search"/>
                <i className="bi bi-list"></i>
            </div>
            <div className="nav-bar-collapse">
                <ul className="list-container">
                    <li className="stacked"><Link to={"/"} className="stacked-link">Home</Link></li>
                    <li className="stacked"><a href="../product/product.html">Products</a></li>
                    <li className="stacked"><a href="../wishlist/wishlist.html">Wishlist</a></li>
                    <li className="stacked"><a href="../cart/cart.html">Cart</a></li>
                    <li className="stacked"><a href="../login/login.html">Login</a></li>
                </ul>
            </div>
            <ul className="menus">
                <li className="menu">
                    <Link to="/cart" className="stacked-link" id="cart"><i className="bi bi-cart"></i></Link>
                </li>
                <li className="menu notif cart-notif"><span>{cartState.count}</span></li>
                <li className="menu"><a href="" id="wishlist"><i className="bi bi-heart"></i></a></li>
                <li className="menu notif wishlist-notif"><span>0</span></li>
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