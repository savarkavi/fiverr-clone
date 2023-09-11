import { useEffect, useState } from "react";
import { navLinks, navCategories } from "../utils/constants";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate, useLocation } from "react-router-dom";
import request from "../utils/request";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleActive = () => {
    window.scrollY > 0 ? setIsActive(true) : setIsActive(false);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleLogout = async () => {
    try {
      setIsMenuOpen(false);
      await request.post("auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleActive);

    return () => {
      window.removeEventListener("scroll", handleActive);
    };
  }, []);

  const sellerLink = currentUser?.userInfo?.isSeller
    ? "Create a Gig"
    : "Become a seller";

  const renderedNavLinks = navLinks.map((link, i) => {
    return (
      <div
        key={i}
        className={`${
          isActive || pathname !== "/" ? "text-black" : "text-white"
        } text-lg cursor-pointer font-bold`}
      >
        {link.name}
      </div>
    );
  });

  const renderedNavCategories = navCategories.map((category, i) => {
    return (
      <Link
        to={`gigs?category=${category.cat}`}
        key={i}
        className="cursor-pointer"
      >
        {category.name}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 z-[99]">
      <div
        className={`flex justify-center p-6 transition-all duration-500 ${
          isActive || pathname !== "/"
            ? "bg-white border-b border-black"
            : "bg-green-800"
        }`}
      >
        <div className="flex w-[1440px] justify-between mx-auto">
          <div className="flex items-center gap-2">
            <div className="flex items-end gap-1">
              <Link to="/">
                <h2
                  className={`${
                    isActive || pathname !== "/"
                      ? "text-green-800"
                      : "text-white"
                  } text-4xl font-bold`}
                >
                  fiverr
                </h2>
              </Link>
              <div className="bg-green-500 w-2 h-2 rounded-full mb-1"></div>
            </div>
            <div className="ml-4 relative">
              <input
                type="text"
                placeholder="What service are you looking for?"
                className="p-2 w-[400px] border border-black outline-none text-left"
              />
              <div className="bg-black p-2 h-full w-11 flex justify-center items-center absolute right-0 top-0 cursor-pointer">
                <AiOutlineSearch className="text-white text-lg" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8">
            {renderedNavLinks}
            <div
              className={`${
                isActive || pathname !== "/" ? "text-black" : "text-white"
              } text-lg font-bold cursor-pointer`}
            >
              {sellerLink === "Create a Gig" ? (
                <Link to={`/addgig`}>Create a Gig</Link>
              ) : (
                sellerLink
              )}
            </div>
            {currentUser ? (
              <div
                className={`${
                  isActive || pathname !== "/" ? "text-black" : "text-white"
                } relative`}
              >
                <div
                  className="flex gap-2 items-center  cursor-pointer"
                  onClick={handleMenuToggle}
                >
                  <img
                    src={currentUser.userInfo.img}
                    alt="pp"
                    className="w-10 h-10 object-cover rounded-full"
                  />
                  <span className="text-lg  font-bold">
                    {currentUser.userInfo.username}
                  </span>
                </div>
                {isMenuOpen && (
                  <div className="flex flex-col gap-2 bg-white shadow-lg text-black absolute top-12 rounded-lg right-0">
                    <Link
                      to="/orders"
                      className="cursor-pointer hover:bg-gray-200 px-14 py-3 rounded-lg text-lg"
                    >
                      Orders
                    </Link>
                    <span className="cursor-pointer hover:bg-gray-200 px-14 py-3 text-lg">
                      Messages
                    </span>
                    <span
                      className="cursor-pointer hover:bg-gray-200 px-14 py-3 rounded-lg text-lg"
                      onClick={handleLogout}
                    >
                      Logout
                    </span>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className={`${
                  isActive || pathname !== "/" ? "text-black" : "text-white"
                } text-lg cursor-pointer font-bold `}
              >
                Sign In
              </Link>
            )}
            {!currentUser && (
              <Link
                to="/register"
                className={`${
                  isActive || pathname !== "/"
                    ? "text-green-800 border-green-800 hover:bg-green-800 hover:text-white"
                    : "text-white border-white hover:bg-white hover:text-green-800"
                } text-lg cursor-pointer font-bold border  px-4 py-1  transition-all`}
              >
                Join
              </Link>
            )}
          </div>
        </div>
      </div>
      {(isActive || pathname !== "/") && (
        <div className="w-full bg-white px-6 py-3">
          <div className="flex justify-between w-[1440px] mx-auto">
            {renderedNavCategories}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
