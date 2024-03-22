import React, { useRef, useState } from "react";

import { ReactComponent as Upload } from "../../../Assets/Image.svg";

export default function Settings() {
  const fileInputRef = useRef(null);
  const [editSettings, setShowEditSettings] = useState(false);

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
  return (
    <>
      <div className="grid grid-cols-12 gap-5 p-3 ">
        <div className="col-span-12 flex justify-between">
          <div className="font-semibold font-inter text-2xl ">Settings</div>
          <button
            onClick={() => {
              setShowEditSettings(true);
            }}
            className=" bg-[#8489FC]  inline-flex items-center rounded-lg bg-button px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#8489FC] focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-[#8489FC] dark:hover:bg-[#8489FC] dark:focus:ring-[#8489FC]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-1 h-6 w-6"
            >
              <path d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3l1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z" />
            </svg>
            Edit
          </button>
        </div>

        {editSettings ? (
          <div className="grid grid-cols-12 gap-5 col-span-12">
            <div className="col-span-6">
              <label
                htmlFor="first_name"
                className="block mb-2 mt-5 xs:text-xs md:text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter Your Reference ID
              </label>
              <input
                type="email"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Wallet address"
                required
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="first_name"
                className="block mb-2 mt-5 xs:text-xs  md:text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter Subscription Charges
              </label>
              <input
                type="email"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Subscription Charges"
                required
              />
            </div>

            <div className="col-span-12">
              <div className="text-base text-center font-inter mt-5">
                Upload QR code that holds your wallet address
              </div>

              <div
                onClick={handleFileInputClick}
                className="flex cursor-pointer  justify-center items-center mt-5"
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


            <div className="col-span-12 flex justify-end ">
              <div className="flex justify-end p-6 space-x-2  border-gray-200 rounded-b dark:border-gray-600">
                <button
                  type="button"
                  onClick={() => {
                    setShowEditSettings(false);
                  }}
                  className="text-white font-mono bg-[#a4a6f6] hover:bg-[#8489FC] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center "
                >
                  Cancel
                </button>
              </div>

              <div className="flex justify-end p-6 space-x-2  border-gray-200 rounded-b dark:border-gray-600">
                <button
                  type="button"
                  className="text-white font-mono bg-[#8489FC] hover:bg-[#7a7dd7] focus:ring-4 focus:outline-none focus:ring-[#7a7dd7] font-medium rounded-lg text-sm px-3 py-2 text-center "
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-12 col-span-12 gap-5">
             <div className="col-span-6">
              <label
                htmlFor="first_name"
                className="block mb-2 mt-5 xs:text-xs md:text-sm font-medium text-gray-900 dark:text-white"
              >
              My Reference ID
              </label>
              <input
                type="email"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="#423_fds"
                required
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="first_name"
                className="block mb-2 mt-5 xs:text-xs md:text-sm font-medium text-gray-900 dark:text-white"
              >
              My Subscription Charges
              </label>
              <input
                type="email"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="12ETH"
                required
              />
            </div>

            <div className="flex flex-col  col-span-12 justify-center mt-2">
              <h1 className=" text-base text-center items-center font-inter ml-1">My QR Code</h1>
              <div className="flex items-center justify-center mt-2">
                <img
                  className="w-36 h-36 "
                  src={require("../../../Images/Rectangle.png")}
                  alt="QR Code"
                />
              </div>
              </div>

          </div>
        )}
      </div>
    </>
  );
}
