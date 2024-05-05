import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/womens" key={"womens"} element={<Products />}></Route>
          <Route exact path="/mens" key={"mens"} element={<Products />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
