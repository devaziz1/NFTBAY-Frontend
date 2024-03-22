import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { BsShopWindow } from "react-icons/bs";
import Footer from "../../Components/Footer";

import { ReactComponent as Upload } from "../../Assets/Image.svg";

export default function Seller() {
  const navigate = useNavigate();

  const [progress, setProgress] = useState(20);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [sellerStep, setsellerStep] = useState(1);

  const fileInputRef = useRef(null);

  // Function to open the file input dialog
  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  

  // Function to handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    // Handle the selected file, e.g., upload it, display it, etc.
    console.log("Selected file:", selectedFile);
  };

  const nextStep = () => {
    if (sellerStep === 4) {
      navigate("/SPanel");
    }
    setsellerStep((sellerStep) => sellerStep + 1);
    setProgress((progress) => progress + 20);
  };



  useEffect(() => {
    window.scrollTo(0, 0);
    const checkScreenSize = () => {
      if (window.innerWidth < 1024) {
        setShowProgressBar(true);
      } else {
        setShowProgressBar(false);
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

  const StarperData = [
    {
      Heading: "Set up Account",
      Description: "Provide account setup details to begin selling.",
    },
    {
      Heading: "Provide Payment details",
      Description: "Wallet details to receive funds.",
    },
    {
      Heading: "Buy Subscription",
      Description: " Transfer funds to provided wallet to continue.",
    },
    {
      Heading: "List your first NFT",
      Description: "Add your first NFT to the marketplace.",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-12 p-5">
        <div className="col-span-3">
          <div className="flex mt-2">
            <BsShopWindow
              style={{ width: "25px", height: "25px", color: "blue" }}
            />
            <h2 className="ml-[10px] xs:text-base text-xl  text-blue-600">
              NTFBAY
            </h2>
          </div>
        </div>
        <div className="col-span-12 text-center font-bold text-2xl mt-5">
          Become A Seller
        </div>

        {showProgressBar ? (
          <div className=" col-span-8 p-5 ">
            <div className="w-full xs:ml-16 sm:ml-24 md:ml-44  bg-gray-200 rounded-full dark:bg-gray-700">
              <div
                className="bg-blue-600  text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full"
                style={{ width: `${progress}%` }}
              >
                {" "}
                {`${progress}%`}
              </div>
            </div>
          </div>
        ) : (
          <div className="ml-16 mt-5 col-span-12 ">
            <ol className="items-center grid-cols-12 w-full space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
              {StarperData.map((data, index) => (
                <li
                  className={`flex items-center w-full col-span-3 ${
                    sellerStep <= index
                      ? "text-gray-500 dark:text-gray-400"
                      : "text-blue-500 dark:text-blue-400 "
                  }   space-x-2.5`}
                >
                  <span
                    className={`flex items-center justify-center w-8 h-8 border ${
                      sellerStep <= index
                        ? " border-gray-500 dark:border-gray-400"
                        : "border-blue-500 dark:border-blue-400"
                    } rounded-full shrink-0 `}
                  >
                    {index + 1}
                  </span>
                  <span>
                    <h3 className="font-medium leading-tight">
                      {data.Heading}
                    </h3>
                    <p className="text-sm">{data.Description}</p>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        )}

        <div className="col-span-12 grid grid-cols-12 mt-2">
          <div className="xs:col-span-2 md:col-span-4"></div>

          {sellerStep === 1 ? (
            <div className="xs:col-span-8 md:col-span-4">
              <label
                htmlFor="first_name"
                className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter Your Username
              </label>
              <input
                type="email"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Username"
                required
              />
              <label
                htmlFor="first_name"
                className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter Your Password
              </label>
              <input
                type="email"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Password"
                required
              />
              <label
                htmlFor="first_name"
                className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter Your Email
              </label>
              <input
                type="email"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=" Email "
                required
              />
            </div>
          ) : sellerStep === 2 ? (
            <div className="xs:col-span-8 md:col-span-4">
              <label
                htmlFor="first_name"
                className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter Your Wallet address
              </label>
              <input
                type="email"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Wallet address"
                required
              />
              <div className="text-xs text-center mt-5">
                Upload QR code that holds your wallet address
              </div>

              <div
                onClick={handleFileInputClick}
                className="flex cursor-pointer items-center justify-center mt-5"
              >
                <Upload />
              </div>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>
          ) : sellerStep === 3 ? (
            <div className="xs:col-span-8 md:col-span-4 mt-5">
              <div className="text-blue-500 text-center">Scan QR Code</div>
              <div className="text-xs text-center">
                Please enter your email while transferring the funds in notes
              </div>
              <div className="flex items-center justify-center mt-2">
                <img
                  className="w-24 h-24"
                  src={require("../../Images/Rectangle.png")}
                  alt="QR Code"
                />
              </div>

              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Reference Number
              </label>
              <input
                type="email"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Reference number of payment"
                required
              />
            </div>
          ) : (
            <div className="xs:col-span-8 md:col-span-4">
              <div className="text-lg font-bold text-center">
                Upload NFT Image
              </div>
              <div
                onClick={handleFileInputClick}
                className="flex cursor-pointer items-center justify-center mt-5"
              >
                <Upload />
              </div>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />

              <label
                htmlFor="first_name"
                className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter NFT Name
              </label>
              <input
                type="email"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Name"
                required
              />
              <label
                htmlFor="first_name"
                className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter NFT Price
              </label>
              <input
                type="email"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Price"
                required
              />
              <label
                htmlFor="first_name"
                className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter NFT Description
              </label>
              <input
                type="email"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Description"
                required
              />
            </div>
          )}

          <div className="xs:col-span-2 md:col-span-4"> </div>

          <div className="col-span-9 flex justify-end">
            {sellerStep === 4 ? (
              <>
                <div className="flex justify-end p-6 space-x-2  border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    onClick={() => {
                      navigate("/SPanel");
                    }}
                    type="button"
                    className="text-white font-mono bg-slate-300 hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
                  >
                    Skip
                  </button>
                </div>
              </>
            ) : (
              <></>
            )}

            <div className="flex justify-end p-6 space-x-2  border-gray-200 rounded-b dark:border-gray-600">
              <button
                onClick={nextStep}
                type="button"
                className="text-white font-mono bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {sellerStep === 5 ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
