import React, { useState } from "react";
import { ReactComponent as AdminArrow } from "../../../Assets/AdminArrow.svg";
import ReactApexChart from "react-apexcharts";

export default function DashBoard() {
  const [chartData] = useState({
    series: [
      {
        name: "Subscription",
        data: [12, 10, 20, 30, 25, 20, 15, 45, 20, 10, 20, 40],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        dataLabels: {
          enabled: false,
        },
        bar: {
          borderRadius: 5,

          colors: {
            backgroundBarColors: ["#F0F0F0"],
            ranges: [
              {
                from: 0,
                to: 100,
                color: "#4A3AFF",
              },
            ],
          },
          strokeWidth: 1,
          barWidth: 5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        position: "bottom",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        min: 0,
        max: 60,
        tickAmount: 6,
        labels: {
          formatter: function (val) {
            return val;
          },
        },
      },
    },
  });

  const [revenueLineChart] = useState({
    series: [
      {
        data: [0, 41, 0, 50, 20, 0, 80],
      },
    ],
    options: {
      chart: {
        height: 250,
        type: "line",
        toolbar: {
          show: false, // Remove the toolbar with the hamburger button
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth", // Change curve type if needed
      },
      grid: {
        show: false, // Remove the grid lines
      },

      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
        labels: {
          show: false, // Remove labels on the X axis
        },
        axisBorder: {
          show: false, // Remove the lines at the bottom of the x-axis
        },
      },
      yaxis: {
        labels: {
          show: false, // Remove labels on the Y axis
        },
      },
    },
  });

  const [vistLineChart] = useState({
    series: [
      {
        data: [0, 50, 15, 30, 49, 12, 10],
      },
    ],
    options: {
      chart: {
        height: 250,
        type: "line",
        toolbar: {
          show: false, // Remove the toolbar with the hamburger button
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth", // Change curve type if needed
      },
      grid: {
        show: false, // Remove the grid lines
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
        labels: {
          show: false, // Remove labels on the X axis
        },
        axisBorder: {
          show: false, // Remove the lines at the bottom of the x-axis
        },
      },
      yaxis: {
        labels: {
          show: false, // Remove labels on the Y axis
        },
      },
    },
  });
  return (
    <>
      <div className="grid grid-cols-12 p-3 gap-2 ">
        <div className="col-span-12 font-semibold p-1 text-lg font-inter border-b-2">
          Welcome back, salman
        </div>
        <div className="xs:col-span-12 xl:col-span-8 p-1 bg-[#FFF] rounded-lg shadow-md">
          <div className="font-inter font-semibold text-lg ml-5">Monthly Subscription</div>
          <div id="chart">
            <ReactApexChart
              options={chartData.options}
              series={chartData.series}
              type="bar"
              height={300}
            />
          </div>
        </div>

        <div className="xs:col-span-12 xl:col-span-4 grid grid-cols-12 gap-2 justify-between">
          <div className="xs:col-span-12 lg:col-span-6 xl:col-span-12 border p-2 grid grid-cols-6 bg-[#FFF] rounded-lg shadow-md">
            <div className="col-span-6 flex flex-row justify-between h-[150px]">
              <div>
                <h1 className="font-semibold font-inter text-sm mt-3">Total revenue</h1>
                <h2 className="font-bold text-2xl mt-5">10 ETH</h2>
                <div className="text-green-400 text-xs font-bold flex flex-row">
                  +21.01%
                  <div>
                    <AdminArrow
                      style={{
                        width: "15px",
                        height: "15px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                id="chart"
                className="xs:h-[150px] sm:h-[180px] xs:w-[180px] sm:w-[190px] lg:h-[300px] xl:h-[300px] lg:w-[200px] xl:w-[200px]"
              >
                <ReactApexChart
                  options={revenueLineChart.options}
                  series={revenueLineChart.series}
                  type="line"
                />
              </div>
            </div>
          </div>

          <div className="xs:col-span-12 lg:col-span-6 xl:col-span-12 border p-2 grid grid-cols-6 bg-[#FFF] rounded-lg shadow-md ">
            <div className="col-span-6 flex flex-row justify-between h-[150px]">
              <div>
                <h1 className="font-semibold font-inter text-sm mt-3" >New Vists</h1>
                <h2 className="font-bold text-2xl mt-5">1K</h2>
                <div className="text-green-400 text-xs font-bold flex flex-row">
                  +21.01%
                  <div>
                    <AdminArrow
                      style={{
                        width: "15px",
                        height: "15px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                id="chart"
                className="xs:h-[150px] sm:h-[180px] xs:w-[180px] sm:w-[190px] lg:h-[300px] xl:h-[300px] lg:w-[200px] xl:w-[200px]"
              >
                <ReactApexChart
                  options={vistLineChart.options}
                  series={vistLineChart.series}
                  type="line"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12  bg-[#FFF] rounded-lg shadow-md ">
          <div className="flex justify-between p-3">
            <h1 className="text-lg font-semibold font-inter">Recent Subscriptions</h1>
            <div className="text-blue-500 underline">see all</div>
          </div>

          <div class="relative col-span-12 overflow-x-auto  mt-3 sm:rounded-lg">
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
                  <td class="px-6 py-4">14/2/2023</td>
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
                  <td class="px-6 py-4">14/2/2023</td>
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
                  <td class="px-6 py-4">14/2/2023</td>
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
                  <td class="px-6 py-4">14/2/2023</td>
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
                  <td class="px-6 py-4">14/2/2023</td>
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
      </div>
    </>
  );
}
