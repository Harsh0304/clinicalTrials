import { Link } from "react-router-dom";
import "../pages/home/home.css";
import hero from "../images/hero.png";

const MainHeader = () => {
  return (
    <header id="menu">
      <div className="container header__container">
        <div className="right">
          <h3>#100dayworkout.</h3>
          <h1>Healthy Living Spot.</h1>
          <p>
            Your inclusive wellness destination for men and women. Our
            compassionate team provides holistic care, empowering you to lead
            healthier, happier lives together.
          </p>
          <Link to="/plans" className="btn header__btn">
            get started
          </Link>
        </div>
        <div className="left">
          <div className="header__image-lg">
            <img src={hero} alt="hero" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
