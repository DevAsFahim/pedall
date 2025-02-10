import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { footerLinks } from "../constants/footer";

export default function Footer() {
  return (
    <footer className="bg-muted-body px-4 md:px-6 pt-16 md:pt-24 pb-12">
      <div className="p-container">
        {/* Main Footer Content */}
        <div className="bg-white rounded-4xl px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Logo and Description */}
            <div className="space-y-6 col-span-2">
              <img src={logo} alt="Padal Logo" className="h-8" />
              <p className="text-[#838080] max-w-xs">
                Journey begins! As avid cyclists ourselves, we the joy and
                freedom that comes from pedaling on two wheels.
              </p>
            </div>

            {(Object.keys(footerLinks) as (keyof typeof footerLinks)[]).map(
              (key) => (
                <div key={key}>
                  <h3 className="text-xl font-semibold mb-4 capitalize">{key}</h3>
                  <ul className="space-y-3">
                    {footerLinks[key].map((item) => (
                      <li key={item.name} className="">
                        <Link
                          to={item.link}
                          className="text-[#838080] hover:text-gray-900 transition-colors group inline-block"
                          onClick={() => {
                            window.scrollTo({
                              top: 0,
                              behavior: "smooth"
                            });
                          }}
                        >
                          {item.name}
                          <div className="w-0 group-hover:w-full h-[1px] bg-black transition-all duration-500"></div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          <p className="text-gray-600 mb-4 md:mb-0">
            © 2025, All rights reserved
            {/* <a href="#" className="font-semibold text-gray-900">
              HiBootstrap
            </a> */}
          </p>
          <p className="text-gray-600 mb-4 md:mb-0">
          Trail Bike & Cycling Template Kit by Jegtheme.
          </p>

          {/* Social Links */}
          {/* <div className="flex items-center gap-4">
            <span className="text-gray-600">Follow Us:</span>
            {["facebook", "twitter", "instagram", "linkedin", "pinterest"].map(
              (social) => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label={`Follow us on ${social}`}
                >
                  <span className="w-5 h-5 inline-block">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" />
                    </svg>
                  </span>
                </a>
              )
            )}
          </div> */}
        </div>
      </div>
    </footer>
  );
}
