import * as React from 'react'
import { connect } from "react-redux";
import Map from "../conteiners/Map";
import LeftSideBar from "../conteiners/LeftSideBar";
import RightSideBar from "../conteiners/RightSideBar";
import Cards from "../conteiners/Cards";

const Stitching: React.FC = props => {

  return (
    <>
      <div className="content">
        <LeftSideBar />
        <Map />
        <RightSideBar />
      </div>     
      <Cards /> 
    </>
  );
};

export default Stitching

