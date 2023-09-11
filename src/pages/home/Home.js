import { useEffect } from "react";
import MainHeader from "../../components/MainHeader";
import "./home.css";

const Home = ({ setNavColor }) => {
  useEffect(() => {
    setNavColor("#fff");
  }, [setNavColor]);
  return (
    <>
      <MainHeader />
    </>
  );
};

export default Home;
