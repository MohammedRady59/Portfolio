import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" w-full font-nav py-4 text-white bg-[#111827]  md:fixed relative z-30 border-b shadow-lg  ">
      <nav className="container">
        <div className="flex flex-wrap items-center justify-between mx-auto  py-4">
          <h1 className="flex items-center space-x-3 rtl:space-x-reverse">
            <Link
              to="/"
              className="self-center text-2xl font-semibold whitespace-nowrap text-white"
            >
              MOHAMED RADY
            </Link>
          </h1>
          <div className="flex  space-x-3 md:space-x-0 ">
            <button
              type="button"
              className="block items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={handleMenuToggle}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`absolute top-16 left-0 w-full md:relative md:top-auto md:left-auto md:w-auto md:flex md:items-center md:justify-between transition-transform duration-300 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col font-medium text-white p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8  md:flex-row md:mt-0 md:border-0 bg-[#111827]">
              <li>
                <NavLink to="/" className="block py-2   px-3 md:p-0  rounded">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about"
                  className="block py-2 px-3 md:p-0  rounded "
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="work"
                  className="block py-2 px-3 md:p-0 rounded   "
                >
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact"
                  className="block py-2 px-3 md:p-0  rounded      "
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
