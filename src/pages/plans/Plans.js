import Card from "../../UI/Card";
import Header from "../../components/Header";
import { plans } from "../../data";
import image from "../../images/header_bg_4.jpg";

import "./plans.css";
const Plans = () => {
  return (
    <>
      <Header title="Our Plans" image={image}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        doloribus obcaecati dolores repudiandae ex explicabo praesentium ad
        maxime nostrum nihil.
      </Header>
      <section>
        <div className="container plans__container">
          {plans.map(({ id, name, price, desc, features }) => {
            return (
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1>
                <h2>/mo</h2>
                <h4>features</h4>
                {features.map(({ feature, available }, index) => {
                  return (
                    <p key={index} className={!available ? "disabled" : ""}>
                      {feature}
                    </p>
                  );
                })}
                <button className="btn">Choose Plans</button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Plans;
