import React from "react";
import "./Loader.css";
import spinner from "./Spinner.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img className="loader-img" src={spinner} alt="Loading ..."></img>
    </div>
  );
};

export default Loader;
