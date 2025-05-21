import { Link } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  // déclaration de state en React
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Array containing navigation items
  const navItems = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Services", link: "/services" },
    { id: 3, title: "Portfolio", link: "/portfolio" },
    { id: 4, title: "Team", link: "/team" },
    { id: 5, title: "Blog", link: "/blog" },
    { id: 6, title: "DropDown", link: "/dropDown" },
    { id: 7, title: "Contact", link: "/Contact" },
  ];

  const location = useLocation();

  return (
    <>
      <nav className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <Link to="/" className="text-black text-2xl  font-bold">
              FlexStart
            </Link>
            <div className="space-x-7 md:flex hidden">
              {navItems.map((navItem) => {
                return (
                  <Link
                    key={navItem.id}
                    to={navItem.link}
                    className="text-black  hover:text-primary-400 transition duration-500"
                  >
                    {navItem.title}
                  </Link>
                );
              })}
            </div>

            <div className="md:hidden flex">
              <Hamburger
                direction="right"
                onToggle={(toggled) => {
                  setIsOpen(toggled);
                }}
              />
            </div>
            {/* Menu qui va s'afficher pour les versions mobiles */}
            <div
              className={
                isOpen
                  ? " z-50 md:hidden fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-900 bg-slate-900 bg-opacity-95 ease-in-out duration-500"
                  : "z-50 ease-in-out w-[70%] duration-500 fixed top-0 left-[-100%]"
              }
            >
              {/* Mobile Logo */}
              <h1 className="w-full text-xl font-bold text-primary-400 m-4">
                FlexStart
              </h1>

              {/* Mobile Navigation Items */}
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className={`${
                    location.hash === item.link ? "bg-orange-600" : ""
                  } p-4 rounded-xl hover:bg-blue-400 duration-300 cursor-pointer border-b border-gray-600`}
                >
                  <a onClick={() => setIsOpen(false)} href={item.link}>
                    {item.title}
                  </a>
                </li>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
