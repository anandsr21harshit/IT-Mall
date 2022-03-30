import {NavBar} from "./components/NavBar"
import { ProductListing } from "./pages/ProductListing";
import { WishList } from "./pages/WishList";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login.js";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/wishlist" element={<WishList/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/pl" element={<ProductListing/>}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </>
  );
}

export default App;
