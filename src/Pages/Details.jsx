import React, { useState } from "react";
import useProducts from "../Hooks/useProducts";
import { useParams } from "react-router";
import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
import reviewImg from "../assets/icon-review.png";
import {
  Bar,
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

const Details = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const product = products.find((p) => String(p.id) === id);
  const { title, image, companyName, downloads, reviews, ratingAvg, ratings,description } =
    product || {};
  const [installed, setInstalled] = useState(() => {
    const stored = getStroedProducts();
    return stored.includes(id);
  });

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

      <div className="md:flex justify-between items-center w-full  md:h-[60vh] h-[70vh] ml-5 md:ml-0">
        <figure>
          <img className="w-[150px] rounded-2xl mt-4 md:w-[250px]" src={image} alt={title} />
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
          <ReBar dataKey="count" fill="#ff4f00" barSize={25} />
        </BarChart>
      </div>

      <div>
        <h1 className="font-bold text-2xl my-4">Description:-</h1>
        <p className="text-gray-400 mb-2">
          {description}
           
        </p>
      </div>
    </div>
  );
};

export default Details;
