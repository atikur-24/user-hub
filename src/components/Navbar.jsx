import { useState } from "react";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
import Avatar from "../assets/icon/user.png";
import Logo from "../assets/logo/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "All User", path: "/all-user" },
    { name: "Add User", path: "/add-user" },
  ];

  return (
    <div className="nav-container pt-3 md:pt-6">
      <div className="border-b-secondary flex items-center justify-between gap-x-6 border-b pb-4">
        <Link href="/" className="flex items-center gap-x-1.5 lg:gap-x-2">
          <img
            className="h-[36px] w-full lg:h-[50px]"
            src={Logo}
            alt="User Hub"
          />
          <div className="text-center text-sm font-normal uppercase lg:text-lg lg:font-semibold">
            <span className="tracking-wider">User</span> <br />
            <span className="text-green-2 tracking-wide">Hub</span>
          </div>
        </Link>
        {/* large device navbar and nav item */}
        <nav className="hidden gap-x-3 text-xs md:flex lg:gap-x-6 lg:text-base">
          {navItems?.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        {/* small device navbar and nav item */}
        {isMenuOpen && (
          <div className="nav-container w-fulls absolute left-0 top-20 z-10 transition-all">
            <div className="border-secondary bg-bgSecondary rounded border p-4">
              {/* Mobile Nav Items Section */}
              <nav className="flex flex-col gap-y-2.5 text-sm">
                {navItems?.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        )}
        <div>
          <img
            className="hidden h-5 md:block lg:h-7"
            src={Avatar}
            alt="Avatar"
          />
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-4 md:hidden"
          >
            {/* dropdown for mobile devices */}
            <span>
              {isMenuOpen === true ? (
                <HiXMark className="h-6 w-6 cursor-pointer" />
              ) : (
                <HiBars3BottomRight className="h-6 w-6 cursor-pointer" />
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
