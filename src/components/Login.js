import React ,{useContext, useState}from 'react'
import googleIcon from "../assets/googleIcon.png";
import {doSignInWithEmailAndPassword,doSignInWithGoogle} from "../firebase/Auth"
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [credentials, setCredentials] = useState({email:"",password:""});
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [erroMessage, setErroMessage] = useState();
  const context = useContext(AuthContext);
  const {initializeUser}=context;
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault()
     if(!isSigningIn){
      try{
        setIsSigningIn(true);
        await doSignInWithEmailAndPassword(credentials.email,credentials.password);
        initializeUser({email:credentials.email,password:credentials.password});
        navigate("/");
      }
      catch(e){
        setIsSigningIn(false);
        setErroMessage(e.message);
        alert(e.message,"Try again")
        navigate("/login");
        setCredentials({email:"",password:""})
      }
     }

    
  };

  const onGmailSignIn=async()=>{
    console.log("onGmailSignIN")
    if(!isSigningIn){
      try{
        setIsSigningIn(true);
        await doSignInWithGoogle();
        navigate("/");
      }
      catch(e){
        setErroMessage(e.message);
        alert(e.message,"Try again")
        setIsSigningIn(false);
      }
     }
  }


  const onChangeHandler = (e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value});
  }
  return (
    <div className="container-md my-4">
    <div className="col-md-6" style={{margin:"auto",border:"1px solid grey", borderRadius:"5px"}}>
    <form className="p-3" onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          name="email"
          value={credentials.email}
          onChange={onChangeHandler}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={credentials.password}
          onChange={onChangeHandler}
        />
      </div>
      <button type="submit" className="btn btn-primary">
         Sign In
      </button>
      </form>
      <h3 className="text-center">OR</h3>
      <div className="mb-3 d-flex align-items-center justify-content-center" style={{backgroundColor:"wheat",cursor:"pointer"}} onClick={onGmailSignIn}>
          <img src={googleIcon} height={60} alt="..."/>
          <p className="mx-4" style={{margin:"0px", color:"grey"}}>Sign In With Google</p>
      </div>
      <hr />
   
    </div>

    </div>
  )
}

export default Login