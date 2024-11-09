import React, { useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");

  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className=" flex justify-between bg-pink-100">
      <div className="logo-container">
        <img className=" w-24" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className=" flex p-4 m-4">
          <li className=" px-4">
            Online Status : {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className=" px-4">
            <Link to="/">Home</Link>
          </li>
          <li className=" px-4">
            <Link to="/About">About Us</Link>
          </li>
          <li className=" px-4">
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li className=" px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className=" px-4 font-bold text-xl">
          <Link to="/cart">Cart - ({cartItems.length}items)</Link>
           </li>
          <li className=" px-4">
            <button
              className="login"
              onClick={() => {
                btnNameReact === "login"
                  ? setBtnNameReact("logout")
                  : setBtnNameReact("login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
