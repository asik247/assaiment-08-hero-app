import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Navbar></Navbar>
            <div className='flex flex-1'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;







// import React, { useEffect, useState } from "react";
// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";
// import { Outlet, useNavigation } from "react-router";
// import logoImg from "../assets/logo.png";

// const MainLayout = () => {
//   const navigation = useNavigation();
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (navigation.state === "loading") {
//       setLoading(true);
//     } else {
//       const timeout = setTimeout(() => setLoading(false), 400);
//       return () => clearTimeout(timeout);
//     }
//   }, [navigation.state]);

//   if (loading) {
//     return (
//       <div className="flex flex-col justify-center items-center h-screen">
//         <img
//           src={logoImg}
//           alt="loading"
//           className="w-16 animate-spin mb-4"
//         />
//         <h1 className="text-3xl text-gray-400 animate-pulse">Loading..</h1>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <div className="flex-1">
//         <Outlet />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default MainLayout;
