import React from "react";
import Header from "../../Components/SellerHeader";
import Footer from "../../Components/Footer";

export default function Subscription() {
  return (
    <>
      <Header />
      <div className="flex flex-col jus items-center mt-5">
        <div className="font-bold text-2xl text-center">Subscription</div>

        <div className="flex items-center justify-center mt-2">
          <img
            className="w-36"
            src={require("../../Images/Rectangle.png")}
            alt="QR Code"
          />
        </div>

        <div className="flex items-center justify-center mt-3">
          <button
            type="button"
            className="text-white font-mono flex justify-between bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="h-5 w-5"
              fill="currentColor"
            >
              <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" />
            </svg>
            Copy
          </button>
        </div>

        <div className=" w-64">
          <label
            htmlFor="first_name"
            className="block mb-2 mt-10 text-sm font-medium text-gray-900 dark:text-white"
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

          <label
            htmlFor="first_name"
            className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Add note for Admin (Optional)
          </label>
          <input
            type="email"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Note"
            required
          />
          
        </div>
        <button
          type="button"
          className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3 flex justify-end"
        >
          Confirm
        </button>
      </div>
      <Footer />
    </>
  );
}
