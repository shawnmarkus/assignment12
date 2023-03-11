import React from "react";
import CardCollection from "./CardCollection";
import dataList from "../data/Videolist.json";

const HomePage = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <h3 sttyle={{ width: "fit-content" }}>HomePage</h3>
        <CardCollection list={dataList}></CardCollection>
      </div>
    </>
  );
};

export default HomePage;
