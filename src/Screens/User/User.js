import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

export default function User() {
  return (
    <>
      <Header />
      <div className="relative mt-5">
        {/* Cover Picture */}
        <div className="w-full h-64 bg-cover bg-center relative">
          <img
            src={require("../../Images/SignUpBackgroundImage.png")}
            alt="Cover"
            className="w-full h-full  object-cover"
          />
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        </div>

        {/* Profile Picture */}
        <div className="absolute  left-20 transform -translate-x-1/2 -translate-y-14">
          <img
            src={require("../../Images/Profile.png")}
            alt="Profile"
            className="w-24 h-24 rounded-2xl border-2 border-black"
          />
        </div>
      </div>
      <div className="grid grid-cols-12 ml-5 mt-12 ">
        <div className="col-span-12 text-4xl font-semibold ">AnimaKid</div>
      </div>

      <div className="flex">
        <div className="col-span-6 p-5 font-mono ">
          <div className="font-semibold text-2xl">250+</div>
          <div>Owned NFTs</div>
        </div>

        <div className="ml-5 col-span-6 p-5 font-mono ">
          <div className="font-semibold text-2xl">50+</div>
          <div>Sold NFTs</div>
          
        </div>
      </div>
      <div className="grid grid-cols-12 ml-5 ">
      <div>
        
        Bio
      </div>
      <div className="col-span-12 mr-5 mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure laudantium eligendi accusantium, quaerat adipisci modi quidem repudiandae odit nobis excepturi. Ipsa aspernatur, aliquam assumenda ducimus rem quo consequuntur possimus architecto voluptas! Non perspiciatis laboriosam tempora quidem, minima corrupti nobis suscipit ut soluta earum in fuga unde inventore libero. Cumque dolore, assumenda ipsam vero est saepe perspiciatis? Sint, fugiat quidem? Expedita, perferendis est? Vero voluptas praesentium nobis perspiciatis impedit, facere repellat debitis eius quidem ad officia. Quibusdam veniam quia illo consequatur, deleniti vero perferendis provident veritatis, porro praesentium enim at facere. Ipsum fugiat, asperiores sapiente molestias mollitia eum ducimus maiores saepe.
      </div>
      </div>
      <Footer/>
    </>
  );
}
