import React, { useRef } from "react";
import Header from "../../Components/SellerHeader";
import { ReactComponent as Upload } from "../../Assets/Image.svg";
import Footer from "../../Components/Footer";

export default function Payment() {
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


  return (
    <>
      <Header />
      <div className="flex flex-col jus items-center mt-5">
        <div className="font-bold text-2xl text-center">
          Edit Your Payment Details
        </div>

        <label
          htmlFor="first_name"
          className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white"
        >
          Enter Your Wallet address
        </label>
        <input
          type="email"
          id="first_name"
          className="bg-gray-50 w-60 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
        <button
          type="button"
          className="text-white font-mono bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3 flex justify-end"
        >
          Confirm
        </button>
      </div>

      <Footer/>
    </>
  );
}
