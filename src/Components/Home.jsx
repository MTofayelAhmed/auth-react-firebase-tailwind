import React, { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';
import { getAuth } from "firebase/auth";

const Home = () => {
  const user = useContext(authContext)
  return (
    <div>
      <h2>this is home {user && <span>{user.displayName}</span> }</h2>
    </div>
  );
};

export default Home;