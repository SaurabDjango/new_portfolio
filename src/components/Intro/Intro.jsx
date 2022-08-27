import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
//import boy from "../../img/boy.png";
import saurabh1 from "../../img/saurabh1.png"
//import saurabh2 from "../../img/saurabh2.png"

import glassesimoji from "../../img/glassesimoji.png";
//import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Saurabh Dantani</span>
          <span>
            <h1>
            I am currently studying in 7th semester. 
            I am Looking for internship with job opportunity,
            I am beginner in react js as frontend and Django
            as a backend and also try to connect both technology using DJANGO REST FRAMEWORK.
            I also like flutter
            </h1>
            
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        
        <div className="i-name">
        <span style={{ color: darkMode ? "white" : "" }}>
          <h4>Contact Me: 7359747893</h4>
          
          <br/>
          <h4>Gmail: saurabhdantani09@mail.com</h4>
          
        </span>
        </div>

        {/* social icons */}
        
        <div className="i-icons">
          <a href="#"><img src={Github} alt="" />   </a>
          <a href="#"><img src={LinkedIn} alt="" /> </a>
          <a href="#"><img src={Instagram} alt="" /></a>
          
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={saurabh1}  alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
            
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
