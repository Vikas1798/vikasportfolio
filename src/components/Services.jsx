import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import WebIcon from "@material-ui/icons/Web";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import InstagramIcon from "@material-ui/icons/Instagram";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import CompareIcon from "@material-ui/icons/Compare";

const Services = () => {
  return (
    <>
      <div className="page-title">
        <h4> What i Offer </h4>
        <h1> My Services</h1>
      </div>
      <br />
      <div className="main-box">
        <div className="box1">
          <WebIcon className="serviceicon" />
          <h5>Web Design</h5>
          <h6>tech : html5, css3/Bootstrap../ </h6>
        </div>
        <div className="box2">
          <CompareIcon className="serviceicon" />
          <h5> Front-end Web Page</h5>
          <h6>tech : Html5, Css3, Javascript... </h6>
        </div>
      </div>
      <div className="main-box">
        <div className="box1">
          <AcUnitIcon className="serviceicon" />
          <h5> React UI</h5>
          <h6>
            tech : Javascript ES6, React.js,Bootstrap, Matreial-UI, Api...
          </h6>
        </div>
        <div className="box2">
          <ColorLensIcon className="serviceicon" />
          <h5> Potraite Sketch</h5>
          <h6> by..Cartridge A4/A5 sheets and Artline Pencils</h6>
          <InstagramIcon className="instaicon" />
          <h6> vks_sketchbook</h6>
        </div>
      </div>
      <br />
      <div className="footerr-box">
        <div className="footerr">
          <h1>Do you have a project in mind.</h1>
          <br />
          <p>
            If you have a project that you want to carry out, do not hesitate
            and tell me what it is, and what service i can offer you, contact me
            directly here.{" "}
          </p>
          <br />

          <Link to="/contact">
            <button className="btn btn-primary">Contact me</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Services;
