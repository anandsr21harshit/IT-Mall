import {NavBar} from "./components/NavBar"
import { ProductListing } from "./pages/ProductListing";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
      <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/pl" element={<ProductListing/>}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </>
  );
}

export default App;
