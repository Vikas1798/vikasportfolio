import "./Skills.css";
import CustomizedProgressBars from "../ProgressBars/ProgressBars";
import SchoolIcon from "@material-ui/icons/School";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <>
      {/* heading code part  */}
      <div className="page-title">
        <h4> Why Choose Me </h4>
        <h1> My expertise Area</h1>
      </div>
      {/* responsive  two containers left and right  */}
      <div class="flex-container">
        {/* progerss bar part  */}
        <div class="flex-item-left">
          <h5> FrontEnd</h5>
          <h2> Skills</h2>
          <CustomizedProgressBars />
        </div>
        {/* my education part */}
        <div class="flex-item-right">
          <div className="right-page-title">
            <h4> Qualification </h4>
            <h1> My Education</h1>
          </div>
          <br />
          <SchoolIcon
            //  className="All-links github"
            fontSize="large"
          />
          <h6> 2009 - 2014</h6>
          <p> Jawahar Navodaya Vidyalaya,shimogga.</p>
          <br />
          <SchoolIcon
            //  className="All-links github"
            fontSize="large"
          />
          <h6> 2014 - 2016</h6>
          <p>Kumadvathi Science and Commerce PU College,shikaripura.</p> <br />
          <SchoolIcon
            //  className="All-links github"
            fontSize="large"
          />
          <h6> 2016 - 2020</h6>
          <p> S J B Institute of Technology, Bangaluru.</p>
        </div>
        {/* contact link button,, redirected to contact page  */}
      </div>
      <li className="contact-link">
        <Link to="/contact">
          <button className="btn btn-primary">Let's Connect</button>
        </Link>
      </li>
    </>
  );
};

export default Skills;
