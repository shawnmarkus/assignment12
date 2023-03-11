import React from "react";
import Style from "../css/Header.module.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={`${Style.headerBar} mb-4 `}>
      <center>
        <h2 onClick={() => navigate("/")}>Video Stream</h2>
      </center>
    </div>
  );
};

export default Header;
