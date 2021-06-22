import React from "react";
import "./About.css";
import myimage from "../vikas.png";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import PersonPinCircleOutlinedIcon from "@material-ui/icons/PersonPinCircleOutlined";
import ImportantDevicesOutlinedIcon from "@material-ui/icons/ImportantDevicesOutlined";
import HeadsetMicOutlinedIcon from "@material-ui/icons/HeadsetMicOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

function About() {
  return (
    <>
      {/* heading code part */}
      <div className="page-title">
        <h4> My intro </h4>
        <h1> About Me</h1>
      </div>
      {/* left and right container */}
      <div className="containerr">
        {/* left container code */}
        <div className="left-item">
          {/* about me in paragraph */}
          <p>
            Hi, I'm a React Developer (Fresher) from Shimoga, Karnataka. I love
            to do coding, passionate about creating and developing web
            interfaces. I don't have job experience, I did certification course
            on React.JS, Javascript ES6 from Udemy. Thats why i choose this as
            my profession.{" "}
          </p>
          <br />
          {/* my profile pic */}
          <img src={myimage} alt="Vikas" />
        </div>
        {/* right container code */}
        <div className="right-item">
          <div>
            {/* first sub heading  in right container i.e information*/}
            <h5>Information</h5>
            <br />
            <p className="icons">
              <PersonOutlineOutlinedIcon className="icon" fontSize="large" />
              Vikas H K
            </p>
            <br />
            <p className="icons">
              <PhoneAndroidIcon fontSize="large" className="icon" /> 7204185789,
              9686362004
            </p>
            <br />
            <p className="icons">
              <MailOutlineOutlinedIcon fontSize="large" className="icon" />
              hkvikas1798 @gmail.com
            </p>
            <br />
            <p className="icons">
              <PersonPinCircleOutlinedIcon fontSize="large" className="icon" />
              Shikaripura, Shivamogga, Karnataka.
            </p>
            <br />
            <p className="icons">
              <LinkedInIcon fontSize="large" className="icon" />
              https://www.linkedin.com/in/vikas-h-k-62215b204/
            </p>
            <br />
            <p className="icons">
              <GitHubIcon fontSize="large" className="icon" />
              https://github.com/Vikas1798?tab=repositories
            </p>
            <br />
          </div>
          {/* second sub heading  in right container i.e experience and support*/}
          <div>
            <h5>Experience and support </h5>
            <br />
            <p className="icons">
              <ImportantDevicesOutlinedIcon className="icon" fontSize="large" />
              Fresher
            </p>
            <br />
            <p className="icons">
              <HeadsetMicOutlinedIcon className="icon" fontSize="large" />
              24/7
            </p>
            <br />
            <p className="icons">
              <WorkOutlineOutlinedIcon className="icon" fontSize="large" />
              Open to work
            </p>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
