import React from "react";
import "./Works.css";
import covidimage from "../covidimage.jpg";
import contactbookimage from "../contactbook.png";
const Works = () => {
  const covidprojectlink = () => {
    window.location.href =
      "https://vikas1798.github.io/statewise-covidupdates/";
  };
  const contactbookapplink = () => {
    window.location.href = "https://github.com/Vikas1798/contact-book-app";
  };
  return (
    <>
      {/* heading code part */}
      <div className="page-title">
        <h4> My portfolio</h4>
        <h1> Recent Works</h1>
        <p> click on image to open</p>
      </div>
      <br /> <br />
      <div className="main">
        <div className="main-left">
          <p>Statewise covid Updates</p>
          <img
            src={covidimage}
            className="covidimage"
            onClick={covidprojectlink}
            alt="covidcaseupdates"
            height="120px"
            width="auto"
          />
        </div>
        <div className="main-right">
          <p>Contact book app</p>
          <img
            src={contactbookimage}
            className="covidimage"
            onClick={contactbookapplink}
            alt="covidcaseupdates"
            height="120px"
            width="auto"
          />
        </div>
      </div>
    </>
  );
};

export default Works;
