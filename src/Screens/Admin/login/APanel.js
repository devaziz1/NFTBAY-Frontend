import React, { useState, useEffect } from "react";

import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function APanel() {
  const navigate = useNavigate();
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  const toggleSideDrawer = () => {
    setIsSideDrawerOpen(!isSideDrawerOpen);
  };

  const closeSideDrawer = () => {
    setIsSideDrawerOpen(false);
  };

  
  useEffect(() => {
    window.scrollTo(0, 0);
    const checkScreenSize = () => {
      if (window.innerWidth < 640) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
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

  const activeClass =
    "bg-[#8489FC] flex  items-center  text-white rounded-e-lg dark:text-white  group";
  const inActiveClass =
    "flex items-center  text-gray-800 rounded-e-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group";

  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2  ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleSideDrawer}
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        class={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSideDrawerOpen ? "" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >

        <div class="h-full mr-4  overflow-y-auto bg-[#FFF] dark:bg-gray-800">
          {showBtn && (
            <button
              class="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={closeSideDrawer}
              aria-label="Close sidebar"
            >
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 4.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 11-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          )}

          <ul class="space-y-5 font-medium">
            <li>
              <img
                alt="Admin"
                src={require("../../../Images/Admin.png")}
                className="w-24 h-full ml-16"
              />
            </li>

            <NavLink
              to="dashboard"
              onClick={closeSideDrawer}
              className={(navDate) => {
                return navDate.isActive ? activeClass : inActiveClass;
              }}
            >
              <li>
                <div class="flex items-center   p-3  rounded-lg dark:text-white  group">
                  <svg
                    class="flex-shrink-0 w-5 h-5  transition duration-75   dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  <span class="ml-5 ">Dashboard</span>
                </div>
              </li>
            </NavLink>

            <NavLink
              to="Users"
              onClick={closeSideDrawer}
              className={(navDate) => {
                return navDate.isActive ? activeClass : inActiveClass;
              }}
            >
              <li>
                <div class="flex items-center   p-3  rounded-lg dark:text-white  dark:hover:bg-gray-700 group">
                  <svg
                    class="flex-shrink-0 w-5 h-5  transition duration-75   dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                  </svg>
                  <span class="flex-1 ml-5 whitespace-nowrap">Users</span>
                </div>
              </li>
            </NavLink>

            <NavLink
              to="subscriptions"
              onClick={closeSideDrawer}
              className={(navDate) => {
                return navDate.isActive ? activeClass : inActiveClass;
              }}
            >
              <li>
                <div class="flex items-center p-3  rounded-lg dark:text-white group">
                  <svg
                    class="flex-shrink-0 w-5 h-5  transition duration-75   dark:group-hover:text-white"
                    fill="none"
                    viewBox="0 0 15 15"
                  >
                    <path
                      fill="currentColor"
                      d="M10 7.995V9H8V7.995h2zM10 6v.995H8V6h2zM7 6H5v.995h2V6zM7 7.995H5V9h2V7.995z"
                    />
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M1 1.5A1.5 1.5 0 012.5 0h8.207L14 3.293V13.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5v-12zM4 4h3V3H4v1zm7 1H4v5h7V5zm0 7H8v-1h3v1z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span class="flex-1 ml-5 whitespace-nowrap">
                    Subscription
                  </span>
                </div>
              </li>
            </NavLink>

            <NavLink
              to="History"
              onClick={closeSideDrawer}
              className={(navDate) => {
                return navDate.isActive ? activeClass : inActiveClass;
              }}
            >
              <li>
                <div class="flex items-center p-3  rounded-lg dark:text-white group">
                  <svg
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    class="flex-shrink-0 w-5 h-5  transition duration-75   dark:group-hover:text-white"
                  >
                    <path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24h110.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24v104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z" />
                  </svg>

                  <span class="flex-1 ml-5 whitespace-nowrap">
                    Purchase History
                  </span>
                </div>
              </li>
            </NavLink>

            <NavLink
              to="Settings"
              onClick={closeSideDrawer}
              className={(navDate) => {
                return navDate.isActive ? activeClass : inActiveClass;
              }}
            >
              <li>
                <div class="flex items-center p-3  rounded-lg  group">
                  <svg
                    class="flex-shrink-0 w-5 h-5  transition duration-75   dark:group-hover:text-white"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M256 176a80 80 0 1080 80 80.24 80.24 0 00-80-80zm172.72 80a165.53 165.53 0 01-1.64 22.34l48.69 38.12a11.59 11.59 0 012.63 14.78l-46.06 79.52a11.64 11.64 0 01-14.14 4.93l-57.25-23a176.56 176.56 0 01-38.82 22.67l-8.56 60.78a11.93 11.93 0 01-11.51 9.86h-92.12a12 12 0 01-11.51-9.53l-8.56-60.78A169.3 169.3 0 01151.05 393L93.8 416a11.64 11.64 0 01-14.14-4.92L33.6 331.57a11.59 11.59 0 012.63-14.78l48.69-38.12A174.58 174.58 0 0183.28 256a165.53 165.53 0 011.64-22.34l-48.69-38.12a11.59 11.59 0 01-2.63-14.78l46.06-79.52a11.64 11.64 0 0114.14-4.93l57.25 23a176.56 176.56 0 0138.82-22.67l8.56-60.78A11.93 11.93 0 01209.94 26h92.12a12 12 0 0111.51 9.53l8.56 60.78A169.3 169.3 0 01361 119l57.2-23a11.64 11.64 0 0114.14 4.92l46.06 79.52a11.59 11.59 0 01-2.63 14.78l-48.69 38.12a174.58 174.58 0 011.64 22.66z" />
                  </svg>

                  <span class="flex-1 ml-5 whitespace-nowrap">Settings</span>
                </div>
              </li>
            </NavLink>

            <li
              onClick={() => {
                navigate("/Admin");
              }}
            >
              <div class="flex mt-24 cursor-pointer items-center p-3 text-gray-800 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg
                  class="flex-shrink-0 w-5 h-5  transition duration-75   dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span class="flex-1 ml-5 whitespace-nowrap">Sign Out</span>
              </div>
            </li>
          </ul>
        </div>
      </aside>

      <div class="p-4 sm:ml-64 bg-[#F8F8F8] min-h-screen ">
        <Outlet />
      </div>
    </>
  );
}
