import React, { createContext } from 'react';

const AuthProvider = ({children}) => {
  const authContext = createContext(null)
const user = {displayName: "jack"}
  return (
    <authContext.Provider value={user}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;