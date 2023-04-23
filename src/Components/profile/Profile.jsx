import React, { useContext } from 'react';
import { authContext } from '../../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const Profile = ({children}) => {
  const {user}= useContext(authContext)
  if(user){
    return children;
  }
  return <Navigate to='/login'></Navigate>;
};

export default Profile;