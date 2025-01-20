import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data1 from "../../assets/telas_pizza_react.png";
import mywork_data2 from "../../assets/the-wild-oasis.png";
import mywork_data3 from "../../assets/world_wise.png";
import mywork_data4 from "../../assets/use_pop_corn.png";
// import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div id="mywork" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      {/* <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div> */}

      {/* Trecho a ser preservado */}

      <div className="mywork-container">
        <a href="https://fast-react-pizza-six-xi.vercel.app/">
          {/* <a href="https://github.com/heliohdd/fast-react-pizza"> */}
          <img src={mywork_data1} alt="" />
        </a>
      </div>
      <div className="mywork-container">
        <a href="https://the-wild-oasis-rouge-five.vercel.app/">
          {/* <a href="https://github.com/heliohdd/fast-react-pizza"> */}
          <img src={mywork_data2} alt="" />
        </a>
      </div>
      <div className="mywork-container">
        <a href="https://worldwise-app-black.vercel.app//">
          {/* <a href="https://github.com/heliohdd/fast-react-pizza"> */}
          <img src={mywork_data3} alt="" />
        </a>
      </div>
      <div className="mywork-container">
        <a href="https://usepopcorn-but-better.netlify.app/">
          {/* <a href="https://github.com/heliohdd/fast-react-pizza"> */}
          <img src={mywork_data4} alt="" />
        </a>
      </div>
      {/* <div className="mywork-showmore">
        <img src={arrow_icon} alt="" />
      </div> */}
    </div>
  );
};

export default MyWork;
