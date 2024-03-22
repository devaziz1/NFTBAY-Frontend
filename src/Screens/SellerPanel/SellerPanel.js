import React, { useEffect, useState } from "react";

import SellerHeader from "../../Components/SellerHeader";

import TruncateText from "../../Components/TruncateText";

import Footer from "../../Components/Footer";

const long =
  "ajdjsd ajsdnasd sajdasd kjsdajsd asdjjsadn dasjdakjd akjdad kjdsnas djksjda sdksjdakdja sdkajdkads kjsadkjad asdjkajda sdkajdkaj askdjakds kjsdksd sdkjasd asdkjaskdad aksda";

export default function SellerPanel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [smallScreen, setSmallScreen] = useState(true);
  const [description, setDescription] = useState("");

  const openModal = (data) => {
    setIsModalOpen(true);
    setDescription(data);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const checkScreenSize = () => {
      if (window.innerWidth < 500) {
        setSmallScreen(true);
      } else {
        setSmallScreen(false);
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
      <SellerHeader />
      <div className="grid grid-cols-12 font-bold text-lg border border-gray-500 p-10 m-5 rounded">
        <div className="xs:col-span-12 sm:col-span-6  md:col-span-3  xs:border m-1 md:border-0 flex flex-col justify-center items-center border-gray-500 md:border-r">
          <h1>20</h1>
          Total NFTs
        </div>
        <div className="xs:col-span-12 sm:col-span-6 md:col-span-3 flex flex-col m-1 xs:border md:border-0 justify-center items-center border-gray-500 md:border-r">
          <h1>10</h1>
          Total NFTs Sold
        </div>
        <div className="xs:col-span-12 sm:col-span-6 md:col-span-3 flex flex-col m-1 justify-center xs:border md:border-0 items-center border-gray-500 md:border-r">
          <h1>20</h1>
          Pending sales
        </div>
        <div className="xs:col-span-12 sm:col-span-6 xs:border md:border-0 md:col-span-3 m-1 border-gray-500 flex flex-col justify-center items-center ">
          <h1>30</h1>
          Active NFTs
        </div>
      </div>

      <div className="ml-5 mr-5 col-span-12 flex justify-between items-center">
        <h1 className="font-bold text-lg">NFTs Listed</h1>
        <div className="border rounded-lg bg-gray-100 text-blue-600 p-1.5">
          View all
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed top-0  left-0 right-0 z-50 w-full p-10  h-screen flex items-center justify-center bg-opacity-50 bg-gray-800"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg md:ml-5 md:mr-5   xl:ml-60   w-full xl:mr-60 shadow dark:bg-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end m-5">
              <svg
                onClick={closeModal}
                className="w-3 h-3  mt-3 cursor-pointer"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </div>
            <div className="font-semibold text-lg ml-5">Description:</div>

            <div className="font-medium text-base p-5">{description}</div>
          </div>
        </div>
      )}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-5 xs:ml-5 xs:mr-5 mt-2 ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                NFT Name
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>

              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Distant Galaxy
              </th>
              <td
                onClick={() => {
                  openModal(long);
                }}
                className="px-6 py-4 cursor-pointer"
              >
                {smallScreen ? (
                  <div className="ml-7   m-2">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="h-7 w-7"
                    >
                      <path d="M10.5 8a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
                    </svg>
                  </div>
                ) : (
                  <>
                    <TruncateText maxWords={10} text={long} />
                  </>
                )}
              </td>

              <td className="px-6 py-4">1.63ETH</td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Leo
              </th>
              <td className="px-6 py-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
                consectetur?
              </td>

              <td className="px-6 py-4">2.5ETH</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse
              </th>
              <td className="px-6 py-4">
                <TruncateText maxWords={10} text={long} />
              </td>

              <td className="px-6 py-4">0.99ETH</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* <div className="col-span-12 grid grid-cols-12 border  mt-2 rounded-lg">
          <div className="col-span-2 bg-slate-100 p-2 ">NFT Name</div>
          <div className="col-span-8 bg-slate-100 p-2">NFT Description</div>
          <div className="col-span-2 bg-slate-100 p-2">Price</div>

          <div className="col-span-2 font-semibold p-2">Distant Galaxy</div>
          <div className="col-span-8  p-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
            necessitatibus.
          </div>
          <div className="col-span-2  p-2 font-semibold">1.63ETH</div>

          <div className="col-span-2  p-2 font-semibold">The North Face</div>
          <div className="col-span-8  p-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum,
            perspiciatis!
          </div>
          <div className="col-span-2  p-2 font-semibold">2.3ETH</div>

          <div className="col-span-2  p-2 font-semibold">Lee Jeans</div>
          <div className="col-span-8  p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            cumque.
          </div>
          <div className="col-span-2  p-2 font-semibold">1.66ETH</div>
        </div> */}

      <Footer />
    </>
  );
}
