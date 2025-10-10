import React, { useState, useEffect } from "react";
import { SiAppstore, SiGoogleplay } from "react-icons/si";
import heroImg from "../assets/hero.png";
import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
import logoImg from "../assets/logo.png";
import useProducts from "../Hooks/useProducts";
import { NavLink } from "react-router";

const Home = () => {
  const { products } = useProducts();
  const [loading, setLoading] = useState(true);
  const [sliceProducts, setSliceProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      setTimeout(() => {
        setSliceProducts(products.slice(0, 8));
        setLoading(false);
      }, 500);
    }
  }, [products]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <div className="flex justify-center items-center gap-2">
          <img
            className="w-[40px] animate-spin"
            src={logoImg}
            alt="loading"
          />
          <h1 className="text-3xl text-gray-400 animate-pulse">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div className="container mx-auto px-4 py-10 flex flex-col items-center">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl md:text-4xl font-extrabold">
            We Build <br />{" "}
            <span className="text-violet-600">Productive </span>Apps
          </h1>
          <p className="text-gray-400 max-w-xl md:text-[16px] text-[12px]">
            At <span className="font-semibold">HERO.IO</span> we craft
            innovative apps designed to make everyday life simpler, smarter, and
            more exciting.
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <a
              href="https://play.google.com/store/apps/details?id=com.microsoft.appmanager"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-md text-white text-sm font-medium btn"
            >
              <SiGoogleplay className="text-blue-400" />
              Google Play
            </a>
            <a
              href="https://apps.apple.com/us/app/garageband/id408709785"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-md text-white text-sm font-medium btn"
            >
              <SiAppstore className="text-blue-400" />
              App Store
            </a>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <img src={heroImg} alt="Hero Illustration" className="w-[450px]" />
        </div>
        <div className="w-screen bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white py-2 md:py-5">
          <div className="container mx-auto md:flex flex-col justify-center items-center">
            <h1 className="text-center md:text-4xl text-2xl mb-5">
              Trusted by Millions, Built for You
            </h1>
            <div className="md:flex justify-center items-center gap-10">
              <div className="px-6 md:py-4 text-center md:mb-0 mb-5">
                <h1 className="text-gray-300">Total Downloads</h1>
                <h2 className="text-4xl my-2 font-extrabold">29.6M</h2>
                <p className="text-gray-300">21% more than last month</p>
              </div>
              <div className="px-6 md:py-4 text-center md:mb-0 mb-5">
                <p className="text-gray-300">Total Reviews</p>
                <h2 className="text-4xl my-2 font-extrabold">906K</h2>
                <p className="text-gray-300">46% more than last month</p>
              </div>
              <div className="px-6 md:py-4 text-center md:mb-0 mb-5">
                <p className="text-gray-300">Active Apps</p>
                <h2 className="text-4xl my-2 font-extrabold">132+</h2>
                <p className="text-gray-300">31 more will Launch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="font-bold text-3xl my-3">Trending Apps</h1>
          <p className="text-gray-500 mb-3">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="md:grid grid-cols-4 gap-5">
          {sliceProducts.map(({ id, image, title, downloads, ratingAvg }) => (
            <NavLink key={id} to={`/detail/${id}`}>
              <div className="card bg-base-100 w-full shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg md:my-0 my-5">
                <figure>
                  <img
                    className="h-[200px] object-cover p-3 rounded-lg bg-gray-200"
                    src={image}
                    alt={title}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="font-bold text-lg text-center">{title}</h2>
                  <div className="flex justify-between gap-2 overflow-hidden">
                    <div className="flex items-center gap-1 text-blue-400 btn px-2">
                      <img className="w-4" src={downloadImg} alt="downloads" />
                      <span>{downloads}</span>
                    </div>
                    <div className="flex items-center text-violet-500 gap-1 btn px-3">
                      <img className="w-4" src={ratingImg} alt="rating" />
                      <span>{ratingAvg}</span>
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>

        <div className="flex justify-center my-5">
          <NavLink
            to="/app"
            className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] py-6 px-10 text-white font-bold text-lg text-center"
          >
            Show All
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
