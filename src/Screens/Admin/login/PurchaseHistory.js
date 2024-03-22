import React from "react";

export default function PurchaseHistory() {
  return (
    <>
      <div className="font-semibold font-inter text-2xl ml-5">Purchase History</div>
      <div className="grid grid-cols-12 p-3 shadow-lg ml-3 mr-3 rounded-md">
        <div class="relative col-span-12 overflow-x-auto border mt-3 sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Purchase ID
                </th>
                <th scope="col" class="px-6 py-3">
                  Purchase Date
                </th>
                <th scope="col" class="px-6 py-3">
                  Buyer Email
                </th>
                <th scope="col" class="px-6 py-3">
                  seller Email
                </th>
                <th scope="col" class="px-6 py-3">
                  Payment ReferenceID
                </th>
                <th scope="col" class="px-6 py-3">
                  Amount
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
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
                <td class="px-6 py-4">14/2/2023</td>
                <td class="px-6 py-4">salman504@gmail.com</td>
                <td class="px-6 py-4">salman504@gmail.com</td>

                <td class="px-6 py-4">1234567891900</td>
                <td class="px-6 py-4">1Eth</td>
                <td class="px-6 py-4">Pending</td>
              </tr>

              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  #HA-AU-031-01
                </th>
                <td class="px-6 py-4">14/2/2023</td>
                <td class="px-6 py-4">salman504@gmail.com</td>
                <td class="px-6 py-4">salman504@gmail.com</td>

                <td class="px-6 py-4">1234567891900</td>
                <td class="px-6 py-4">1Eth</td>
                <td class="px-6 py-4">Completed</td>
              </tr>

              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  #HA-AU-031-01
                </th>
                <td class="px-6 py-4">14/2/2023</td>
                <td class="px-6 py-4">salman504@gmail.com</td>
                <td class="px-6 py-4">salman504@gmail.com</td>

                <td class="px-6 py-4">1234567891900</td>
                <td class="px-6 py-4">1Eth</td>
                <td class="px-6 py-4">Pending</td>
              </tr>

              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  #HA-AU-031-01
                </th>
                <td class="px-6 py-4">14/2/2023</td>
                <td class="px-6 py-4">salman504@gmail.com</td>
                <td class="px-6 py-4">salman504@gmail.com</td>

                <td class="px-6 py-4">1234567891900</td>
                <td class="px-6 py-4">1Eth</td>
                <td class="px-6 py-4">Pending</td>
              </tr>

              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  #HA-AU-031-01
                </th>
                <td class="px-6 py-4">14/2/2023</td>
                <td class="px-6 py-4">salman504@gmail.com</td>
                <td class="px-6 py-4">salman504@gmail.com</td>

                <td class="px-6 py-4">1234567891900</td>
                <td class="px-6 py-4">1Eth</td>
                <td class="px-6 py-4">Completed</td>
              </tr>

              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  #HA-AU-031-01
                </th>
                <td class="px-6 py-4">14/2/2023</td>
                <td class="px-6 py-4">salman504@gmail.com</td>
                <td class="px-6 py-4">salman504@gmail.com</td>

                <td class="px-6 py-4">1234567891900</td>
                <td class="px-6 py-4">1Eth</td>
                <td class="px-6 py-4">Pending</td>
              </tr>

              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  #HA-AU-031-01
                </th>
                <td class="px-6 py-4">14/2/2023</td>
                <td class="px-6 py-4">salman504@gmail.com</td>
                <td class="px-6 py-4">salman504@gmail.com</td>

                <td class="px-6 py-4">1234567891900</td>
                <td class="px-6 py-4">1Eth</td>
                <td class="px-6 py-4">Pending</td>
              </tr>

              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  #HA-AU-031-01
                </th>
                <td class="px-6 py-4">14/2/2023</td>
                <td class="px-6 py-4">salman504@gmail.com</td>
                <td class="px-6 py-4">salman504@gmail.com</td>

                <td class="px-6 py-4">1234567891900</td>
                <td class="px-6 py-4">1Eth</td>
                <td class="px-6 py-4">Pending</td>
              </tr>

              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  #HA-AU-031-01
                </th>
                <td class="px-6 py-4">14/2/2023</td>
                <td class="px-6 py-4">salman504@gmail.com</td>
                <td class="px-6 py-4">salman504@gmail.com</td>

                <td class="px-6 py-4">1234567891900</td>
                <td class="px-6 py-4">1Eth</td>
                <td class="px-6 py-4">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
