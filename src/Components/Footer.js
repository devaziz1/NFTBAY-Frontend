import React from "react";
import { BsShopWindow } from "react-icons/bs";
import { ReactComponent as Facebook } from "../Assets/facebook3.svg";
import { ReactComponent as Twiter } from "../Assets/twitter3.svg";
import { ReactComponent as LinkedIN } from "../Assets/linkedin3.svg";
import { ReactComponent as Instagram } from "../Assets/instagram3.svg";
import { ReactComponent as YouTube } from "../Assets/youtube3.svg";
import { ReactComponent as Expand } from "../Assets/expand_less.svg";
import { useNavigate } from "react-router-dom";

import English from "../Images/icon.png";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-slate-200  grid grid-cols-12 p-3 mt-10">
        <div className="col-span-3"></div>
        <div className="col-span-6  justify-center text-center ">
          <div className="font-semibold m-2">Subscribe on our newsletter</div>
          <div className="grid grid-cols-12">
            <div className="col-span-12 mb-4">
              Get daily news on upcoming NFTs from best seller in marketplace
            </div>
            <div className="md:col-span-2"></div>

            <div className="xs:col-span-12 md:col-span-5">
              <div className="relative mb-6  ">
                <div className="absolute inset-y-0  left-0 flex items-center pl-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-50 border   border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="xs:col-span-12  md:col-span-4 lg:ml-1 md:ml-2">
              <button className="font-mono  bg-blue-700 p-2 text-white w-full rounded">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-3 gap-4"></div>
      </div>

      <div className="grid grid-cols-12 gap-4 p-3 mt-5 mb-5">
        <div className="xs:col-span-12  md:col-span-4">
          <div className="flex mt-7">
            <BsShopWindow
              style={{ width: "25px", height: "25px", color: "blue" }}
            />
            <h2 className="ml-[10px] text-xl font-semibold text-blue-600">
              NTFBAY
            </h2>
          </div>
          <p className="mt-2 mb-2">
            Best information about the company gives here
          </p>
          <div className="flex">
            <Facebook
              style={{
                width: "30px",
                height: "30px",
              }}
            />
            <Twiter
              style={{
                width: "30px",
                height: "30px",
                marginLeft: "10px",
              }}
            />
            <LinkedIN
              style={{
                width: "30px",
                height: "30px",
                marginLeft: "10px",
              }}
            />
            <Instagram
              style={{
                width: "30px",
                height: "30px",
                marginLeft: "10px",
              }}
            />
            <YouTube
              style={{
                width: "30px",
                height: "30px",
                marginLeft: "10px",
              }}
            />
          </div>
        </div>
        <div className="xs:col-span-6 xs:mt-5 sm:mt-0 sm:col-span-3  md:col-span-2 ">
          <h3 className="font-semibold text-lg">About</h3>
          <div 
           className="cursor-pointer"
           onClick={() => {
             navigate("/Search");
           }}
          >All NTFs</div>
          <div
            className="cursor-pointer"
            onClick={() => {
              navigate("/Search");
            }}
          >
            Cataegories
          </div>
        </div>
        <div className="xs:col-span-6 xs:mt-5 sm:mt-0 sm:col-span-3  md:col-span-2 ">
          <h3 className="font-semibold text-lg">Partnership</h3>
          <div 
           className="cursor-pointer"
           onClick={() => {
             navigate("/Search");
           }}
          >All NTFs</div>
          <div
            className="cursor-pointer"
            onClick={() => {
              navigate("/Search");
            }}
          >
            Cataegories
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              navigate("/Seller");
            }}
          >
            Become a seller
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              navigate("/Contact");
            }}
          >
            Contact Us
          </div>
        </div>
        <div className="xs:col-span-6 sm:col-span-3  md:col-span-2 ">
          <h3 className="font-semibold text-lg">Information</h3>
          <div>Help Center</div>
          <div
            className="cursor-pointer"
            onClick={() => {
              navigate("/Contact");
            }}
          >
            Contact Us
          </div>
        </div>
        <div className="xs:col-span-6 sm:col-span-3  md:col-span-2 ">
          <h3 className="font-semibold text-lg">For Users</h3>
          <div
            className="cursor-pointer"
            onClick={() => {
              navigate("/Login");
            }}
          >
            Log In
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              navigate("/SignUp");
            }}
          >
            Register
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              navigate("/Order");
            }}
          >
            My Orders
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 bg-slate-300 px-5 p-5">
        <div className="col-span-4">© Made with love by HashStack</div>
        <div className="col-span-4"></div>
        <div className="col-span-4 flex justify-end">
          <img src={English} alt="Flag" className="w-5 h-4 mt-1 mr-1" />
          English
          <Expand
            style={{
              width: "30px",
              height: "30px",
            }}
          />
        </div>
      </div>
    </>
  );
}
