import React, { useState } from "react";
import useProducts from "../Hooks/useProducts";
import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
import { NavLink } from "react-router";

const Apps = () => {
  const { products } = useProducts();
  const [search, setSearch] = useState("");

  const trims = search.trim().toLocaleLowerCase();

  // ফিল্টার করা data
  const filterData = trims
    ? products.filter((product) =>
        product.title.toLocaleLowerCase().includes(trims)
      )
    : products;

  const notFound = trims && filterData.length === 0;

  return (
    <div className="container mx-auto">
      <div className="text-center md:my-10 my-4">
        <h1 className="font-bold text-3xl my-3 text-violet-800">
          Our All Applications
        </h1>
        <p className="mb-2 text-gray-400">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {/* found data */}
      <div className="text-center md:flex justify-between items-center my-4">
        <div>
          <h1 className="md:my-0 my-4">({filterData.length}) Apps Found</h1>
        </div>

        {/* Input field */}
        <div>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="Search"
            />
          </label>
        </div>
      </div>
      {/* <NavLink to={'/detail'}></NavLink> */}
      {/* Product List */}
      {notFound ? (
        <div className="text-center text-gray-600 font-semibold text-3xl my-10">
          No Apps Found
        </div>
      ) : (
        <div className="md:grid grid-cols-4 gap-5">
          {products.map(({ id, image, title, downloads, ratingAvg }) => (
            <NavLink key={id} to={`/detail/${id}`}>
              <div className="card bg-base-100 w-full shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg">
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
      )}
      {/* Show All Btn */}
      <div className="flex justify-center my-5">
        <NavLink to="/app" className="btn font-bold text-lg text-center">
          Show All
        </NavLink>
      </div>
    </div>
  );
};

export default Apps;
