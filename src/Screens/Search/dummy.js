import React from "react";
import Button from "../../Components/Button";

export default function dummy() {
  const xyz = new Array(20).fill(null).map(() => ({
    heading: "Distant Galaxy",
    Description:
      "In the tranquil meadows of Willowbrook Valley, the golden hues of autumn painted the landscape. A gentle breeze rustled the leaves of the ancient oak trees that stood sentinel over the rolling hills. As the sun dipped below the horizon, its fading light cast long, enchanting shadows across the fields, creating a serene and picturesque scene. It was a place where time seemed to slow, and the worries of the world melted away, replaced by a sense of harmony with nature's rhythm",
  }));

  
  
  return (
    <div>
      {xyz.map((data, index) => (
        <>
          <div key={index} className="border border-gray-300 p-3 rounded mt-2 col-span-12  gap-2 ">
            <div className="grid grid-cols-12 gap-2">
              <div className="xs:col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2">
                <img
                  className="w-full h-full object-cover"
                  alt="Arrow"
                  src={require("../../Images/image 33.png")}
                />
              </div>
              <div className="xs:col-span-6  sm:col-span-8 md:col-span-9 flex flex-col justify-between lg:col-span-10">
                <h1 className="col-span-10 text-lg font-semibold">
                  {data.heading}
                </h1>
                <div className="col-span-2 font-mono">1.64 ETH</div>
                <div className="xs:hidden sm:block col-span-10 mt-5">
                  {data.Description}
                </div>
                <div className="col-span-10  flex mt-1 justify-between items-center">
                  <div className=" xs:text-xs  sm:text-base sm:col-span-5 xs:col-span-10 text-blue-700 font-semibold">
                    View details
                  </div>

                  <div className="xs:col-span-10 sm:col-span-5 ">
                    <Button />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
