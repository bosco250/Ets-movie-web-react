import React, { useState } from "react";
import Search from "../../assets/Vector.png";
import Notification from "../../assets/notif.png";
import "./Header.css";
import { FaBars} from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
const Header = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className=" w-full fixed top-0  z-50">
      <div className="header-container md:flex hidden">
        <ul>
          <li>Home</li>
          <li>
            <a href="#">Genre</a>
          </li>
          <li>
            <a href="#">Country</a>
          </li>
          <li>
            <input type="text" placeholder="Search Movies....." />
            <img className="search" src={Search} alt="search" />
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">Series</a>
          </li>
          <li>
            <a href="#">Animation</a>
          </li>
          <li>
            <a href="#">Login/SignUp</a>
          </li>
          <li>
            <a href="#">
              <img
                src={Notification}
                alt="Notification"
                className="notification"
              />
            </a>
          </li>
        </ul>
      </div>
      {/* mobile navbar */}
      <div
        className="flex md:hidden bg-black text-white fixed w-screen h-20 top-0 left-0 justify-between items-center
      z-10 "
      >
        <div className="flex-1 px-5 "> Movies</div>
        <div className="text-xl">
          <button
            onClick={() => setIsOpened(!isOpened)}
            className="
        w-10 h-10 font-bold  "
          >
            {isOpened ? (
              <IoCloseSharp className=" w-8 h-8 font-bold" />
            ) : (
              <FaBars className=" w-8 h-8 font-bold" />
            )}
          </button>
        </div>
      </div>
      <div
        className={` mobile-nav flex ${
          isOpened
            ? " md:hidden px-10  bg-slate-600 z-10 top-20 fixed w-full h-full"
            : "hidden"
        }`}
      >
      {isOpened&&(  <ul className=" md:hidden list-none text-xl flex flex-col gap-4 pt-4">
          <li>Home</li>
          <li>
            <a href="#">Genre</a>
          </li>
          <li>
            <a href="#">Country</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">Series</a>
          </li>
          <li>
            <a href="#">Animation</a>
          </li>
          <li>
            <a href="#">Login/SignUp</a>
          </li>
          <li>
            <a href="#">Notification</a>
          </li>
        </ul>)}
      </div>
    </div>
  );
};

export default Header;
