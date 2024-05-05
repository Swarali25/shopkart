import React ,{useContext, useEffect} from "react";
import ProductContext from "../context/ProductContext";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const context = useContext(ProductContext);
  const authContext = useContext(AuthContext);
  const { cartItems,removeItemFromCart } = context;
  const { userLoggedIn, currentUser } = authContext;
  let navigate = useNavigate();
  useEffect(() => {
    console.log(cartItems)
  }, [cartItems])

  const removeItem = (id)=>{
    removeItemFromCart(currentUser.email,id);
   
  }

  const addMoreHandler=()=>{
    let category= cartItems[cartItems.length-1].category;
    if(category === "men's clothing"){
      navigate("/mens")
    }
    else if(category === "women's clothing"){
      navigate("/womens")
    }
   else{
    navigate(`/${category.trim()}`)
   }
    
  }
  
  return (
    <div className="container  my-3">
      <h2>Cart Items</h2>
      <div className="row">
      {userLoggedIn && cartItems.map((product) => {
        return <div key={product.id} className="col-md-3 my-3 mx-5" style={{ textDecoration: "none" }}>
          <div>
            <div className="card">
              <img
                src={product.image}
                className="card-img-top productItemImg"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title" style={{ minHeight: "50px" }}>
                  {product.title.length > 80
                    ? product.title.slice(0, 80) + ".."
                    : product.title}
                </h5>
                <p className="card-text">Rs. {product.price}</p>
                <button className="btn btn-primary my-3 text-center" onClick={(id)=>{removeItem(product.id)}}>Remove</button>
              </div>
            </div>
          </div>
        </div>;
      }) 
      }
      </div>

      { userLoggedIn && cartItems.length >0 && <div className="d-flex justify-content-center align-items-center"><button className="btn btn-primary my-3 mx-3" onClick={addMoreHandler}>Add More</button><button className="btn btn-primary my-3 mx-3">Buy Items</button>  <h3>Total Cost : {cartItems.reduce((cur,item)=>{return cur+item.price},0)}</h3> </div>}
      {!userLoggedIn && <h2>Login to Add items to Cart</h2>}
    </div>
  );
};

export default Cart;
