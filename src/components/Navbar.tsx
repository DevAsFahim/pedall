// import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-[#E7F6F5] py-4 ">
      <nav className="flex justify-between items-center max-w-[1170px] mx-auto">
        <div className="">
          <img src={logo} alt="logo" className="w-[120px]" />
        </div>

        <div className="flex items-center justify-between gap-5 font-noto-sans text-primary-text font-semibold">
          <a className="hover:text-primary" href="/">
            Home
          </a>
          <a className="hover:text-primary" href="/">
            About
          </a>
          <a className="hover:text-primary" href="/">
            Products
          </a>
        </div>

        <div>
          <button className="bg-primary text-[18px] font-semibold px-6 py-2 rounded-full text-white flex items-center gap-4 hover:gap-5 hover:bg-deep-blue transition-all cursor-pointer">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
