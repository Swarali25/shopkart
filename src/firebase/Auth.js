import { GoogleAuthProvider } from 'firebase/auth'
import { auth } from "./Firebase";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,signInWithPopup} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = (email,password) =>{
    return  createUserWithEmailAndPassword(auth,email,password);
}

export const doSignInWithEmailAndPassword = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password);
}

export const doSignInWithGoogle = async() =>{
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth,provider);
    console.log(result)
    return result;
}

export const doSignOut = ()=>{
    return auth.signOut()
}