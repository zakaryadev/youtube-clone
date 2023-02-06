import React from "react";
import { useSelector } from "react-redux";
import "./index.css";
const Preloader = () => {
  const { status } = useSelector((state) => state.video);

  return (
    status === "loading" && (
      <div className="preloader">
        <div className="preloader-content">
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
        </div>
      </div>
    )
  );
};

export default Preloader;
