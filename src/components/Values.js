import Card from "../UI/Card";
import { values } from "../data";
import ValueImg from "../images/values1.jpg";
import SectionHead from "./SectionHead";
import { GiCutDiamond } from "react-icons/gi";

const Values = () => {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <img src={ValueImg} alt="" />
        </div>
        <div className="values__right">
          <SectionHead icon={<GiCutDiamond />} title="Values" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            quia animi tempora dicta rem. Perspiciatis.
          </p>
          <div className="values__wrapper">
            {values.map(({ id, icon, title, desc }) => {
              return (
                <Card className="values__value" key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
