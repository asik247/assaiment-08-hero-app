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
  const { title, image, companyName, downloads, reviews, ratingAvg, ratings } =
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

      <div className="md:flex justify-between items-center w-full md:h-[60vh] h-[70vh]">
        <figure>
          <img src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="border-b-2 border-gray-300 mb-5">{companyName}</p>
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
          <div className=" w-50 mt-4">
            {/* <button
              onClick={handleInstall}
              className={`btn ${installed ? "bg-gray-400 cursor-not-allowed" : ""}`}
              disabled={installed} 
            >
              {installed ? "Installed" : "Install Now"}
            </button> */}
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
            This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest. <br /><br />

A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere. <br /><br />

For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.
        </p>
      </div>
    </div>
  );
};

export default Details;
