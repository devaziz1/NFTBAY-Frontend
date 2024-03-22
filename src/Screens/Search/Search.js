import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import { ReactComponent as GridView } from "../../Assets/gridview.svg";
import { ReactComponent as ListView } from "../../Assets/listview.svg";
import Button from "../../Components/Button";
import Footer from "../../Components/Footer";

export default function Search() {
  const [showCat, setShowCat] = useState(true);
  const [gridView, setGridView] = useState(false);
  const [listView, setListView] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const checkScreenSize = () => {
      if (window.innerWidth < 1024) {
        setShowFilter(true);
      } else {
        setShowFilter(false);
      }
    };

    // Initial check
    checkScreenSize();

    // Add event listener to check screen size on resize
    window.addEventListener("resize", checkScreenSize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);
  return (
    <>
      <Header />
      <div className="grid grid-cols-12 p-3 gap-2">
        <div className="xs:hidden lg:block lg:col-span-2 lg:mt-2">
          <div>
            <div className="border-t pt-1 border-gray-300 flex justify-between font-semibold">
              Categories
              {showCat ? (
                <img
                  className="cursor-pointer"
                  src={require("../../Images/expand_more.png")}
                  alt="Arrow"
                  onClick={() => {
                    setShowCat(false);
                  }}
                />
              ) : (
                <img
                  className="cursor-pointer"
                  alt="Arrow"
                  src={require("../../Images/expand_less.png")}
                  onClick={() => {
                    setShowCat(true);
                  }}
                />
              )}
            </div>
          </div>

          {showCat && (
            <>
              <div className="flex items-center mb-4 mt-3">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Art
                </label>
              </div>

              <div className="flex items-center mb-4 mt-3">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Collectibles
                </label>
              </div>
              <div className="flex items-center mb-4 mt-3">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Music
                </label>
              </div>
              <div className="flex items-center mb-4 mt-3">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Photography
                </label>
              </div>
              <div className="flex items-center mb-4 mt-3">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Video
                </label>
              </div>
              <div className="flex items-center mb-4 mt-3">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Utility
                </label>
              </div>
              <div className="flex items-center mb-4 mt-3">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Sports
                </label>
              </div>
              <div className="flex items-center mb-4 mt-3">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Virtual World
                </label>
              </div>
            </>
          )}
        </div>
        <div className="xs:col-span-12 lg:col-span-10 p-2 ">
          <div className="grid grid-cols-12 border border-slate-300 p-2 mb-1 rounded">
            <div className="xs:col-span-5 md:col-span-4 mt-1">
              150 NTFs Found
            </div>
            <div className="xs:col-span-1 md:col-span-4"></div>
            <div className="xs:col-span-6 md:col-span-4 flex justify-end">
              <div className="flex">
                <select
                  id="countries"
                  defaultValue="None"
                  className="bg-gray-50 xs:hidden sm:block border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Featured</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
                <div
                  className={`border border-gray-300 ${
                    gridView ? "bg-slate-200" : ""
                  } flex ml-2 p-1 rounded-s-lg `}
                >
                  <button
                    onClick={() => {
                      setListView(false);
                      setGridView(true);
                    }}
                  >
                    <GridView
                      style={{
                        width: "25px",
                        height: "25px",
                      }}
                    />
                  </button>
                </div>
                <div
                  className={`border border-gray-300 ${
                    listView ? "bg-slate-200" : ""
                  } flex  p-1 rounded-r-lg `}
                >
                  <button
                    onClick={() => {
                      setGridView(false);
                      setListView(true);
                    }}
                  >
                    <ListView
                      style={{
                        width: "25px",
                        height: "25px",
                      }}
                    />
                  </button>
                </div>

                {showFilter && (
                  <div>
                    <svg
                      fill="none"
                      onClick={openModal}
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      className="mt-1 h-7 w-7 ml-1 cursor-pointer"
                    >
                      <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>
          {isModalOpen && (
            <div
              className="fixed top-0  left-0 right-0 z-50 w-full p-10  h-screen flex items-center justify-center bg-opacity-50 bg-gray-800"
              onClick={closeModal}
            >
              <div
                className="relative bg-white rounded-lg shadow dark:bg-gray-700"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal header */}
                <div className="flex items-start  justify-between p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold mr-5 text-gray-900 dark:text-white">
                    Select Category
                  </h3>
                  <button
                    onClick={closeModal}
                    type="button"
                    className="text-gray-400 ml-10  bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only ">Close modal</span>
                  </button>
                </div>

                <div className="p-5 space-y-6">
                  <div className="flex items-center mb-4 mt-3">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Art
                    </label>
                  </div>

                  <div className="flex items-center mb-4 mt-3">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Collectibles
                    </label>
                  </div>
                  <div className="flex items-center mb-4 mt-3">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Music
                    </label>
                  </div>
                  <div className="flex items-center mb-4 mt-3">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Photography
                    </label>
                  </div>
                  <div className="flex items-center mb-4 mt-3">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Video
                    </label>
                  </div>
                  <div className="flex items-center mb-4 mt-3">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Utility
                    </label>
                  </div>
                  <div className="flex items-center mb-4 mt-3">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Sports
                    </label>
                  </div>
                  <div className="flex items-center mb-4 mt-3">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Virtual World
                    </label>
                  </div>
                </div>

                <div className="flex  justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    onClick={closeModal}
                    type="button"
                    className="text-gray-500  bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  >
                    Close
                  </button>
                  <button
                    onClick={closeModal}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-12">
            {listView ? (
              <>
                <div className="border border-gray-300 p-3 rounded mt-2 col-span-12  gap-2 ">
                  <div className="grid grid-cols-12 gap-2">
                    <div className="xs:col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2">
                      <img
                        className="w-full h-full object-cover"
                        alt="Arrow"
                        src={require("../../Images/image 33.png")}
                      />
                    </div>
                    <div className="xs:col-span-6  sm:col-span-8 md:col-span-9 flex flex-col justify-between lg:col-span-10">
                      <h1 className="col-span-10 font-inter text-lg font-semibold">
                        Distant Galaxy
                      </h1>
                      <div className="col-span-2 font-mono">1.64 ETH</div>
                      <div className="xs:hidden sm:block col-span-10 mt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae labore in placeat quisquam assumenda quos
                        minima numquam eius quibusdam culpa voluptas porro
                        eveniet veritatis, ad cum repellat distinctio quam at.
                      </div>
                      <div className="col-span-10  flex mt-1 justify-between items-center">
                        <div className=" xs:text-xs  sm:text-base sm:col-span-5 xs:col-span-10 text-blue-700 font-semibold">
                          View details
                        </div>

                        <div className="xs:col-span-10 sm:col-span-5 ">
                          <Button />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-300 p-3 rounded mt-2 col-span-12  gap-2 ">
                  <div className="grid grid-cols-12 gap-2">
                    <div className="xs:col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2">
                      <img
                        className="w-full h-full object-cover"
                        alt="Arrow"
                        src={require("../../Images/image 33.png")}
                      />
                    </div>
                    <div className="xs:col-span-6  sm:col-span-8 md:col-span-9 flex flex-col justify-between lg:col-span-10">
                      <h1 className="col-span-10 font-inter text-lg font-semibold">
                        Distant Galaxy
                      </h1>
                      <div className="col-span-2 font-mono">1.64 ETH</div>
                      <div className="xs:hidden sm:block col-span-10 mt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae labore in placeat quisquam assumenda quos
                        minima numquam eius quibusdam culpa voluptas porro
                        eveniet veritatis, ad cum repellat distinctio quam at.
                      </div>
                      <div className="col-span-10  flex mt-1 justify-between items-center">
                        <div className=" xs:text-xs  sm:text-base sm:col-span-5 xs:col-span-10 text-blue-700 font-semibold">
                          View details
                        </div>

                        <div className="xs:col-span-10 sm:col-span-5 ">
                          <Button />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-300 p-3 rounded mt-2 col-span-12  gap-2 ">
                  <div className="grid grid-cols-12 gap-2">
                    <div className="xs:col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2">
                      <img
                        className="w-full h-full object-cover"
                        alt="Arrow"
                        src={require("../../Images/image 33.png")}
                      />
                    </div>
                    <div className="xs:col-span-6  sm:col-span-8 md:col-span-9 flex flex-col justify-between lg:col-span-10">
                      <h1 className="col-span-10 font-inter text-lg font-semibold">
                        Distant Galaxy
                      </h1>
                      <div className="col-span-2 font-mono">1.64 ETH</div>
                      <div className="xs:hidden sm:block col-span-10 mt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae labore in placeat quisquam assumenda quos
                        minima numquam eius quibusdam culpa voluptas porro
                        eveniet veritatis, ad cum repellat distinctio quam at.
                      </div>
                      <div className="col-span-10  flex mt-1 justify-between items-center">
                        <div className=" xs:text-xs  sm:text-base sm:col-span-5 xs:col-span-10 text-blue-700 font-semibold">
                          View details
                        </div>

                        <div className="xs:col-span-10 sm:col-span-5 ">
                          <Button />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="border border-gray-300 p-3 rounded mt-2 col-span-12  ">
                  <div className="grid grid-cols-12 p-3 gap-5 ">
                    <div className="xs:col-span-12 sm:col-span-6  md:col-span-6  lg:col-span-4 xl:col-span-3">
                      <img
                        src={require("../../Images/image 33.png")}
                        alt="DistantGalaxy"
                        className="w-full h-auto rounded"
                      />
                      <div className="grid grid-cols-12">
                        <div className="xs:col-span-12 md:col-span-8 lg:col-span-12  ">
                          <div className="xs:text-sm font-inter md:text-lg  mt-3 text-black font-semibold">
                            Distant Galaxy
                          </div>
                          <div className=" flex mt-3">
                            <img
                              src={require("../../Images/image 33.png")}
                              alt="DistantGalaxy1"
                              className="w-5 h-5 rounded-full"
                            />
                            <div className="font-mono text-[#3B3B3B] ml-3 xs:text-[12px] md:text-sm ">
                              MoonDancer
                            </div>
                          </div>
                          <div className="font-mono text-[#858584] mt-3">
                            Price
                          </div>
                          <div className="xs:col-span-0 md:col-span-4  lg:col-span-5 xl:col-span-6"></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className=" font-mono text-[#3B3B3B] mt-1 ">
                          1.63 ETH
                        </div>
                        <div className=" xs:mt-5 md:mt-0  sm:flex sm:justify-end">
                          <Button />
                        </div>
                      </div>
                    </div>

                    <div className="xs:col-span-12 sm:col-span-6  md:col-span-6  lg:col-span-4 xl:col-span-3">
                      <img
                        src={require("../../Images/image 33.png")}
                        alt="DistantGalaxy"
                        className="w-full h-auto rounded"
                      />
                      <div className="grid grid-cols-12">
                        <div className="xs:col-span-12 md:col-span-8 lg:col-span-12  ">
                          <div className="xs:text-sm font-inter md:text-lg  mt-3 text-black font-semibold">
                            Distant Galaxy
                          </div>
                          <div className=" flex mt-3">
                            <img
                              src={require("../../Images/image 33.png")}
                              alt="DistantGalaxy1"
                              className="w-5 h-5 rounded-full"
                            />
                            <div className="font-mono text-[#3B3B3B] ml-3 xs:text-[12px] md:text-sm ">
                              MoonDancer
                            </div>
                          </div>
                          <div className="font-mono text-[#858584] mt-3">
                            Price
                          </div>
                          <div className="xs:col-span-0 md:col-span-4  lg:col-span-5 xl:col-span-6"></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className=" font-mono text-[#3B3B3B] mt-1 ">
                          1.63 ETH
                        </div>
                        <div className=" xs:mt-5 md:mt-0  sm:flex sm:justify-end">
                          <Button />
                        </div>
                      </div>
                    </div>

                    <div className="xs:col-span-12 sm:col-span-6  md:col-span-6  lg:col-span-4 xl:col-span-3">
                      <img
                        src={require("../../Images/image 33.png")}
                        alt="DistantGalaxy"
                        className="w-full h-auto rounded"
                      />
                      <div className="grid grid-cols-12">
                        <div className="xs:col-span-12 md:col-span-8 lg:col-span-12  ">
                          <div className="xs:text-sm font-inter md:text-lg  mt-3 text-black font-semibold">
                            Distant Galaxy
                          </div>
                          <div className=" flex mt-3">
                            <img
                              src={require("../../Images/image 33.png")}
                              alt="DistantGalaxy1"
                              className="w-5 h-5 rounded-full"
                            />
                            <div className="font-mono text-[#3B3B3B] ml-3 xs:text-[12px] md:text-sm ">
                              MoonDancer
                            </div>
                          </div>
                          <div className="font-mono text-[#858584] mt-3">
                            Price
                          </div>
                          <div className="xs:col-span-0 md:col-span-4  lg:col-span-5 xl:col-span-6"></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className=" font-mono text-[#3B3B3B] mt-1 ">
                          1.63 ETH
                        </div>
                        <div className=" xs:mt-5 md:mt-0  sm:flex sm:justify-end">
                          <Button />
                        </div>
                      </div>
                    </div>
                    <div className="xs:col-span-12 sm:col-span-6  md:col-span-6  lg:col-span-4 xl:col-span-3">
                      <img
                        src={require("../../Images/image 33.png")}
                        alt="DistantGalaxy"
                        className="w-full h-auto rounded"
                      />
                      <div className="grid grid-cols-12">
                        <div className="xs:col-span-12 md:col-span-8 lg:col-span-12  ">
                          <div className="xs:text-sm font-inter md:text-lg  mt-3 text-black font-semibold">
                            Distant Galaxy
                          </div>
                          <div className=" flex mt-3">
                            <img
                              src={require("../../Images/image 33.png")}
                              alt="DistantGalaxy1"
                              className="w-5 h-5 rounded-full"
                            />
                            <div className="font-mono text-[#3B3B3B] ml-3 xs:text-[12px] md:text-sm ">
                              MoonDancer
                            </div>
                          </div>
                          <div className="font-mono text-[#858584] mt-3">
                            Price
                          </div>
                          <div className="xs:col-span-0 md:col-span-4  lg:col-span-5 xl:col-span-6"></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className=" font-mono text-[#3B3B3B] mt-1 ">
                          1.63 ETH
                        </div>
                        <div className=" xs:mt-5 md:mt-0  sm:flex sm:justify-end">
                          <Button />
                        </div>
                      </div>
                    </div>
                    <div className="xs:col-span-12 sm:col-span-6  md:col-span-6  lg:col-span-4 xl:col-span-3">
                      <img
                        src={require("../../Images/image 33.png")}
                        alt="DistantGalaxy"
                        className="w-full h-auto rounded"
                      />
                      <div className="grid grid-cols-12">
                        <div className="xs:col-span-12 md:col-span-8 lg:col-span-12  ">
                          <div className="xs:text-sm font-inter md:text-lg  mt-3 text-black font-semibold">
                            Distant Galaxy
                          </div>
                          <div className=" flex mt-3">
                            <img
                              src={require("../../Images/image 33.png")}
                              alt="DistantGalaxy1"
                              className="w-5 h-5 rounded-full"
                            />
                            <div className="font-mono text-[#3B3B3B] ml-3 xs:text-[12px] md:text-sm ">
                              MoonDancer
                            </div>
                          </div>
                          <div className="font-mono text-[#858584] mt-3">
                            Price
                          </div>
                          <div className="xs:col-span-0 md:col-span-4  lg:col-span-5 xl:col-span-6"></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className=" font-mono text-[#3B3B3B] mt-1 ">
                          1.63 ETH
                        </div>
                        <div className=" xs:mt-5 md:mt-0  sm:flex sm:justify-end">
                          <Button />
                        </div>
                      </div>
                    </div>
                    <div className="xs:col-span-12 sm:col-span-6  md:col-span-6  lg:col-span-4 xl:col-span-3">
                      <img
                        src={require("../../Images/image 33.png")}
                        alt="DistantGalaxy"
                        className="w-full h-auto rounded"
                      />
                      <div className="grid grid-cols-12">
                        <div className="xs:col-span-12 md:col-span-8 lg:col-span-12  ">
                          <div className="xs:text-sm font-inter md:text-lg  mt-3 text-black font-semibold">
                            Distant Galaxy
                          </div>
                          <div className=" flex mt-3">
                            <img
                              src={require("../../Images/image 33.png")}
                              alt="DistantGalaxy1"
                              className="w-5 h-5 rounded-full"
                            />
                            <div className="font-mono text-[#3B3B3B] ml-3 xs:text-[12px] md:text-sm ">
                              MoonDancer
                            </div>
                          </div>
                          <div className="font-mono text-[#858584] mt-3">
                            Price
                          </div>
                          <div className="xs:col-span-0 md:col-span-4  lg:col-span-5 xl:col-span-6"></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className=" font-mono text-[#3B3B3B] mt-1 ">
                          1.63 ETH
                        </div>
                        <div className=" xs:mt-5 md:mt-0  sm:flex sm:justify-end">
                          <Button />
                        </div>
                      </div>
                    </div>
                    <div className="xs:col-span-12 sm:col-span-6  md:col-span-6  lg:col-span-4 xl:col-span-3">
                      <img
                        src={require("../../Images/image 33.png")}
                        alt="DistantGalaxy"
                        className="w-full h-auto rounded"
                      />
                      
                      <div className="grid grid-cols-12">
                        <div className="xs:col-span-12 md:col-span-8 lg:col-span-12  ">
                          <div className="xs:text-sm font-inter md:text-lg  mt-3 text-black font-semibold">
                            Distant Galaxy
                          </div>
                          <div className=" flex mt-3">
                            <img
                              src={require("../../Images/image 33.png")}
                              alt="DistantGalaxy1"
                              className="w-5 h-5 rounded-full"
                            />
                            <div className="font-mono text-[#3B3B3B] ml-3 xs:text-[12px] md:text-sm ">
                              MoonDancer
                            </div>
                          </div>
                          <div className="font-mono text-[#858584] mt-3">
                            Price
                          </div>
                          <div className="xs:col-span-0 md:col-span-4  lg:col-span-5 xl:col-span-6"></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className=" font-mono text-[#3B3B3B] mt-1 ">
                          1.63 ETH
                        </div>
                        <div className=" xs:mt-5 md:mt-0  sm:flex sm:justify-end">
                          <Button />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="flex justify-end col-span-10 mt-2 gap-2 ">
            <div className="flex">
              <div className="border border-gray-300 col-span-1 rounded-s-lg">
                <img
                  className="mt-2"
                  alt="Arrow"
                  src={require("../../Images/Pre.png")}
                />
              </div>
              <div className="border  p-2 border-gray-300 col-span-1">1</div>
              <div className="border p-2 border-gray-300 col-span-1">2</div>
              <div className="border p-2 border-gray-300 col-span-1">3</div>

              <div className="border border-gray-300 col-span-1 rounded-r-lg">
                <img
                  className="mt-2"
                  alt="Arrow"
                  src={require("../../Images/Next.png")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
