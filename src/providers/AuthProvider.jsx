import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import App from '../App';
import app from '../firebase/firebaseConfig';

const auth = getAuth(app)
 const provider = new GoogleAuthProvider();
 export   const authContext = createContext(null)

const AuthProvider = ({children}) => {
  const [user , setUser]= useState(null)
  const [loading, setLoading]= useState(true)
const createUser = ( email,password)=>{
  return createUserWithEmailAndPassword(auth, email, password)
}

const signIn = (email, password)=>{
  return signInWithEmailAndPassword(auth, email, password)
}
const googleSignIn= ()=>{
  return signInWithPopup(auth, provider)
}

useEffect(()=>{
const unsubscribe =  onAuthStateChanged(auth, (currentUser)=>{
    console.log(currentUser)
    setUser(currentUser)
    setLoading(false);
  })
  return ()=>{
    unsubscribe()
  }
},[])

const logOut = ()=>{
 return signOut(auth)
}



const authInfo = {createUser, signIn, user, logOut, loading, googleSignIn}
  return (
    <authContext.Provider value={authInfo}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;