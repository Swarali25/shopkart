import ProductContext from "./ProductContext";
import { useState } from "react";

const  ProductState = (props)=>{
   const [products, setProducts] = useState([])
   const [currentProduct,setCurrentProduct]=useState([]);
   const [cartItems,setCartItems]=useState([])
   const hosturl ="https://fakestoreapi.com/"

   const fetchProducts =()=>{
       fetch(`${hosturl}products`)
       .then(res => res.json())
       .then((res)=>{
         setProducts(res);
       })
   }

   const fetchProductByID =(id)=>{
        fetch(`${hosturl}products/${id}`)
        .then(res => res.json())
        .then((res)=>{
            console.log(res)
            setCurrentProduct(res);
        })
   }

   const addToCart = (email,product)=>{
       let newCart =cartItems.concat(product)
       setCartItems(newCart);
       localStorage.setItem(email, JSON.stringify(newCart));
   }

   const removeItemFromCart = (email,id)=>{
     let newCart = cartItems.filter((item)=> {return id !== item.id});
     setCartItems(newCart);
     localStorage.setItem(email, JSON.stringify(newCart));
   }

   const initializeCartItems = (email)=>{
     if(localStorage.getItem(email) != null){
        setCartItems(JSON.parse(localStorage.getItem(email)));
     }
   }
   const resetCartItems = ()=>{
    setCartItems([]);
   }

    return (
        <ProductContext.Provider value={{products,fetchProducts,fetchProductByID,currentProduct,addToCart,cartItems,removeItemFromCart,initializeCartItems,resetCartItems,setCurrentProduct}} >
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState;