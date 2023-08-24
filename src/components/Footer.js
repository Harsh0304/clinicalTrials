import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-item">
          <div>
            <h2>About GymFusionHub</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
              possimus vitae veniam deleniti. Veniam possimus ea illo sunt velit
              cupiditate nobis nostrum.
            </p>
          </div>
          <div className="footer-portfolio">
            <h2>Portfolio</h2>
            <div className="footer-links">
              <Link to="/" className="footer-link">
                Home
              </Link>
              <Link to="#about" className="footer-link">
                About
              </Link>
              <Link to="#websites" className="footer-link">
                websites
              </Link>
              <Link to="#contact" className="footer-link">
                contact
              </Link>
            </div>
          </div>
          <div className="footer-contact">
            <h2>contact me</h2>
            <Link to="+91:8299310513">8299310513</Link>
            <Link to="mailto:mishraa03041997@gmail.com">
              mishraa03041997@gmail.com
            </Link>
          </div>
        </div>

        <h3 className="copyright">
          copyright@123 the website is developed by harsh mishra
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
