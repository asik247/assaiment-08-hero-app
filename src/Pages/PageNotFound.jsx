import React from 'react';
import { NavLink } from 'react-router';
import error404Img from "../assets/error-404.png";

const PageNotFound = () => {
    return (
         <div className="flex flex-col items-center justify-center h-[80vh] text-center w-full">
            <img className='w-60' src={error404Img} alt="" />
      <p className="text-gray-600 mb-6">
        Sorry the page are looking for might be removed renamed or is temporarily unavailable.
      </p>
      <NavLink
        to="/"
        className="btn bg-violet-600 text-white hover:bg-violet-700"
      >
        Back to Home
      </NavLink>
    </div>
    );
};

export default PageNotFound;