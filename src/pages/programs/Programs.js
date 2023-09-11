import React from "react";
import Program from "../../components/Program";

const Programs = ({ isLoggedIn, currentUser }) => {
  return <Program currentUser={currentUser} />;
};

export default Programs;
