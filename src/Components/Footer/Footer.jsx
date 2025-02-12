import "./Footer.css";
// import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          {/* <img src={footer_logo} alt="" /> */}
          <p>
            I am a Full Stack developer from Brazil with 4 years of experience in
            digital solutions.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2023 Hélio Dourado. All rigths reserved.
        </p>
      </div>
      <div className="foot-bottom-right">
        <p>Term of Services</p>
        <p>Privacy Policy</p>
        <p>Connect with me</p>
      </div>
    </div>
  );
};

export default Footer;
