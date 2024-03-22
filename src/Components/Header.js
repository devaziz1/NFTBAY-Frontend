import React, { useState, useEffect } from "react";
import { ReactComponent as Vector } from "../Assets/Vector.svg";
import { useNavigate } from "react-router-dom";

import { BsShopWindow } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { AiTwotoneHeart } from "react-icons/ai";

const Header = () => {
  const navigate = useNavigate();

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [HamBurgerContent, setHamburgerContent] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const HandleHamBurgerContent = () => {
    setHamburgerContent(!HamBurgerContent);
    console.log(selectedCategory);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchInput(category);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="text-slate-500 p-4 ">
      <div className="grid  md:grid-cols-12 ">
        <div className="md:col-span-3 ">
          <div
            onClick={() => {
              navigate("/LandingPage");
            }}
            className="flex mt-2 "
          >
            <BsShopWindow
              className="cursor-pointer"
              style={{ width: "25px", height: "25px" }}
            />
            <h2 className="ml-[10px] text-xl cursor-pointer ">NTFBAY</h2>
          </div>
        </div>
        {!isSmallScreen ? (
          <>
            <div className="md:col-span-6  ">
              <form>
                <div className="flex relative">
                  <button
                    id="dropdown-button"
                    data-dropdown-toggle="dropdown"
                    className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                    type="button"
                    onClick={toggleDropdown}
                  >
                    All categories{" "}
                    <svg
                      className="w-2.5 h-2.5 ml-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  {isDropdownOpen && (
                    <div
                      id="dropdown"
                      className="z-10 absolute top-full left-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdown-button"
                      >
                        <li>
                          <button
                            type="button"
                            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => {
                              handleCategoryClick("Art");
                              toggleDropdown();
                            }}
                          >
                            Art
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => {
                              handleCategoryClick("Collectibles");
                              toggleDropdown();
                            }}
                          >
                            Collectibles
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => {
                              handleCategoryClick("Music");
                              toggleDropdown();
                            }}
                          >
                            Music
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => {
                              handleCategoryClick("Video");
                              toggleDropdown();
                            }}
                          >
                            Video
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => {
                              handleCategoryClick("Photography");
                              toggleDropdown();
                            }}
                          >
                            Photography
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => {
                              handleCategoryClick("Utility");
                              toggleDropdown();
                            }}
                          >
                            Utility
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => {
                              handleCategoryClick("Sport");
                              toggleDropdown();
                            }}
                          >
                            Sport
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => {
                              handleCategoryClick(" Virtual World");
                              toggleDropdown();
                            }}
                          >
                            Virtual World
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                  <div className="relative w-full flex">
                    <input
                      type="search"
                      id="search-dropdown"
                      className="block p-2.5 w-full lg:w-full xl:w-full  z-20 text-sm text-gray-900 bg-gray-50  border-l-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                      placeholder="Search"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      required
                    />
                    <button
                      type="submit"
                      onClick={() => {
                        navigate("/Search");
                      }}
                      className="p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                      <span className="sr-only">Search</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="md:col-span-3 ">
              {/* Links */}
              <ul className="flex space-x-7 justify-end  ">
                <li>
                  <BsFillPersonFill
                    className="cursor-pointer"
                    onClick={() => {
                      navigate("/User");
                    }}
                    style={{ width: "40px", height: "25px" }}
                  />
                  Profile
                </li>
                <li>
                  <Vector
                    className="cursor-pointer"
                    onClick={() => {
                      navigate("/Seller");
                    }}
                    style={{ width: "25px", height: "25px" }}
                  />
                  Sell
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    navigate("/MyOrders");
                  }}
                >
                  <AiTwotoneHeart style={{ width: "35px", height: "25px" }} />
                  Order
                </li>
              </ul>
            </div>
          </>
        ) : (
          // For small screens, display the side drawer button
          <div className="col-span-5">
            <button className="text-white">
              <i className="fas fa-bars">OPEN Drawer</i>
            </button>
          </div>
        )}
      </div>
      {isSmallScreen && (
        <div className="col-span-1 absolute top-0 right-0 mt-5 mr-3">
          <button
            onClick={HandleHamBurgerContent}
            data-collapse-toggle="navbar-default"
            type="button"
            className="items-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
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
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      )}

      {HamBurgerContent && (
        <>
          <div className="md:hidden mt-3">
            <form>
              <div className="flex relative">
                <button
                  id="dropdown-button"
                  data-dropdown-toggle="dropdown"
                  className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                  type="button"
                  onClick={toggleDropdown}
                >
                  All categories{" "}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div
                    id="dropdown"
                    className="z-10 absolute top-full left-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdown-button"
                    >
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => {
                            handleCategoryClick("Art");
                            toggleDropdown();
                          }}
                        >
                          Art
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => {
                            handleCategoryClick("Collectibles");
                            toggleDropdown();
                          }}
                        >
                          Collectibles
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => {
                            handleCategoryClick("Music");
                            toggleDropdown();
                          }}
                        >
                          Music
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => {
                            handleCategoryClick("Video");
                            toggleDropdown();
                          }}
                        >
                          Video
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => {
                            handleCategoryClick("Photography");
                            toggleDropdown();
                          }}
                        >
                          Photography
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => {
                            handleCategoryClick("Utility");
                            toggleDropdown();
                          }}
                        >
                          Utility
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => {
                            handleCategoryClick("Sport");
                            toggleDropdown();
                          }}
                        >
                          Sport
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => {
                            handleCategoryClick(" Virtual World");
                            toggleDropdown();
                          }}
                        >
                          Virtual World
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
                <div className="relative w-full">
                  <input
                    type="search"
                    id="search-dropdown"
                    className="block p-2.5 w-full lg:w-1/2 xl:w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                    placeholder="Search"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    required
                  />
                  <button
                    onClick={() => {
                      navigate("/Search");
                    }}
                    type="submit"
                    className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </div>
              </div>
            </form>
            <ul className="mt-4 space-y-5 ">
              <li className="flex ">
                <BsFillPersonFill
                  className="cursor-pointer"
                  onClick={() => {
                    navigate("/User");
                  }}
                  style={{ width: "40px", height: "25px" }}
                />
                Profile
              </li>
              <li className="flex">
                <FaFileInvoiceDollar
                  className="cursor-pointer"
                  onClick={() => {
                    navigate("/Seller");
                  }}
                  style={{ width: "40px", height: "25px" }}
                />
                Sell
              </li>
              <li
                className="cursor-pointer flex"
                onClick={() => {
                  navigate("/MyOrders");
                }}
              >
                <AiTwotoneHeart style={{ width: "40px", height: "25px" }} />
                Orders
              </li>
            </ul>
          </div>
          ;
        </>
      )}
    </header>
  );
};

export default Header;
