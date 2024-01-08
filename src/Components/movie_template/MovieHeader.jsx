import React, { useEffect, useState } from "react";
import "./MovieHeader.css";
import AddIcon from "@mui/icons-material/Add";
import logo from "../../images/netflix-PhotoRoom.png-PhotoRoom.png";

const MovieHeader = ({ handlesearch,search,setSearch }) => {
  return (
    <>
      <div className="movieheader">
        <div className="overlay"></div>
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-11">
              <div className="d-flex align-items-center justify-content-between">
                <div className="logoimg">
                  <img src={logo} alt="" width="100%" />
                </div>
                <button>
                  <AddIcon className="fs-6" />
                  ADDMOVIE
                </button>
              </div>
              <h1 className="text">FIND YOUR MOVIE</h1>
              <div className="d-flex align-items-center justify-content-start gap-2">
                <input
                  className="input"
                  type="text"
                  placeholder="what do you want to search ?"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <button
                  type="button"
                  className="searchbtn"
                  onClick={() => {
                    handlesearch(search);
                  }}
                >
                  search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieHeader;
