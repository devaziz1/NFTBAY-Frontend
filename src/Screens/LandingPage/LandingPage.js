import React, { useEffect,useRef } from "react";

import Slider from "react-slick";
import HeroImage from "../../Images/HeroImage.png";
import { ReactComponent as Arrow } from "../../Assets/arrow.svg";
import { ReactComponent as ArtLogo } from "../../Assets/PaintBrush.svg";
import { ReactComponent as Collectibes } from "../../Assets/Swatches.svg";
import { ReactComponent as Music } from "../../Assets/MusicNotes.svg";
import { ReactComponent as Photography } from "../../Assets/Camera.svg";
import { ReactComponent as Utility } from "../../Assets/MagicWand.svg";
import { ReactComponent as Sports } from "../../Assets/sports.svg";
import { ReactComponent as Video } from "../../Assets/video.svg";
import { ReactComponent as virtulaWorls } from "../../Assets/planet.svg";

import Button from "../../Components/Button";
import "./Slider.css";
import { useNavigate } from "react-router-dom";

import Header from "../../Components/Header";
import { BsRocketTakeoff } from "react-icons/bs";

import image2 from "../../Images/SliderImages/NFT2.png";
import image3 from "../../Images/SliderImages/NFT3.png";
import image5 from "../../Images/SliderImages/NFT5.png";

import Slider2 from "../../Images/SliderImages/slider2.png";
import Slider3 from "../../Images/SliderImages/slider3.png";
import Slider4 from "../../Images/SliderImages/slider4.png";
import Slider5 from "../../Images/SliderImages/slider1.png";

import DistantGalaxy from "../../Images/DG.png";
import LifeOnEdena from "../../Images/LOE.png";
import Astrofriction from "../../Images/AF.png";
import Footer from "../../Components/Footer";

const SliderSVG = [
  ArtLogo,
  Collectibes,
  Music,
  Photography,
  Utility,
  Video,
  Sports,
  virtulaWorls,
];

const images = [
  Slider2,
  Slider3,
  image2,
  image3,
  image5,
  Slider4,
  Slider5,
  image3,
];

const imageCaption = [
  "Art",
  "Collectibles",
  "Music",
  "Photography",
  "Utility",
  "Video",
  "Sports",
  "Virtual World",
];

export default function LandingPage2() {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Use the ref to call slickNext() method
    }
  };
  
  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Use the ref to call slickPrev() method
    }
  };

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5.5,
    slidesToScroll: 5.5,  
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 4.5,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3.3,
          slidesToScroll: 3.3,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1.5,
          initialSlide: 0,
        },
      },
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="grid grid-cols-12  gap-2  rounded mr-2 ml-2 relative p-3  border-slate-300 border-opacity-100 lg:border">
        <div className="grid grid-cols-12 xs:col-span-12 gap-4 ">
          <div
            className={`xs:col-span-12 lg:col-span-9 bg-slate-100 p-5 bg-cover bg-center `}
            style={{ backgroundImage: `url(${HeroImage}) ` }}
          >
            <p className="md:text-5xl mt-8 font-inter md:font-semibold xs:text-3xl xs:font-semibold text-white max-w-lg ">
              Discover Digital Art & Collect NFTs
            </p>
            <button
              type="button"
              className="text-white flex  mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <BsRocketTakeoff
                style={{ width: "30px", height: "25px", marginRight: "5px" }}
              />
              Get Started
            </button>
          </div>
          <div className="xs:col-span-12 lg:col-span-3 grid grid-cols-12 gap-2">
            <div className="bg-[#E3F0FF] p-3 grid grid-cols-12 gap-2 rounded xs:col-span-12 md:col-span-4 lg:col-span-12">
              <div className="flex xs:justify-center xs:items-center  col-span-12">
                <img
                  src={require("../../Images/user.png")}
                  alt="User"
                  className="md:w-[50px] md:ml-2 xs:w-[50px]"
                />

                <p className=" md:text-xl md:ml-2 xs:hidden sm:block ml-3 xl:block lg:block md:block">
                  Hi, User let's get started
                </p>
              </div>

              <button
                onClick={() => {
                  navigate("/SignUp");
                }}
                type="button"
                className="col-span-12 sm:col-span-6 md:col-span-12 p-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg"
              >
                Join now
              </button>
              <button
                onClick={() => {
                  navigate("/Login");
                }}
                type="button"
                className="col-span-12 p-2 font-medium sm:col-span-6 md:col-span-12  text-blue-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10"
              >
                Log in
              </button>
            </div>
            <div className="bg-[#F38332] text-white p-3 rounded   xs:col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-12">
              Buy top NFTs from best sellers in Marketplace
            </div>

            <div className="bg-[#55BDC3] p-3 text-white rounded xs:col-span-12 md:col-span-4 sm:col-span-6 lg:col-span-12">
              Start creating your own NFTs and sell them in Marketplace
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12  p-3">
        <div className="col-span-12 flex justify-between">
          <h1 className="md:text-2xl font-inter xs:text-xl lg:text-3xl text-black  font-semibold">
            Explore popular Categories
          </h1>

          <div className="flex justify-center items-center">
            <button onClick={prevSlide} className=" text-black font-medium flex justify-end" >
              <div>
                <Arrow
                  style={{
                    width: "15px",
                    height: "15px",
                    marginRight:"20px",
                    marginTop: "7px",
                    transform: "scale(-1)",
                  }}
                />
              </div>
            </button>

            <button onClick={nextSlide} className=" text-black font-medium flex justify-end">
              <div>
                <Arrow
                  style={{
                    width: "15px",
                    height: "15px",
                    marginTop: "7px",
                    marginLeft: "3px",
                    marginRight:"2px"
                  }}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 p-3 overflow-x-hidden">
        <Slider {...settings} className="col-span-12">
          {images.map((image, index) => (
            <div className="px-2 overflow-hidden" key={index}>
              <div
                style={{
                  background: `url(${image})`,
                  backgroundSize: "cover",
                  height: "200px",
                  borderRadius: "10px",
                  backgroundPosition: "center",
                  objectFit: "cover",
                  
                }}
              >
                {/* Centered SVG Logo */}
                <div
                  className="flex justify-center items-center"
                  style={{ height: "100%" }}
                >
                  {React.createElement(SliderSVG[index % SliderSVG.length], {
                    width: "50",
                    height: "50",
                  })}
                </div>
              </div>
              <div className="text-center font-inter font-bold">
                {imageCaption[index % imageCaption.length]}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="grid grid-cols-12  p-3">
        <h1 className="xs:col-span-7 font-inter sm:col-span-6 md:col-span-4 md:text-2xl xs:text-xl lg:text-3xl text-black font-semibold ">
          Discover More NTFs
        </h1>
        <div className="xs:col-span-1 sm:col-span-3 md:col-span-6"></div>

        <button className="xs:col-span-4 xs:mr-3 sm:col-span-3 md:col-span-2 text-black font-medium flex justify-end">
          See all
          <div>
            <Arrow
              style={{
                width: "12px",
                height: "12px",
                marginTop: "7px",
                marginLeft: "3px",
              }}
            />
          </div>
        </button>
      </div>
      <div className="grid grid-cols-12 ml-3">
        <h2 className="xs:hidden font-inter sm:col-span-4 sm:block  sm:text-sm md:text-base md:font-medium">
          Explore New Trending NTFs
        </h2>
        <div className=" sm:col-span-8"></div>
      </div>

      <div className="grid grid-cols-12 p-3 gap-5">
        <div className="xs:col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 ">
          <img
            src={DistantGalaxy}
            alt="DistantGalaxy"
            className="w-full h-auto"
          />
          <div className="grid grid-cols-12">
            <div className="xs:col-span-12 md:col-span-8 lg:col-span-7 xl:col-span-5 ">
              <div className="xs:text-sm font-inter md:text-base  mt-3 text-black font-semibold">
                Distant Galaxy
              </div>
              <div className=" flex mt-3">
                <img
                  src={image3}
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

        <div className="xs:col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 ">
          <img
            src={LifeOnEdena}
            alt="DistantGalaxy"
            className="w-full h-auto"
          />
          <div className="grid grid-cols-12">
            <div className="xs:col-span-12 md:col-span-8 lg:col-span-7 xl:col-span-5 ">
              <div className="xs:text-sm font-inter md:text-base   mt-3 text-black font-semibold">
                Life On Edena
              </div>
              <div className=" flex mt-3">
                <img
                  src={image3}
                  alt="DistantGalaxy"
                  className="w-5 h-5 rounded-full"
                />
                <div className="font-mono text-[#3B3B3B] ml-3 xs:text-[12px] md:text-sm ">
                  NabulaKid
                </div>
              </div>
              <div className="font-mono text-[#858584] mt-3">Price</div>
              <div className="xs:col-span-0 md:col-span-4  lg:col-span-5 xl:col-span-6"></div>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="xs:col-span-12 sm:col-span-5 md:col-span-4 font-mono text-[#3B3B3B] mt-1 ">
              1.63 ETH
            </div>
            <div className="xs:col-span-0 sm:col-span-2 md:col-span-4"></div>
            <div className="xs:col-span-12 sm:col-span-5 md:col-span-4 sm:flex sm:justify-end">
              <Button />
            </div>
          </div>
        </div>

        <div className="xs:col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 ">
          <img
            src={Astrofriction}
            alt="DistantGalaxy"
            className="w-full h-auto"
          />
          <div className="grid grid-cols-12">
            <div className="xs:col-span-12 md:col-span-8 lg:col-span-7 xl:col-span-5 ">
              <div className="xs:text-sm font-inter md:text-base  mt-3 text-black font-semibold">
                Astro Friction
              </div>
              <div className=" flex mt-3">
                <img
                  src={image3}
                  alt="DistantGalaxy"
                  className="w-5 h-5 rounded-full"
                />
                <div className="font-mono text-[#3B3B3B] ml-3 xs:text-[12px] md:text-sm ">
                  Space
                </div>
              </div>
              <div className="font-mono text-[#858584] mt-3">Price</div>
              <div className="xs:col-span-0 md:col-span-4  lg:col-span-5 xl:col-span-6"></div>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="xs:col-span-12 sm:col-span-5 md:col-span-4 font-mono text-[#3B3B3B] mt-1 ">
              1.63 ETH
            </div>
            <div className="xs:col-span-0 sm:col-span-2 md:col-span-4"></div>
            <div className="xs:col-span-12 sm:col-span-5 md:col-span-4 sm:flex sm:justify-end">
              <Button />
            </div>
          </div>
        </div>

        <div className="xs:col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
          <img
            src={DistantGalaxy}
            alt="DistantGalaxy"
            className="w-full h-auto"
          />
          <div className="grid grid-cols-12">
            <div className="xs:col-span-12 md:col-span-8 lg:col-span-7 xl:col-span-5 ">
              <div className="xs:text-sm font-inter md:text-base  mt-3 text-black font-semibold">
                Distant Galaxy
              </div>
              <div className=" flex mt-3">
                <img
                  src={image3}
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
            <div className="xs:col-span-12 sm:col-span-5 md:col-span-4 font-mono text-[#3B3B3B] mt-1 ">
              1.63 ETH
            </div>
            <div className="xs:col-span-0 sm:col-span-2 md:col-span-4"></div>
            <div className="xs:col-span-12 sm:col-span-5 md:col-span-4 sm:flex sm:justify-end">
              <Button />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
