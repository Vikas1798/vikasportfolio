import React from "react";
import "./Home.css";

import myimage from "../vikas.png";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const Home = () => {
  const Linkedinlink = () => {
    window.location.href = "https://www.linkedin.com/in/vikas-h-k-62215b204/";
  };
  const Instagramlink = () => {
    window.location.href = "https://www.instagram.com/vks_sketchbook/";
  };

  const Githublink = () => {
    window.location.href = "https://github.com/Vikas1798?tab=repositories";
  };

  const Whatsapplink = () => {
    window.location.href = "https://wa.me/7204185789";
  };

  const resume = () => {
    window.location.href =
      "https://drive.google.com/file/d/1j_pq4aY5QmcrqtuVKx2fJc_B8dmWYGJ2/view?usp=drivesdk";
  };

  return (
    <>
      <div className="Home-page">
        <div className="Developer-image">
          <img className="Developer-image" src={myimage} alt="Vikas" />
        </div>
        <br />
        <br />

        <div className="Developer-details">
          <p className="Developer-job">Hello</p>
          <h2 className="Developer-name"> I'm Vikas h k</h2>
          <p className="Developer-job"> React Developer</p>
          <br />

          <LinkedInIcon
            className="All-links linkedin"
            fontSize="large"
            onClick={Linkedinlink}
          />
          <InstagramIcon
            className="All-links instagram"
            fontSize="large"
            onClick={Instagramlink}
          />
          <GitHubIcon
            className="All-links github"
            fontSize="large"
            onClick={Githublink}
          />
          <WhatsAppIcon
            className="All-links whatsapp"
            fontSize="large"
            onClick={Whatsapplink}
          />

          <button className="Resume-button" onClick={resume}>
            Download Resume
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
