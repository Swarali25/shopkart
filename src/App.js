import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import ProductState from "./context/ProductState";
import AuthState from "./context/AuthState";
import ProductDetails from "./components/ProductDetails";
import React ,{useState} from "react";
function App() {
  const [mode, setMode] = useState("light");
  
  const changeMode = ()=>{
    if(mode === "dark"){
      document.body.style.backgroundColor = "white";
       document.body.style.color = "black";
       setMode("light")
    }
    else{
      document.body.style.backgroundColor = "#231d1d";
      document.body.style.color = "white"
      setMode("dark")
    }
  }
  return (
    <div>
      <AuthState>
      <ProductState>
      <Router>
        <Navbar mode={mode} changeMode={changeMode}/>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/womens" key={"womens"} element={<Products category={"Women's Clothing"}/>}></Route>
          <Route exact path="/mens" key={"mens"} element={<Products category={"Men's Clothing"} />}></Route>
          <Route exact path="/electronics" key={"electronics"} element={<Products category={"Electronics"} />}></Route>
          <Route exact path="/jewelery" key={"jewelery"} element={<Products category={"Jewelery"} />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route path="/product/:id" element={<ProductDetails/>} />
        </Routes>
        <Footer mode={mode}/>
      </Router>
      </ProductState>
      </AuthState>
    </div>
  );
}

export default App;
