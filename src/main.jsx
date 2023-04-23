import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import Home from './Components/Home.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Order from './Components/Order.jsx';
import PrivateRoute from './Components/Route/PrivateRoute.jsx';
import Profile from './Components/profile/Profile.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [{
      path: '/',
      element: <Home></Home>
    },
  {
    path: '/login',
    element: <Login></Login>
  },

{path: '/register',
element: <Register></Register>

},
{
  path: '/order',
  element:  <PrivateRoute><Order></Order></PrivateRoute>
},
{
  path: '/profile',
  element: <PrivateRoute><Profile></Profile></PrivateRoute>
}



]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider> <RouterProvider router={router}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
