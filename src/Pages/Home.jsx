import React from "react";
import { SiAppstore, SiGoogleplay } from "react-icons/si";
import heroImg from "../assets/hero.png";
import useProducts from "../Hooks/useProducts";
import { NavLink } from "react-router";

const Home = () => {
  const { products } = useProducts();
  const sliceProducts = products.slice(0,8)
//   console.log(sliceProducts);
  return (
    <div className=" w-full flex flex-col items-center">
      <div className="container mx-auto px-4 py-10 flex flex-col items-center">
        <div className="space-y-5 text-center">
          <h1 className="text-4xl font-bold">
            We Build <span className="text-blue-400">Productive </span>Apps
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
              Contribute
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
          <img src={heroImg} alt="Hero Illustration" className="w-90" />
        </div>
        {/* bg... */}
        {/* Full width background section */}
        <div className="w-screen bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white py-10">
          <div className="container mx-auto md:flex flex-col justify-center items-center">
            <h1 className="text-center text-3xl mb-5">
              Trusted by Millions, Built for You
            </h1>

            <div className="md:flex justify-center items-center gap-10">
              <div className=" px-6 py-4 text-center rounded-lg">
                <p>Total Downloads</p>
                <h2 className="text-2xl font-bold">29.6M</h2>
                <p>21% more than last month</p>
              </div>
              <div className=" px-6 py-4 text-center rounded-lg">
                <p>Total Reviews</p>
                <h2 className="text-2xl font-bold">906K</h2>
                <p>46% more than last month</p>
              </div>
              <div className=" px-6 py-4 text-center rounded-lg">
                <p>Active Apps</p>
                <h2 className="text-2xl font-bold">132+</h2>
                <p>31 more will Launch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Trending Apps */}

      {/* <NavLink to={'/detail'}></NavLink> */}

      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="font-bold text-3xl my-5">Trending Apps</h1>
          <p className="text-gray-500">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="md:grid grid-cols-4 gap-5">
          {sliceProducts.map((product) => (
            <div key={product.id} className="card bg-base-100 w-full shadow-sm">
              <figure>
                <img
                  src={product.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="font-bold text-lg items-center w-[150px] block mx-auto my-5 btn">
            <NavLink to={'/app'}>Show All</NavLink>
        </div>
      </div>
    
    </div>
  );
};

export default Home;
