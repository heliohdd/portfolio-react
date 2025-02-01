import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
// import profile_img from "../../assets/profile_img.png";
// import profile_img from "../../assets/profile_img.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        {/* <div className="about-left">
          <img src={profile_img} alt="" height={500} />
        </div> */}
        <div className="about-rigth">
          <div className="about-para">
            <p>
              I am an experienced Frontend developer with over four years of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>Next.js</p>
              <hr style={{ width: "80%" }} />
            </div>

            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "90%" }} />
            </div>

            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "70%" }} />
            </div>

            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>

            <div className="about-skill">
              <p>React Query | Redux Toolkit</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Tailwindcss | Styled components</p>
              <hr style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        {/* <div className="about-achievement">
          <h1>4</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div> */}
        {/* <hr /> */}
        {/* #<div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div> */}
        {/* <hr /> */}
        {/* #<div className="about-achievement">
          <h1>5+</h1>
          <p>HAPPY CLIENTS</p>
        </div> */}
      </div>
    </div>
  );
};

export default About;
