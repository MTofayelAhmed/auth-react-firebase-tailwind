import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../providers/AuthProvider";

const Header = () => {

  const {user, logOut}= useContext(authContext);
const handleSignOut = ()=> {
  logOut()
 .then(result => {
console.log(result.user)
 })
 .catch(error=> {
  console.log(error)
 })
}

  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/order">Order</Link>
     {user && <Link className="btn btn-ghost normal-case text-xl" to="/profile">Profile</Link>}
      
       { 
        user ? <>
         <span className="btn btn-ghost normal-case text-xl" >{user.email}</span>
         <button onClick={handleSignOut} className="btn btn-active  btn-ghost normal-case text-xl">SignOut</button>
        </> :<Link to='/login'>Login</Link>
       }
      </div>
    </div>
  );
};

export default Header;
