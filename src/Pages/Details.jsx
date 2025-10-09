import React, { useState } from "react";
import useProducts from "../Hooks/useProducts";
import { useParams } from "react-router";
import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
import reviewImg from "../assets/icon-review.png";
import {
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  Bar as ReBar,
} from "recharts";
import { addToStroedDB, getStroedProducts } from "../Utlity/addProductDB";
import toast, { Toaster } from "react-hot-toast";
import logoImg from "../assets/logo.png"; // spinner

const Details = () => {
  const { id } = useParams();
  const { products } = useProducts();

  // ✅ Hook always at top
  const [installed, setInstalled] = useState(() => {
    const stored = getStroedProducts();
    return stored.includes(id);
  });

  // ✅ Spinner while products not loaded
  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <div className="flex justify-center items-center gap-2">
          <img className="w-[40px] animate-spin" src={logoImg} alt="loading" />
          <h1 className="text-3xl text-gray-400 animate-pulse">Loading...</h1>
        </div>
      </div>
    );
  }

  const product = products.find((p) => String(p.id) === id);

  // ✅ Product not found handling
  if (!product) {
    return (
      <div className="text-center my-20 text-gray-500">
        <h1 className="text-3xl font-bold">Product Not Found!</h1>
        <p className="mt-2">The requested product does not exist.</p>
      </div>
    );
  }

  const {
    title,
    image,
    companyName,
    downloads,
    reviews,
    ratingAvg,
    ratings,
    description,
  } = product;

  const handleInstall = () => {
    addToStroedDB(id);
    setInstalled(true);
    toast.success(`${title} Installed Successfully`, {
      duration: 2000,
      position: "top-right",
    });
  };

  return (
    <div className="container mx-auto">
      <Toaster />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full h-auto md:h-[60vh] p-4 md:p-0">
        <figure>
          <img
            className="w-[150px] rounded-2xl mt-4 md:w-[250px] bg-gray-200"
            src={image}
            alt={title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="border-b-2 border-gray-300 mb-5">{companyName}</p>
          <div className="flex gap-10 items-center">
            <div>
              <img className="w-[25px]" src={downloadImg} alt="" />
              <p className="text-[13px]">Download</p>
              <h1>{downloads}</h1>
            </div>
            <div>
              <img className="w-[25px]" src={ratingImg} alt="" />
              <p className="text-[13px]">Average Ratings</p>
              <h1>{ratingAvg}</h1>
            </div>
            <div>
              <img className="w-[25px]" src={reviewImg} alt="" />
              <p className="text-[13px]">Total Review</p>
              <h1>{reviews}</h1>
            </div>
          </div>
          <div className=" w-50 mt-4">
            <button
              onClick={handleInstall}
              disabled={installed}
              className={
                installed
                  ? "btn text-green-500 bg-gray-400 cursor-not-allowed"
                  : "btn bg-green-600"
              }
            >
              {installed ? "Installed" : "Install Now"}
            </button>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden my-10">
        <h1 className="font-bold text-2xl">Ratings</h1>
        <BarChart
          width={700}
          height={400}
          data={ratings}
          layout="vertical"
          margin={{ top: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" dataKey="count" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Legend />
          <ReBar dataKey="count" fill="#ff8811" barSize={25} />
        </BarChart>
      </div>

      <div>
        <h1 className="font-bold text-2xl my-4">Description:-</h1>
        <p className="text-gray-400 mb-2">{description}</p>
      </div>
    </div>
  );
};

export default Details;
