import React from "react";

const Header = ({ title, image, children }) => {
  return (
    <header className="header">
      <div className="header__container-wrapper">
        <div className="header__container-bg">
          <img src={image} alt="" />
        </div>
        <div className="header__container-content">
          <h2>{title}</h2>
          <p>{children}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
