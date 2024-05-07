import AuthContext from "./AuthContext";
import { useEffect, useState } from "react";
import { auth } from "../firebase/Firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthState = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user) {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
    } else {
      
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  }

  return (
    <AuthContext.Provider value={{ currentUser,userLoggedIn, loading,initializeUser}}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
