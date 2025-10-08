import React from "react";
import { NavLink } from "react-router";
import logoImg from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/app"}>Apps</NavLink>
            </li>
            <li>
              <NavLink to={"/install"}>Installation</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex gap-1 items-center">
          <div>
            <img className="w-[30px]" src={logoImg} />
          </div>
          <div>
            <NavLink to={"/"} className="font-bold text-xl">
              HERO.IO
            </NavLink>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/app"}>Apps</NavLink>
          </li>
          <li>
            <NavLink to={"/install"}>Installation</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/asik247"
          target="_blank" 
  rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 rounded-md  text-sm font-medium 
               bg-gradient-to-r from-[#632ee3] to-[#9f62f2] 
                 "
        >
          <FaGithub className="text-lg" />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
