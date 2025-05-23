import { useState } from "react";
import { Link } from "react-router-dom";
import { logOut, selectCurrentUser } from "../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { FiMenu, FiX } from "react-icons/fi";

import logo from "../assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  const cartData = useAppSelector((state) => state.cart);
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logOut());
    setMenuOpen(false); // Close menu after logout
  };

  return (
    <div className="bg-[#E7F6F5] py-4 fixed w-full z-100">
      <nav className="flex justify-between items-center p-container">
        <Link to="/">
          <img src={logo} alt="logo" className="w-[120px]" />
        </Link>

        <div className="hidden md:flex items-center gap-5 font-noto-sans text-primary-text font-semibold">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <Link to="/about" className="hover:text-primary">
            About
          </Link>
          <Link to="/products" className="hover:text-primary">
            Products
          </Link>
          <Link to="/blogs" className="hover:text-primary">
            Blogs
          </Link>
          {user ? (
            <Link
              to={`/${user?.role === "admin" ? "admin" : "user"}/dashboard`}
              className="hover:text-primary"
            >
              Dashboard
            </Link>
          ) : (
            ""
          )}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-5">
          <div className="relative flex items-center mr-3">
            <Link
              to="/checkout"
              className="cursor-pointer text-xl hover:text-primary text-primary-text"
            >
              <FaCartShopping />
            </Link>
            {cartData.totalQuantity ? (
              <div className="absolute -top-1.5 -right-1.5 bg-primary rounded-full aspect-square flex items-center justify-center w-3 text-[8px] text-white">
                {cartData.totalQuantity}
              </div>
            ) : (
              ""
            )}
          </div>
          {!user ? (
            <>
              <Link
                to="/login"
                className="bg-primary text-[18px] font-semibold px-6 py-2 rounded-full text-white hover:bg-deep-blue transition-all cursor-pointer"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-primary text-[18px] font-semibold px-6 py-2 rounded-full text-white hover:bg-deep-blue transition-all cursor-pointer"
              >
                Sign up
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-primary text-[18px] font-semibold px-6 py-2 rounded-full text-white hover:bg-deep-blue transition-all cursor-pointer"
            >
              Logout
            </button>
          )}
        </div>

        <button
          className="md:hidden text-primary text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FiMenu />
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full bg-muted-body transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col items-start px-16 pt-20`}
      >
        <button
          className="text-primary text-3xl absolute top-5 right-5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FiX />
        </button>
        <Link
          to="/"
          className="py-3 text-xl text-primary-text hover:text-primary"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="py-3 text-xl text-primary-text hover:text-primary"
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to="/products"
          className="py-3 text-xl text-primary-text hover:text-primary"
          onClick={() => setMenuOpen(false)}
        >
          Products
        </Link>
        {user ? (
          <Link
            to={`/${user?.role === "admin" ? "admin" : "user"}/dashboard`}
            className="py-3 text-xl text-primary-text hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </Link>
        ) : (
          ""
        )}

<div className="relative flex items-center mr-3">
            <Link
              to="/checkout"
              className="cursor-pointer text-xl hover:text-primary text-primary-text"
            >
              <FaCartShopping />
            </Link>
            {cartData.totalQuantity ? (
              <div className="absolute -top-1.5 -right-1.5 bg-primary rounded-full aspect-square flex items-center justify-center w-3 text-[8px] text-white">
                {cartData.totalQuantity}
              </div>
            ) : (
              ""
            )}
          </div>

        {!user ? (
          <div className="flex gap-5">
            <Link
              to="/login"
              className="mt-5 bg-primary text-sm px-6 py-2 rounded-full text-white hover:bg-deep-blue transition-all cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="mt-5 bg-primary text-sm px-6 py-2 rounded-full text-white hover:bg-deep-blue transition-all cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              Sign up
            </Link>
          </div>
        ) : (
          <button
            onClick={handleLogout}
            className="mt-5 bg-primary text-xl px-6 py-2 rounded-full text-white hover:bg-deep-blue transition-all cursor-pointer"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
