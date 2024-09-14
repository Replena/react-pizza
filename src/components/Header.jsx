import React from "react";
import { useLocation } from "react-router-dom";
import teknoLogo from "../assets/tekno.svg";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/home";
  const isSuccess = location.pathname === "/success";

  return (
    <div
      className={`order-header ${isHome || isSuccess ? "no-bg" : "bg-red"} ${
        isHome || isSuccess ? "absolute-position" : "static-position"
      }`}
    >
      <img src={teknoLogo} id="logo" alt="Tekno logo" className="header-img" />
    </div>
  );
};

export default Header;
