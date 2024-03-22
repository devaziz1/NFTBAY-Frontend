import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import Button from "../../Components/Button";
import Footer from "../../Components/Footer";


export default function Profile2() {
  const [description, setDiscription] = useState(true);
  const [aboutSeller, setAboutSeller] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [progress, setProgress] = useState(33);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [ModalStep, setModalStep] = useState(1);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextStep = () => {
    if(ModalStep === 3){
      closeModal();
    }
    setModalStep((ModalStep) => ModalStep + 1);
    setProgress((progress) => progress + 33);
  };

  const backStep = () => {
    setModalStep((ModalStep) => ModalStep - 1);
    setProgress((progress) => progress - 33);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    const checkScreenSize = () => {
      if (window.innerWidth < 768) {
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

  return (
    <div>
      <Header />
      <div className="p-3">
        <div className="grid grid-cols-12  border border-gray-300 rounded">
          <div className="xs:col-span-12 lg:col-span-9  p-3 flex ">
            <img
              className="w-full h-auto "
              alt="Background"
              src={require("../../Images/ProfileBackground.png")}
            />
          </div>
          <div className="xs:col-span-12 xs:p-3 lg:col-span-3 mt-2 ">
            <div className="font-mono col-span-3 text-sm text-[#858584]">
              Price
            </div>
            <div className="font-mono col-span-3">1.63 ETH</div>
            <div className="border border-gray-300  grid grid-cols-12 p-3 rounded gap-2 mt-10">
              <div className="col-span-12 flex gap-2">
                <img
                  className=" h-max"
                  alt="Profile"
                  src={require("../../Images/Profile.png")}
                />
                <div className="">
                  <div className=" font-bold text-lg text-[#858584] font-mono">
                    Seller
                  </div>
                  <div className=" font-semibold ">Moon Dancer</div>
                </div>
              </div>
              <div className="col-span-12 border-t border-gray-300"></div>
              <div className="col-span-12 gap-4 flex">
                <img
                  className=" h-max"
                  alt="User"
                  src={require("../../Images/verified_user.png")}
                />
                <div className=" text-sm">Verified Seller</div>
              </div>
              <div onClick={openModal} className="col-span-12  rounded">
                <Button />
              </div>
              <div className="col-span-12">
                <button
                  type="button"
                  className="p-1 font-medium w-full font-mono  text-blue-900 focus:outline-none bg-white rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10"
                >
                  Seller's Profile
                </button>
              </div>
            </div>
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

              {showProgressBar ? (
                <div className="grid grid-cols-12  p-5 ">
                  <div className="w-full col-span-12 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div
                      className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                      style={{ width: `${progress}%` }}
                    >
                      {" "}
                      {`${progress}%`}
                    </div>
                  </div>

                  {ModalStep === 1 ? (
                    <div className="col-span-12 mt-10 md:mr-20 md:ml-20 xs:ml-8 xs:mr-8">
                      
                      <label
                        htmlFor="first_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="first_name"
                        className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter Email address"
                        required
                      />

                      <label
                        htmlFor="first_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="First Name"
                        required
                      />
                    </div>
                  ) : ModalStep === 2 ? (
                    <>
                      <div className="col-span-12 mt-10 md:mr-20 md:ml-20 xs:ml-5 xs:mr-5">
                        <div className="text-blue-500 text-center">
                          Scan QR Code
                        </div>
                        <div className="text-xs text-center">
                          Please enter your email while transferring the funds
                          in notes
                        </div>
                        <div className="flex items-center justify-center mt-2">
                          <img
                            className="w-24 h-24"
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
                      </div>
                    </>
                  ) : (
                    <div className="col-span-12 mt-10 md:mr-20 md:ml-20 xs:ml-8 xs:mr-8">
                      <label
                        htmlFor="first_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Reference Number
                      </label>
                      <input
                        type="email"
                        id="first_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter Reference number "
                        required
                      />
                    </div>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-12  pl-5 pr-5 pb-5  ">
                  <div className="md:col-span-1 lg:col-span-1 xl:col-span-1"></div>
                  <div className="md:col-span-10 lg:col-span-10 xl:col-span-10 mt-5  ">
                    <ol className="items-center w-full space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                      <li onClick={()=>setModalStep(1)} className="cursor-pointer flex items-center text-blue-600 dark:text-blue-500 space-x-2.5">
                        <span className="flex items-center justify-center w-8 h-8 border border-blue-600 dark:border-blue-500 rounded-full shrink-0 ">
                          1
                        </span>
                        <span>
                          <h3 className="font-mono leading-tight text-sm">
                            Enter Details
                          </h3>
                          <p className="text-xs">
                            Add your email address and name
                          </p>
                        </span>
                      </li>
                      <li
                      onClick={()=>setModalStep(2)}
                        className={`flex items-center cursor-pointer ${
                          ModalStep === 1
                            ? "text-gray-500 dark:text-gray-400"
                            : "text-blue-600 dark:text-blue-500"
                        }   space-x-2.5`}
                      >
                        <span
                          className={`flex items-center justify-center w-8 h-8 border ${
                            ModalStep === 1
                              ? "border-gray-500 dark:border-gray-400"
                              : " border-blue-600 dark:border-blue-500"
                          }  rounded-full shrink-0 `}
                        >
                          2
                        </span>
                        <span>
                          <h3 className="font-mono leading-tight text-sm">
                            Transfer Funds
                          </h3>
                          <p className="text-xs">
                            Transfer funds to Seller Account using QR code
                          </p>
                        </span>
                      </li>
                      <li
                      onClick={()=>setModalStep(3)}
                        className={`flex items-center cursor-pointer ${
                          ModalStep === 3
                            ? "text-blue-600 dark:text-blue-500"
                            : "text-gray-500 dark:text-gray-400"
                        }   space-x-2.5`}
                      >
                        <span
                          className={`flex items-center justify-center w-8 h-8 border ${
                            ModalStep === 3
                              ? " border-blue-600 dark:border-blue-500"
                              : "border-gray-500 dark:border-gray-400"
                          }  rounded-full shrink-0 `}
                        >
                          3
                        </span>
                        <span>
                          <h3 className="font-mono leading-tight text-sm">
                            Add Reference Number
                          </h3>
                          <p className="text-xs">
                            Please add reference number of the payment
                          </p>
                        </span>
                      </li>
                    </ol>
                  </div>
                  <div className="col-span-1"></div>

                  {ModalStep === 1 ? (
                    <div className="col-span-12 mt-5 grid grid-cols-12">
                      <div className="col-span-4"></div>
                      <div className="col-span-4 h-64 w-60">
                        <label
                          htmlFor="first_name"
                          className="block mb-2 text-sm mt-8 font-medium text-gray-900 dark:text-white"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="first_name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Enter Email address"
                          required
                        />

                        <label
                          htmlFor="first_name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="First Name"
                          required
                        />

                        <div className="col-span-3"></div>
                      </div>
                    </div>
                  ) : ModalStep === 2 ? (
                    <>

                      <div className="col-span-12 mt-10 grid grid-cols-12  ">
                        <div className="col-span-4"></div>
                        <div className="col-span-4 h-60 w-60">
                          <div className="text-blue-500 text-center">
                            Scan QR Code
                          </div>
                          <div className="text-xs text-center">
                            Please enter your email while transferring the funds
                            in notes
                          </div>
                          <div className="flex items-center justify-center mt-2">
                            <img
                              className="w-28"
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
                          <div className="col-span-4"></div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="col-span-12 mt-10 grid grid-cols-12">
                      <div className="col-span-4"></div>
                      <div className="col-span-5  h-60  md:w-64">
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
                      </div>
                      <div className="col-span-3"></div>
                    </div>
                  )}
                </div>
              )}

              <div
                className={`flex ${
                  ModalStep === 1 ? "justify-end" : "justify-between"
                }  p-6 space-x-2  border-gray-200 rounded-b dark:border-gray-600`}
              >
                <button
                  onClick={backStep}
                  className={`text-white ${ModalStep === 1 ? "hidden" : "block"} font-mono bg-slate-500 hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-slate-100 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-slate-50 dark:hover:bg-slate-300 dark:focus:ring-slate-800`}
                >
               
                  Back
                </button>

                <button
                  onClick={nextStep}
                  type="button"
                  className="text-white font-mono bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {ModalStep === 3 ? "Finish" : "Next"}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-12 mt-5 gap-5">
          <div className="xs:col-span-12 lg:col-span-9 border border-gray-300  rounded">
            <div className="flex p-2  ">
              <div
                className={`cursor-pointer p-2 ${
                  description
                    ? "text-blue-600 font-bold border-b-2 border-blue-600"
                    : "text-gray-400"
                }`}
                onClick={() => {
                  setDiscription(true);
                  setAboutSeller(false);
                }}
              >
                Discription
              </div>
              <div
                className={`ml-5 cursor-pointer p-2 ${
                  aboutSeller
                    ? "text-blue-700 font-semibold border-b-2 border-blue-600 "
                    : "text-gray-400"
                }`}
                onClick={() => {
                  setAboutSeller(true);
                  setDiscription(false);
                }}
              >
                About Seller
              </div>
            </div>
            <div className="col-span-9 p-3">
              {description ? (
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt beatae culpa maxime nesciunt ab natus quidem est
                  sint. Placeat officia accusantium eius totam at, laborum sed,
                  ipsa itaque est a, nobis obcaecati minima! Nulla quidem quis,
                  atque commodi soluta consectetur beatae animi cum dignissimos
                  aut distinctio ex deleniti ea dicta culpa obcaecati ipsam
                  laborum odio illum provident libero non recusandae. Sit,
                  necessitatibus in fugiat dolore quod assumenda ab molestias
                  fuga voluptatem id, molestiae veniam optio asperiores
                  blanditiis quo expedita provident! Rerum doloribus rem et fuga
                  quo ab assumenda, voluptates mollitia cumque veniam dolorum
                  error at ullam porro, quas nobis deleniti.
                </p>
              ) : (
                <>
                  <div className="grid grid-cols-12 p-3">
                    <div className="xs:col-span-2 sm:col-span-1 flex">
                      <img
                        alt="Profile"
                        className="w-full h-auto"
                        src={require("../../Images/Profile.png")}
                      />
                    </div>
                    <h1 className="xs:col-span-5 xs:ml-2 xs:mt-1 md:ml-5 md:col-span-4 md:mt-3 xs:text-base sm:text-lg font-bold">
                      Moon Dancer
                    </h1>
                  </div>

                  <div className="grid grid-cols-12">
                    <div className="xs:col-span-6 sm:col-span-4 mt-2  text-[#858584] font-mono">
                      <div>
                        Total NTFs Listed
                        <div className="text-[#3B3B3B]">200</div>
                      </div>
                    </div>
                    <div className="xs:col-span-6 sm:col-span-4 mt-2  text-[#858584] font-mono">
                      Total NTFs Sold
                      <div className="text-[#3B3B3B]">200</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 mt-5">
                    <div className="col-span-2 text-[#8B96A5]">About</div>
                    <div className="col-span-12 text-[#505050]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Odit sed veritatis deserunt. Perferendis vel labore iusto.
                      Esse aut inventore numquam rem. Dignissimos saepe ea,
                      excepturi sed id officiis ullam impedit neque tempore
                      necessitatibus, sapiente nobis dolor molestias, pariatur
                      animi rerum. Nesciunt ipsum architecto cumque delectus.
                      Nihil maxime architecto libero possimus non voluptatem
                      eius, consequuntur labore saepe excepturi minus. Sunt,
                      provident voluptatum! Veniam dicta dolorum nam itaque
                      similique harum dolores officiis obcaecati voluptate
                      maiores ratione cupiditate ullam, dolor atque ut provident
                      sequi praesentium quod at fugiat libero doloribus odit
                      cumque distinctio? Harum beatae tempora animi rerum dolor
                      earum temporibus est placeat!
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="xs:col-span-12 lg:col-span-3 border border-gray-300 rounded p-3">
            <h1 className="font-semibold ">You may like</h1>
            <div className="grid grid-cols-12  lg:gap-2 mt-2">
              <div className="xs:col-span-4 sm:col-span-3 md:col-span-2 lg:col-span-5">
                <div className=" lg:border border-gray-300 p-2 rounded">
                  <img
                    className="h-max"
                    alt="Galaxy"
                    src={require("../../Images/DG.png")}
                  />
                </div>
              </div>
              <div className="xs:col-span-6 py-2 sm:col-span-3 md:col-span-2 lg:col-span-7 flex flex-col justify-between ">
                <h1 className="text-[#1C1C1C] font-semibold ">
                  Distant Galaxy
                </h1>

                <div className="">1.63 ETH</div>
              </div>

              <div className="xs:col-span-4 sm:col-span-3 md:col-span-2 lg:col-span-5">
                <div className=" lg:border border-gray-300 p-2 rounded">
                  <img
                    className="h-max"
                    alt="Galaxy"
                    src={require("../../Images/DG.png")}
                  />
                </div>
              </div>
              <div className="xs:col-span-6 py-2 sm:col-span-3 md:col-span-2 lg:col-span-7 flex flex-col justify-between">
                <h1 className="text-[#1C1C1C] font-semibold col-span-2">
                  Distant Galaxy
                </h1>
                <div className="">1.63 ETH</div>
              </div>

              <div className="xs:col-span-4 sm:col-span-3 md:col-span-2 lg:col-span-5 ">
                <div className=" lg:border border-gray-300 p-2 rounded">
                  <img
                    className="h-max"
                    alt="Galaxy"
                    src={require("../../Images/DG.png")}
                  />
                </div>
              </div>
              <div className="xs:col-span-6 py-2 sm:col-span-3 md:col-span-2 lg:col-span-7 flex flex-col justify-between">
                <h1 className="text-[#1C1C1C] font-semibold col-span-2">
                  Distant Galaxy
                </h1>

                <div className="">1.63 ETH</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
