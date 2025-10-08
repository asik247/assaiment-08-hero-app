import React from "react";
import useProducts from "../Hooks/useProducts";
import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";

const Apps = () => {
  const { products } = useProducts();
  //   console.log(products);
  return (
    <div className="container mx-auto">
      <div className="text-center  my-10">
        <h1 className="font-bold text-3xl my-3 text-violet-800">Our All Applications</h1>
        <p className="mb-2 text-gray-400">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      {/* found data */}
      <div className="text-center md:flex justify-between items-center my-4">
        <div>
          <h1>({products.length}) Apps Found</h1>
        </div>
        <div>
          <p>input feild hobe</p>
        </div>
      </div>
      {/* All Products */}
      <div className="md:grid grid-cols-4 gap-5">
        {products.map((product) => (
          <div key={product.id} className="card bg-base-100 w-full shadow-sm">
            <figure>
              <img
                className="h-[200px] object-cover p-3 rounded-3xl"
                src={product.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className=" font-bold text-lg text-center">
                {product.title}
              </h2>
              <div className="flex justify-between gap-2 overflow-hidden">
                <div className="flex items-center gap-1 text-blue-400 btn px-2">
                  <img className="w-4" src={downloadImg} alt="download img" />
                  <span>{product.downloads}</span>
                </div>
                <div className="flex items-center text-violet-500 gap-1 btn px-3">
                  <img
                    className="w-4 text-blue-300"
                    src={ratingImg}
                    alt="download img"
                  />
                  <span>{product.ratingAvg}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
