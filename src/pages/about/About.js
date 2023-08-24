import "./about.css";
import image from "../../images/header_bg_1.jpg";
import Header from "../../components/Header";
import storyImg from "../../images/story.jpg";
import missionImg from "../../images/about3.jpg";
import SectionHead from "../../components/SectionHead";
import { LuHistory } from "react-icons/lu";
const About = () => {
  return (
    <div className="about">
      <Header title="about us" image={image}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        doloribus obcaecati dolores repudiandae ex explicabo praesentium ad
        maxime nostrum nihil.
      </Header>
      <section>
        <div className="container story__container">
          <div className="story__left">
            <img src={storyImg} alt="" />
          </div>
          <div className="story__right">
            <SectionHead icon={<LuHistory />} title="Our Story" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, voluptatum. Rerum, molestias harum iste doloribus,
              amet ratione laudantium numquam voluptatem nisi ipsam fugit sint
              nemo quasi incidunt illo totam deserunt!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, voluptatum. Rerum, molestias harum iste doloribus,
              amet ratione laudantium numquam voluptatem nisi ipsam fugit sint
              nemo quasi incidunt illo totam deserunt! amet ratione laudantium
              numquam voluptatem nisi ipsam fugit sint nemo quasi incidunt illo
              totam deserunt!
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container story__container">
          <div className="story__right ">
            <SectionHead icon={<LuHistory />} title="Our Mission" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, voluptatum. Rerum, molestias harum iste doloribus,
              amet ratione laudantium numquam voluptatem nisi ipsam fugit sint
              nemo quasi incidunt illo totam deserunt!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, voluptatum. Rerum, molestias harum iste doloribus,
              amet ratione laudantium numquam voluptatem nisi ipsam fugit sint
              nemo quasi incidunt illo totam deserunt! amet ratione laudantium
              numquam voluptatem nisi ipsam fugit sint nemo quasi incidunt illo
              totam deserunt!
            </p>
          </div>
          <div className="story__left">
            <img src={missionImg} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
