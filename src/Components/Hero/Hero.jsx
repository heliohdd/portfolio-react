/* eslint-disable react/no-unescaped-entities */
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
// import profile_img from "../../assets/profile_img.svg";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" height={500} />
      <h1>
        <span>I`m Helio Dourado,</span> frontend developer based in Brazil.
      </h1>
      <p>
        I'm a frontend developer from Sao Paulo, Brazil with 4 years of
        experience in developing digital solutions.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-connect">
          <AnchorLink className="" offset={50} href="#contact">
            Mom resume
          </AnchorLink>
        </div>
        {/* #<div className="hero-resume">My resume</div> */}
      </div>
    </div>
  );
};

export default Hero;
