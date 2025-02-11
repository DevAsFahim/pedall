import { FaFacebook, FaLinkedin } from "react-icons/fa6";

type TFooterLinks = {
  company: Array<{ name: string; link: string }>;
  category: Array<{ name: string; link: string }>;
  support: Array<{ name: string; link: string }>;
};

export const footerLinks: TFooterLinks = {
  company: [
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Our Products",
      link: "/products",
    },
    {
      name: "New Arrivals",
      link: "/products",
    },
    {
      name: "All Bikes",
      link: "/products",
    },
  ],
  category: [
    {
      name: "Mountain Bike",
      link: "/products",
    },
    {
      name: "Gear Bike",
      link: "/products",
    },
    {
      name: "Electric Bike",
      link: "/products",
    },
  ],
  support: [
    {
      name: "Terms & Condition",
      link: "/",
    },
    {
      name: "Bike Licenses",
      link: "/",
    },
    {
      name: "Privacy Policy",
      link: "/",
    },
  ],
};

export const socialLinks = [
  {
    icon: <FaFacebook />,
    link: 'https://www.facebook.com/as.fahim.735'
  },
  {
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/dev-as-fahim/'
  },
] 
