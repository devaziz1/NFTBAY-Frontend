import React from "react";
import { useForm } from "react-hook-form";
import { BsShopWindow } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import ProfileBackground from "../../Images/SignUpBackgroundImage.png";

export default function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("inside on submit function" + data);
    try {
      const response = await axios.post(
        "http://localhost:8080/user/signup",
        data
      );
      reset();
      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  
  return (
    <>
      <div className="min-h-screen">
        <div
          className="grid grid-cols-1  h-screen w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${ProfileBackground})` }}
        >
          <div className="grid grid-cols-12 p-10">
            <div className="xs:col-span-1 xs:hidden md:block md:col-span-3   space-y-12">
              <div className="flex mt-2">
                <BsShopWindow
                  style={{ width: "25px", height: "25px", color: "white" }}
                />
                <h2 className="ml-[10px] text-xl text-white">NTFBAY</h2>
              </div>
              <h1 className="text-white font-semibold text-xl">Sign Up</h1>
              <p className="text-white">
                Join NFTBAY and get access to hundreds of NFTs that are offered
                in the marketplace
              </p>
            </div>
            <div className="xs:col-span-11 md:col-span-9 xl:col-span-9    rounded-xl grid grid-cols-12 ">
              <div className="xs:col-span-1 sm:col-span-2  md:col-span-4 xl:col-span-6 "></div>
              <div className="xs:col-span-11 sm:col-span-10 md:col-span-8  xl:col-span-6 w-full xs:bg-white xs:bg-opacity-75 xs:text-opacity-75 md:bg-[#FFF] rounded-xl  xs:h-[420px] md:h-[460px]  xl:h-[470px]   xs:p-5 sm:p-10 sm:mr-5 xs:mt-24 md:mt-0">
                <div className=" md:col-span-11   lg:col-span-8 ">
                  <div className="flex justify-center mb-5">
                    Welcome To
                    <div className="flex md:ml-3">
                      <BsShopWindow
                        style={{ width: "25px", height: "25px", color: "blue" }}
                      />
                      <h2 className="ml-[10px] text-xl text-blue-600 font-semibold">
                        NTFBAY
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-8  text-center xs:mt-3   md:mt-0 xs:text-2xl md:text-3xl lg:text-3xl   font-medium text-black">
                  Sign Up
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="md:col-span-8 md:mt-8">
                    <div>
                      <label
                        htmlFor="first_name"
                        className="block mb-2  text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Enter email address
                      </label>
                      <input
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address",
                          },
                        })}
                        type="text"
                        id="first_name1"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Username or Email address"
                        required
                      />
                      {errors.email && (
                        <p
                          id="filled_error_help"
                          className=" text-xs text-red-600 dark:text-red-400"
                        >
                          <span className="font-medium">
                            {errors.email.message}
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="md:col-span-8 xs:mt-3 md:mt-5">
                    <div>
                      <label
                        htmlFor="first_name2"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Enter password
                      </label>
                      <input
                        {...register("password", {
                          required: "Password is required",
                        })}
                        type="password"
                        id="first_name3"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Password"
                        required
                      />
                      {errors.password && (
                        <p
                          id="filled_error_help"
                          className=" text-xs text-red-600 dark:text-red-400"
                        >
                          <span className="font-medium">
                            {errors.password.message}
                          </span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className=" xs:mt-3 md:col-span-8  flex">
                    <button
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full mt-5"
                    >
                      Sign up
                    </button>
                  </div>
                  <div className="flex justify-center xs:text-xs sm:text-sm">
                    Already Have An account?
                    <div
                      onClick={() => {
                        navigate("/Login");
                      }}
                      className="text-blue-700 cursor-pointer"
                    >
                      Sign in
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
