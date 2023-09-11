import { useEffect } from "react";
import FAQs from "../../components/FAQs";
import "./help.css";
const Help = ({ setNavColor }) => {
  useEffect(() => {
    setNavColor("#000");
  }, [setNavColor]);
  return <FAQs />;
};

export default Help;
