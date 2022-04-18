import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import cook from '../../images/spicycooklogo.png'
import Avatar from "../Avatar/Avatar";

import { Link } from "react-router-dom";
const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const handleSignout = () => {
    signOut(auth);
  };
  return (
    <div className="navbar sticky top-0 bg-gray-900">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-base-200 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            
            <li tabIndex="0">
              <Link to="/" className="justify-between">Home</Link>
            </li>
            <li>
             <Link to='/blogs'>Blogs </Link>
            </li>
            <li>
              <Link to='/services'>Services </Link>
            </li>
            <li>
              <Link to='/about'>About </Link>
            </li>
            
          </ul>
        </div>
        <Link to="/" className="mx-10 w-52 bg-transparent text-base-100 normal-case text-xl flex items-center">
          <img className="mx-2 " src={cook} alt="" />
          <span className="hidden md:block" >Spicy Cook</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
        <Link to="/home#services" className="text-white mr-3">Services</Link>
        <Link to="/about" className="text-white mr-3">About</Link>
        <Link to="/blogs" className="text-white mr-3">Blogs</Link>
       
        <Link to="/checkout" className="text-white mr-3">Checkout</Link>
        </ul>
      </div>
      <div className="navbar-end mr-10  ">
        {user ?<Avatar key={10} name={user?.displayName} handleSignout={handleSignout} ></Avatar> : 
          <Link to="/login" className="btn mx-10">
            Login
          </Link>
        }

        <Link to="/signup" className="btn md:btn-md  sm:btn-sm">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
