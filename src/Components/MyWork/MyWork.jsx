import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data1 from "../../assets/wild-oasis-site.png";
import mywork_data2 from "../../assets/the-wild-oasis.png";
import mywork_data3 from "../../assets/use_pop_corn.png";
import mywork_data4 from "../../assets/pizza_react.png";
import mywork_data5 from "../../assets/world_wise.png";

const MyWork = () => {
  return (
    <div id="mywork" className="mywork">
      <div className="mywork-title">
        <h1>My latest works</h1>
        <img src={theme_pattern} alt="" />
      </div>
      {/* <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div> */}


      <div className="mywork-container">
        <div className="p-2">
          <a
            href="https://heliohdd-wild-oasis-website.vercel.app"
            target="_blank"
          >
            <img src={mywork_data1} alt="The Wild Oasis Website" />
          </a>
          <div className="flex justify-center text-xl py-2 gap-2">
            <a className="bg-slate-400  py-2 px-3 font-semibold " href="https://github.com/heliohdd/the-wild-oasis-website?tab=readme-ov-file#readme" target="_blank"><span>ReadMe</span></a>
            <a className="bg-slate-400  py-2 px-3 font-semibold" href="https://github.com/heliohdd/the-wild-oasis-website" target="_blank"><span>Git Hub</span></a>
          </div>
        </div>
      </div>

      <div className="mywork-container">
        <div className="p-2">
          <a
            href="https://heliohdd-the-wild-oasis-ci.netlify.app"
            target="_blank"
          >
            <img src={mywork_data2} alt="The Wild Oasis" />
          </a>
          <div className="flex justify-center text-xl py-2 gap-2">
            <a className="bg-slate-400  py-2 px-3 font-semibold" href="https://github.com/heliohdd/the-wild-oasis?tab=readme-ov-file#readme" target="_blank"><span>ReadMe</span></a>
            <a className="bg-slate-400  py-2 px-3 font-semibold" href="https://github.com/heliohdd/the-wild-oasis" target="_blank"><span>Git Hub</span></a>
          </div>
        </div>
      </div>

      <div className="mywork-container">
        <div className="p-2">
          <a href="https://worldwise-jonas.netlify.app" target="_blank">
            <img src={mywork_data5} alt="World Wise" />
          </a>
          <div className="flex justify-center text-xl py-2 gap-2">
            <a className="bg-slate-400  py-2 px-3 font-semibold" href="https://github.com/heliohdd/worldwise-app?tab=readme-ov-file#readme" target="_blank"><span>ReadMe</span></a>
            <a className="bg-slate-400  py-2 px-3 font-semibold" href="https://github.com/heliohdd/worldwise-app" target="_blank"><span>Git Hub</span></a>
          </div>
        </div>
      </div>

      <div className="mywork-container">
        <div className="p-2">
          <a href="https://heliohdd-fast-react-pizza.vercel.app/" target="_blank">
            <img src={mywork_data4} alt="" />
          </a>
          <div className="flex justify-center text-xl py-2 gap-2">
            <a className="bg-slate-400  py-2 px-3 font-semibold" href="https://github.com/heliohdd/fast-react-pizza?tab=readme-ov-file#readme" target="_blank"><span>ReadMe</span></a>
            <a className="bg-slate-400  py-2 px-3 font-semibold" href="https://github.com/heliohdd/fast-react-pizza" target="_blank"><span>Git Hub</span></a>
          </div>
        </div>
      </div>

      <div className="mywork-container">
        <div className="p-2">
          <a href="https://usepopcorn-but-better.netlify.app/" target="_blank">
            <img src={mywork_data3} alt="" />
          </a>
          <div className="flex justify-center text-xl py-2 gap-2">
            <a className="bg-slate-400  py-2 px-3 font-semibold" href="https://github.com/heliohdd/ultimate-react-next-redux" target="_blank"><span>ReadMe</span></a>
            <a className="bg-slate-400  py-2 px-3 font-semibold" href="https://github.com/heliohdd/ultimate-react-next-redux" target="_blank"><span>Git Hub</span></a>
          </div>
        </div>
      </div>

      

      

      {/* <div className="mywork-showmore">
        <img src={arrow_icon} alt="" />
      </div> */}
    </div>
  );
};

export default MyWork;
