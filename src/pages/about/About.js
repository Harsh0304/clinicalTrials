import "./about.css";
import story1 from "../../images/story1.jpg";
import story2 from "../../images/story2.jpg";
import story3 from "../../images/story3.jpg";
import story4 from "../../images/story4.jpg";
import { useEffect } from "react";

const About = ({ setNavColor }) => {
  useEffect(() => {
    setNavColor("#000");
  }, [setNavColor]);
  return (
    <div className="about">
      <section>
        <div className="container story__container">
          <div className="story__left">
            <img src={story1} alt="" />
          </div>
          <div className="story__right">
            <h3>
              A Child's Leg is Saved with the Help of Integra Dermal
              Regeneration Template (IDRT)
            </h3>
            <p>
              Margo Casselman was only 8 years old in 2000 when a horrific car
              accident nearly led to the amputation of her leg. Her leg was
              broken in numerous places, and her skin had been stripped from the
              muscles and bones underneath. For most doctors who examined her,
              amputation of her injured leg seemed the only option. But Margo’s
              parents were determined to save her leg if possible.
            </p>
            <button className="btn">Learn More</button>
          </div>
        </div>
      </section>
      <section>
        <div className="container story__container">
          <div className="story__right ">
            <h3>Changing Lives. Building Careers.</h3>
            <p>
              Joining us is a chance for you to do important work that creates
              change and shapes the future of healthcare. Thinking differently
              is what we do best. To us, change equals opportunity.
            </p>
            <button className="btn">Learn More</button>
          </div>
          <div className="story__left">
            <img src={story2} alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className="container story__container">
          <div className="story__left">
            <img src={story3} alt="" />
          </div>
          <div className="story__right">
            <h3>Discover our Latest Innovations in Hydrocephalus Treatment</h3>
            <p>
              Idiopathic Normal Pressure Hydrocephalus (iNPH) symptoms may be
              reversible by CSF shunt therapy. Our programmable valves allow for
              optimized and customized treatment for each individual patient.
            </p>
            <button className="btn">Learn More</button>
          </div>
        </div>
      </section>
      <section>
        <div className="container story__container">
          <div className="story__right ">
            <h3>Explore the Breadth and Depth of our Tissue Products</h3>
            <p>
              Integra delivers broader and deeper solutions with an extensive
              soft tissue reconstruction portfolio. Discover our comprehensive
              solutions in tissue regeneration for acute and chronic complex
              wounds and burns.
            </p>
            <button className="btn">Learn More</button>
          </div>
          <div className="story__left">
            <img src={story4} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
