import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";
// import profile_img from "../../assets/profile_img.svg";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" height={500} />
      <h1>
        <span>I`m Alex Bennet,</span> frontend developer based in USA.
      </h1>
      <p>
        I`m a frontend developer from California, USA with 10 years of
        experience in multiple companies like Microsoft, Tesla and Apple.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
