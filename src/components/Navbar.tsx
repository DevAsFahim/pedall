// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { logOut, selectCurrentUser } from "../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Navbar = () => {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className="bg-[#E7F6F5] py-4 ">
      <nav className="flex justify-between items-center max-w-[1170px] mx-auto">
        <Link to="/" className="">
          <img src={logo} alt="logo" className="w-[120px]" />
        </Link>

        <div className="flex items-center justify-between gap-5 font-noto-sans text-primary-text font-semibold">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <a className="hover:text-primary" href="/">
            About
          </a>
          <Link to="/products" className="hover:text-primary">
            Products
          </Link>
        </div>

        <div className="flex justify-center items-center">
          {!user ? (
            <>
              <Link
                to="/login"
                className="bg-primary text-[18px] font-semibold px-6 py-2 rounded-full text-white flex items-center gap-4 hover:gap-5 hover:bg-deep-blue transition-all cursor-pointer"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-primary text-[18px] font-semibold px-6 py-2 rounded-full text-white flex items-center gap-4 hover:gap-5 hover:bg-deep-blue transition-all cursor-pointer"
              >
                Sign up
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-primary text-[18px] font-semibold px-6 py-2 rounded-full text-white flex items-center gap-4 hover:gap-5 hover:bg-deep-blue transition-all cursor-pointer"
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
