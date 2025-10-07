import React from "react";
import useProducts from "../Hooks/useProducts";

const Apps = () => {
  const { products } = useProducts();
//   console.log(products);
  return (
    <div className="container mx-auto">
      <div className="border text-center  my-10">
        <h1>Our All Applications</h1>
        <p>
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
    </div>
  );
};

export default Apps;
