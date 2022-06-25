import React from "react";
import Mohamed from "./../../assets/Mohamed.png";
import Navbar from "./../Navbar/Navbar";
import "./Home.scss";

export default function Home() {

  return (
    <div className="backContainer container">
      <Navbar />
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade h-75"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="d-flex carouselItem carousel-item active">
            <div className="mediaQuery1 py-4">
              <span style={{ color: "#F215B6" }}>Marking</span>
              <h2>25 Years of Business Growth</h2>
              <p>
                Link Development, the global technology solutions provider and
                an A15 company, unveiled today that it has recently marked its
                Silver Jubilee anniversary.
              </p>
              <button className="btn">Find Out More</button>
              <button
                className="btn"
                onClick={() => alert("Welcome To Mohamed Hashem")}
              >
                Play Demo
              </button>
            </div>
            <div className="mediaQuery2">
              <img src={Mohamed} alt="" />
            </div>
          </div>
          <div className="d-flex carouselItem carousel-item">
            <div className="mediaQuery1 py-4">
              <span style={{ color: "#A6E51C" }}>Trendy Inside-Out</span>
              <h2>Crafty Minds Reshaping Future</h2>
              <p>
                Link Development,Our people, processes, and technologies thrive
                on digital breakthroughs.
              </p>
              <button className="btn">Find Out More</button>
              <button
                className="btn"
                onClick={() => alert("Welcome To Mohamed Hashem")}
              >
                Play Demo
              </button>
            </div>
            <div className="mediaQuery2">
              <img src={Mohamed} alt="" />
            </div>
          </div>
          <div className="d-flex carouselItem carousel-item">
            <div className="mediaQuery1 py-4">
              <span style={{ color: "#FF7C16" }}>"Outsource"</span>
              <h2>Global IT Experts</h2>
              <p>
                On-shore, offshore, nearshore and hybrid models for dedicated
                development, product building and staff augmentation.
              </p>
              <button className="btn">Find Out More</button>
              <button
                className="btn"
                onClick={() => alert("Welcome To Mohamed Hashem")}
              >
                Play Demo
              </button>
            </div>
            <div className="mediaQuery2">
              <img src={Mohamed} alt="" />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
