import React from "react";
import useProducts from "../Hooks/useProducts";
import { NavLink, useParams } from "react-router";
import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
import reviewImg from "../assets/icon-review.png"

const Details = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const product = products.find((p) => String(p.id) === id);
  // console.log(id)
//   console.log(product);
  const { title, image,companyName,downloads,reviews,ratingAvg } = product || {};
  return (
    <div className="md:flex justify-between items-center w-full container mx-auto  bg-base-100 shadow-sm my-10 h-80">
      <figure>
        <img
          src={image}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="border-b-2 mb-5">{companyName}</p>
        <div className="flex justify-between items-center">
            <div>
                <img src={downloadImg} alt="" />
                <p>Download</p>
                <h1>{downloads}</h1>
            </div>
            <div>
                <img src={ratingImg} alt="" />
                <p>Average Ratings</p>
                <h1>{ratingAvg}</h1>
            </div>
            <div>
                <img src={reviewImg} alt="" />
                <p>Total Review</p>
                <h1>{reviews}</h1>
            </div>
        </div>
            <div className="btn w-50">
                <NavLink to={'/install'}>Install Now (201 MB)</NavLink>
            </div>
      </div>
    </div>
  );
};

export default Details;
