import ProductContext from "./ProductContext";
import { useState } from "react";

const  ProductState = (props)=>{
   const [products, setProducts] = useState([])
   const hosturl ="https://fakestoreapi.com/"

   const fetchProducts =()=>{
       fetch(`${hosturl}products`)
       .then(res => res.json())
       .then((res)=>{
         setProducts(res);
       })
   }

    return (
        <ProductContext.Provider value={{products,fetchProducts}} >
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState;