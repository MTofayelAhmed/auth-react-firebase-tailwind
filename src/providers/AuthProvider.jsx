import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import App from '../App';
import app from '../firebase/firebaseConfig';

const auth = getAuth(app)
 export   const authContext = createContext(null)

const AuthProvider = ({children}) => {
  const [user , setUser]= useState(null)

const authInfo = {user, }
  return (
    <authContext.Provider value={authInfo}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;