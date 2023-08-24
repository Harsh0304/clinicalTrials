import "./gallery.css";
import Header from "../../components/Header";
import image from "../../images/header_bg_3.jpg";

const Gallery = () => {
  const galleryLenght = 15;
  const images = [];
  for (let i = 1; i <= galleryLenght; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }

  console.log(images);
  return (
    <>
      <Header title="Our Gallery" image={image}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        doloribus obcaecati dolores repudiandae ex explicabo praesentium ad
        maxime nostrum nihil.
      </Header>
      <section>
        <div className="container gallery__container">
          {images.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt="" />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
