import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const { user, handleLogOut } = useContext(AuthContext);
  return (
    <div className="navbar  backdrop-blur-xl bg-slate-50 z-50 fixed">
      {/* Left Section */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden active"
          >
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li className="active">
              <Link to="/">Home</Link>
            </li>
            <li className="active">
              <Link to="/all-visas">All Visas</Link>
            </li>
            <li className="active">
              <details>
                <summary>More</summary>
                <ul className="p-2">
                  <li className="active">
                    <Link to="/add-visa">Add Visa</Link>
                  </li>
                  <li className="active">
                    <Link to="/my-visas">My Added Visas</Link>
                  </li>
                  <li className="active">
                    <Link to="/my-applications">My Visa Applications</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl" to="/">
          Visa Navigator
        </Link>
      </div>

      {/* Center Section */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li className="active">
            <Link to="/all-visas">All Visas</Link>
          </li>
          <li className="active">
            <Link to="/add-visa">Add Visa</Link>
          </li>
          <li className="active">
            <Link to="/my-visas">My Added Visas</Link>
          </li>
          <li className="active">
            <Link to="/my-applications">My Visa Applications</Link>
          </li>
     
        </ul>
      </div>

      {/* Right Section */}
      <div className="navbar-end">
        {user ? (
          <>
            <div className="hidden md:flex items-center gap-2">
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-yellow-400"
                />
              )}
              <span className="text-sm font-medium">
                Welcome, {user.displayName || "User"}!
              </span>
            </div>
            <button
              onClick={handleLogOut}
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded"
            >
              Log Out
            </button>
          </>
        ) : (
          <NavLink to="/login">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded">
              Login
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
