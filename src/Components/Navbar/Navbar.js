import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import Avatar from "../Footer/Avatar/Avatar";
const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const handleSignout = () => {
    signOut(auth);
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            <li>
              <a>About</a>
            </li>
            <li tabIndex="0">
              <a className="justify-between">Services</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Spicy Cook
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>About</a>
          </li>
          <li tabIndex="0">
            <a>Services</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end mr-10">
        {user ?<Avatar key={10} name={user?.displayName} handleSignout={handleSignout} ></Avatar> : 
          <Link to="/login" className="btn mx-10">
            Login
          </Link>
        }

        <Link to="/signup" className="btn">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
