import React from 'react';
import { NavLink } from 'react-router';
import appErrorImg from "../assets/App-Error.png";

const AppNotFound = () => {
    return (
         <div className="flex flex-col items-center justify-center h-[80vh] 
         text-center w-full">
            <img className='w-60' src={appErrorImg} alt="" />
      {/* <h1 className="text-5xl font-bold text-red-500 mb-4">App Not Found</h1> */}
      <p className="text-gray-600 mb-6">
        Sorry, this app you’re looking for doesn’t exist.
      </p>
      <NavLink
        to="/"
        // aktu proble ase apps oo details bck koe aber detials a detai..... rat 156am....
        className="btn"
      >
        Back to Home
      </NavLink>
    </div>
    );
};

export default AppNotFound;