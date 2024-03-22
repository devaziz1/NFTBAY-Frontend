import React from 'react'

export default function CardView() {
  return (
    <div>
          <div className="grid grid-cols-12 p-3 gap-5">
        <div className="xs:col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 ">
          <img
            // src={DistantGalaxy}
            
            alt="DistantGalaxy"
            className="w-full h-auto"
          />
          <div className="grid grid-cols-12">
            <div className="xs:col-span-12 md:col-span-8 lg:col-span-7 xl:col-span-5 ">
              <div className="xs:text-sm md:text-lg  mt-3 text-black font-semibold">
                Distant Galaxy
              </div>
              <div className=" flex mt-3">
                <img
                //   src={image3}
                  alt="DistantGalaxy"
                  className="w-5 h-5 rounded-full"
                />
                <div className="font-mono text-[#3B3B3B] ml-3 xs:text-[12px] md:text-sm ">
                  MoonDancer
                </div>
              </div>
              <div className="font-mono text-[#858584] mt-3">Price</div>
              <div className="xs:col-span-0 md:col-span-4  lg:col-span-5 xl:col-span-6"></div>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="xs:col-span-12 sm:col-span-6  lg:col-span-4 font-mono text-[#3B3B3B] mt-1 ">
              1.63 ETH
            </div>
            <div className="xs:col-span-0 sm:col-span-1  lg:col-span-4"></div>
            <div className="xs:col-span-12 sm:col-span-5  lg:col-span-4 sm:flex sm:justify-end">
              <Button />
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}
