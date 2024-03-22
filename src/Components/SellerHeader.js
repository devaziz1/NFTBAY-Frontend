import React, { useState, useEffect } from "react";
import { ReactComponent as Vector } from "../Assets/Vector.svg";
import { ReactComponent as Payment } from "../Assets/Payment.svg";
import { ReactComponent as Subscription } from "../Assets/Subscription.svg";

import { useNavigate } from "react-router-dom";

import { BsShopWindow } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { AiTwotoneHeart } from "react-icons/ai";

const Header = () => {
  const navigate = useNavigate();

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [HamBurgerContent, setHamburgerContent] = useState(false);

  const HandleHamBurgerContent = () => {
    setHamburgerContent(!HamBurgerContent);
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
              navigate("/SPanel");
            }}
            className="flex mt-2 "
          >
            <BsShopWindow
            
              className="cursor-pointer"
              style={{ width: "25px", height: "25px", color: "blue" }}
            />
            <h2 className="ml-[10px] text-xl cursor-pointer text-blue-700">
              NTFBAY
            </h2>
          </div>
        </div>
        {!isSmallScreen ? (
          <>
            <div className="md:col-span-9 flex justify-end">
              {/* Links */}
              <ul className="flex space-x-7 justify-end  ">
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    navigate("/Subscription");
                  }}
                >
                  <Subscription
                    className="cursor-pointer ml-5"
                    style={{ width: "40px", height: "25px" }}
                  />
                  Subscription
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    navigate("/Payment");
                  }}
                >
                  <Payment
                    className="cursor-pointer ml-2"
                    style={{ width: "40px", height: "25px" }}
                  />
                  Payment
                </li>

                <li
                  className="cursor-pointer"
                  onClick={() => {
                    navigate("/SellerProfile");
                  }}
                >
                  <BsFillPersonFill style={{ width: "40px", height: "25px" }} />
                  Profile
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    navigate("/LandingPage");
                  }}
                >
                  <Vector
                    className="cursor-pointer ml-12"
                    style={{ width: "25px", height: "25px" }}
                  />
                  Switch to Buying
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    navigate("/Order");
                  }}
                >
                  <AiTwotoneHeart
                    className="cursor-pointer"
                    onClick={() => {
                      navigate("/Order");
                    }}
                    style={{ width: "35px", height: "25px" }}
                  />
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
            <ul className="flex flex-col  justify-start  ">
              <li
                className="flex border border-gray-500 p-2 mt-5"
                onClick={() => {
                  navigate("/Subscription");
                }}
              >
                <Subscription
                  className="cursor-pointer "
                  style={{ width: "40px", height: "25px" }}
                />
                Subscription
              </li>
              <li
                className="flex border border-gray-500 p-2 mt-5"
                onClick={() => {
                  navigate("/Payment");
                }}
              >
                <Payment
                  className="cursor-pointer "
                  style={{ width: "40px", height: "25px" }}
                />
                Payment
              </li>

              <li
                className="flex border border-gray-500 p-2 mt-5"
                onClick={() => {
                  navigate("/SellerProfile");
                }}
              >
                <BsFillPersonFill
                  className="cursor-pointer"
                  style={{ width: "40px", height: "25px" }}
                />
                Profile
              </li>
              <li
                className="flex border border-gray-500 p-2 mt-5"
                onClick={() => {
                  navigate("/LandingPage");
                }}
              >
                <Vector
                  className="cursor-pointer mr-2 "
                  style={{ width: "25px", height: "25px" }}
                />
                Switch to Buying
              </li>
              <li
                className="flex border border-gray-500 p-2 mt-5"
                onClick={() => {
                  navigate("/Order");
                }}
              >
                <AiTwotoneHeart style={{ width: "35px", height: "25px" }} />
                Order
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
