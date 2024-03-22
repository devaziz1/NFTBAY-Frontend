import React from "react";

export default function Subscriptions() {
  return(
    <>
     <div className="font-semibold font-inter text-2xl ml-5">Subscriptions</div>
      <div className="grid grid-cols-12 p-3 shadow-lg ml-3 mr-3 rounded-md">
        <div className="col-span-12 flex xs:flex-col md:flex-row md:justify-between md:items-center ">
          <div className="col-span-6">

            <label
              for="countries"
              class="block mb-2 text-lg font-inter font-medium text-gray-900 dark:text-white"
            >
              Status
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>All</option>
              <option value="confirm">
                <td class="px-6 py-4">
                  <div class="flex items-center">
                    <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                    Confirmed
                  </div>
                </td>
              </option>
              <option value="pending">Pending</option>
            </select>
          </div>
          <div className="col-span-6 xs:mt-3 sm:mt-0">
            <form>
              <label
                for="default-search"
                class="mb-2 text-sm  font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full mt-5 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search User"
                  required
                />
              </div>
            </form>
          </div>
        </div>


        <div class="relative col-span-12 overflow-x-auto border mt-3 sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Code
                </th>
                <th scope="col" class="px-6 py-3">
                  Purchase Date
                </th>
                <th scope="col" class="px-6 py-3">
                  Buyer Email
                </th>
                <th scope="col" class="px-6 py-3">
                  Payment ReferenceID
                </th>
                <th scope="col" class="px-6 py-3">
                  Amount
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  #HA-AU-031-01
                </th>
                <td class="px-6 py-4">14 February 2023</td>
                <td class="px-6 py-4">salman504@gmail.com</td>
                <td class="px-6 py-4">1234567891900</td>
                <td class="px-6 py-4">1Eth</td>
                <td class="px-6 py-4">
                <td
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </td>
                </td>
              </tr>


              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  #HA-AU-031-01
                </th>
                <td class="px-6 py-4">14 February 2023</td>
                <td class="px-6 py-4">salman504@gmail.com</td>
                <td class="px-6 py-4">1234567891900</td>
                <td class="px-6 py-4">1Eth</td>
                <td class="px-6 py-4">
                <td
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </td>
                </td>
              </tr>



              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  #HA-AU-031-01
                </th>
                <td class="px-6 py-4">14 February 2023</td>
                <td class="px-6 py-4">salman504@gmail.com</td>
                <td class="px-6 py-4">1234567891900</td>
                <td class="px-6 py-4">1Eth</td>
                <td class="px-6 py-4">
                <td
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </td>
                </td>
              </tr>


              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  #HA-AU-031-01
                </th>
                <td class="px-6 py-4">14 February 2023</td>
                <td class="px-6 py-4">salman504@gmail.com</td>
                <td class="px-6 py-4">1234567891900</td>
                <td class="px-6 py-4">1Eth</td>
                <td class="px-6 py-4">
                <td
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </td>
                </td>
              </tr>


              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  #HA-AU-031-01
                </th>
                <td class="px-6 py-4">14 February 2023</td>
                <td class="px-6 py-4">salman504@gmail.com</td>
                <td class="px-6 py-4">1234567891900</td>
                <td class="px-6 py-4">1Eth</td>
                <td class="px-6 py-4">
                <td
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </td>
                </td>
              </tr>

             
              
              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  #HA-AU-031-01
                </th>
                <td class="px-6 py-4">14 February 2023</td>
                <td class="px-6 py-4">salman504@gmail.com</td>
                <td class="px-6 py-4">1234567891900</td>
                <td class="px-6 py-4">1Eth</td>
                <td class="px-6 py-4">
                <td
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </td>
                </td>
              </tr>

              

              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  #HA-AU-031-01
                </th>
                <td class="px-6 py-4">14 February 2023</td>
                <td class="px-6 py-4">salman504@gmail.com</td>
                <td class="px-6 py-4">1234567891900</td>
                <td class="px-6 py-4">1Eth</td>
                <td class="px-6 py-4">
                <td
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </td>
                </td>
              </tr>

              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  #HA-AU-031-01
                </th>
                <td class="px-6 py-4">14 February 2023</td>
                <td class="px-6 py-4">salman504@gmail.com</td>
                <td class="px-6 py-4">1234567891900</td>
                <td class="px-6 py-4">1Eth</td>
                <td class="px-6 py-4">
                <td
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </td>
                </td>
              </tr>

              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  #HA-AU-031-01
                </th>
                <td class="px-6 py-4">14 February 2023</td>
                <td class="px-6 py-4">salman504@gmail.com</td>
                <td class="px-6 py-4">1234567891900</td>
                <td class="px-6 py-4">1Eth</td>
                <td class="px-6 py-4">
                <td
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </td>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    
    </>
  )
}
