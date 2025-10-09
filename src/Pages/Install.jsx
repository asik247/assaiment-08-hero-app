import React, { useEffect, useState } from "react";
import useProducts from "../Hooks/useProducts";
import { getStroedProducts, removeFromStoredDB } from "../Utlity/addProductDB";
import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
import toast, { Toaster } from "react-hot-toast";

const Install = () => {
  const { products } = useProducts();
  const [install, setInstall] = useState([]);
  const [sort, setSort] = useState("none");

  useEffect(() => {
    const storedIds = getStroedProducts();
    if (products.length > 0 && storedIds.length > 0) {
      const myInstalledProducts = products.filter((item) =>
        storedIds.includes(String(item.id))
      );
      setInstall(myInstalledProducts);
    }
  }, [products]);

  const handleRemove = (id, name) => {
    removeFromStoredDB(id);
    const remaining = install.filter((p) => p.id !== id);
    setInstall(remaining);
    toast.success(`${name} Uninstalled Successfully`, {
      duration: 2000,
      position: "top-right",
    });
  };

  const parseDownloads = (val) => {
    if (typeof val === "number") return val;
    if (val.toUpperCase().includes("M")) {
      return parseFloat(val) * 1000000;
    }
    if (val.toUpperCase().includes("K")) {
      return parseFloat(val) * 1000;
    }
    return parseFloat(val) || 0;
  };

  const getSortedItems = () => {
    let sorted = [...install];

    if (sort === "price-asc") {
      sorted.sort(
        (a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads)
      );
    } else if (sort === "price-dsc") {
      sorted.sort(
        (a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads)
      );
    }
    return sorted;
  };

  const sortedList = getSortedItems();

  return (
    <div className="w-full space-y-4 py-10">
      <Toaster />

      <div className="container mx-auto my-10 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Installed Apps!</h1>
        <p className="text-gray-400 mb-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between items-center my-10 container mx-auto py-5">
        <div>
          <h1 className="md:my-0 my-4">({install.length}) Apps Found</h1>
        </div>

        <div>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="none">Sort by size</option>
            <option value="price-asc">Low to high</option>
            <option value="price-dsc">High to low</option>
          </select>
        </div>
      </div>

      {sortedList.map((p) => (
        <div
          key={p.id}
          className="flex justify-between items-center w-full container mx-auto p-4 rounded-lg shadow-md bg-white transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          <div className="flex items-center gap-4">
            <img
              src={p.image}
              alt={p.title}
              className="w-20 h-20 object-cover rounded-md"
            />
            <div>
              <h2 className="font-semibold text-lg">{p.title}</h2>
              <div className="flex items-center gap-1">
                <div className="flex gap-1 items-center">
                  <img className="w-[20px]" src={downloadImg} alt="" />
                  <h1>{p.downloads}</h1>
                </div>
                <div className="flex gap-1 items-center">
                  <img className="w-[20px]" src={ratingImg} alt="" />
                  <h1>{p.ratingAvg}</h1>
                </div>
                <div>
                  <p className="text-gray-400">{p.size} MB</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={() => handleRemove(p.id, p.title)}
              className="btn px-2"
            >
              Uninstall
            </button>
          </div>
        </div>
      ))}

      {install.length === 0 && (
        <p className="text-center font-bold text-2xl text-gray-500 mt-10">
          No installed apps found.
        </p>
      )}
    </div>
  );
};

export default Install;
