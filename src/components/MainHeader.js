import { Link } from "react-router-dom";
import "../pages/home/home.css";

const MainHeader = () => {
  return (
    <header id="menu">
      <div className="container header__container">
        <div className="right">
          <h3>#clinicalcenter.</h3>
          <h1>Integra Data Import Wizard</h1>
          <p className="Home_desc">
            Digitization of manually collected data by developing a custom
            application to store and aggregate data that is not currently
            captured within a clinical operations system.
          </p>
          <Link to="/login" className="btn header__btn">
            Go to Apps
          </Link>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
