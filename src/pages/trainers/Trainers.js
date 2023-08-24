import Header from "../../components/Header";
import image from "../../images/header_bg_5.jpg";
import { trainers } from "../../data";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

import "./trainers.css";
import Trainer from "../../components/Trainer";
const Trainers = () => {
  return (
    <>
      <Header title="Our Trainers" image={image}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        doloribus obcaecati dolores repudiandae ex explicabo praesentium ad
        maxime nostrum nihil.
      </Header>
      <section>
        <div className="container trainers__container">
          {trainers.map(({ id, image, name, job, socials }) => {
            return (
              <Trainer
                key={id}
                image={image}
                name={name}
                job={job}
                socials={[
                  { icon: <BsInstagram />, link: socials[0] },
                  { icon: <BsFacebook />, link: socials[1] },
                  { icon: <BsTwitter />, link: socials[2] },
                  { icon: <BsLinkedin />, link: socials[3] },
                ]}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Trainers;
