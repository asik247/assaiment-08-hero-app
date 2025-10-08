import React from "react";
import { SiAppstore, SiGoogleplay } from "react-icons/si";
import heroImg from "../assets/hero.png";
import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
import useProducts from "../Hooks/useProducts";
import { NavLink } from "react-router";

const Home = () => {
  const { products } = useProducts();
  const sliceProducts = products.slice(0, 8);
  //   console.log(sliceProducts);
  return (
    <div className=" w-full flex flex-col items-center">
      <div className="container mx-auto px-4 py-10 flex flex-col items-center">
        <div className="space-y-5 text-center">
          <h1 className="text-4xl font-bold">
            We Build <span className="text-violet-600">Productive </span>Apps
          </h1>
          <p className="text-gray-600 max-w-xl">
            At <span className="font-semibold">HERO.IO</span> we craft
            innovative apps designed to make everyday life simpler, smarter, and
            more exciting. Our goal is to turn your ideas into digital
            experiences that truly make an impact.
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

        {/* Image section */}
        <div className="mt-8 flex justify-center">
          <img src={heroImg} alt="Hero Illustration" className="w-[450px]" />
        </div>
        {/* bg... */}
        {/* Full width background section */}
        <div className="w-screen bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white py-10">
          <div className="container mx-auto md:flex flex-col justify-center items-center">
            <h1 className="text-center md:text-3xl text-2xl mb-5">
              Trusted by Millions, Built for You
            </h1>

            <div className="md:flex justify-center items-center gap-10">
              <div className=" px-6 py-4 text-center rounded-lg">
                <p>Total Downloads</p>
                <h2 className="md:text-2xl text-lg font-bold">29.6M</h2>
                <p>21% more than last month</p>
              </div>
              <div className=" px-6 py-4 text-center rounded-lg">
                <p>Total Reviews</p>
                <h2 className="md:text-2xl text-lg font-bold">906K</h2>
                <p>46% more than last month</p>
              </div>
              <div className=" px-6 py-4 text-center rounded-lg">
                <p>Active Apps</p>
                <h2 className="md:text-2xl text-lg font-bold">132+</h2>
                <p>31 more will Launch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Trending Apps */}

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
              <div className="card bg-base-100 w-full shadow-sm">
                <figure>
                  <img
                    className="h-[200px] object-cover p-3 rounded-3xl"
                    src={image}
                    alt={title}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="font-bold text-lg text-center">{title}</h2>
                  <div className="flex justify-between gap-2 overflow-hidden">
                    <div className="flex items-center gap-1 text-blue-400 btn px-2">
                      <img
                        className="w-4"
                        src={downloadImg}
                        alt="download img"
                      />
                      <span>{downloads}</span>
                    </div>
                    <div className="flex items-center text-violet-500 gap-1 btn px-3">
                      <img className="w-4" src={ratingImg} alt="rating img" />
                      <span>{ratingAvg}</span>
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>

        <div className="flex justify-center my-5">
          <NavLink to="/app" className="btn font-bold text-lg text-center">
            Show All
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
