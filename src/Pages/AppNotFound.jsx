import React from 'react';
import { NavLink } from 'react-router';
import appErrorImg from "../assets/App-Error.png";

const AppNotFound = () => {
    return (
         <div className="flex flex-col items-center justify-center h-[80vh] 
         text-center w-full">
            <img className='w-60' src={appErrorImg} alt="" />
      <p className="text-gray-600 mb-6">
        Sorry, this app you’re looking for doesn’t exist.
      </p>
      <NavLink
        to="/"
        className="btn"
      >
        Back to Home
      </NavLink>
    </div>
    );
};

export default AppNotFound;