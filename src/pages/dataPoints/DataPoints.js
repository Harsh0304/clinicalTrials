import React, { useEffect, useState } from "react";
import Outreach from "./Outreach";
import "./DataPoints.css";
import StartUp from "./StartUp";
import DOA from "./DOA";
import Accrual from "./Accrual";
import { Link } from "react-router-dom";

const DataPoints = ({ setNavColor }) => {
  const [selectedTab, setSelectedTab] = useState("outreach");
  useEffect(() => {
    setNavColor("#000");
  }, [setNavColor]);

  const handleTabChange = (newTab) => {
    setSelectedTab(newTab);
  };

  return (
    <div className="container bottom__nav-container">
      {selectedTab === "outreach" && <Outreach />}
      {selectedTab === "startup" && <StartUp />}
      {selectedTab === "DOA" && <DOA />}
      {selectedTab === "accrual" && <Accrual />}
      <ul className="bottom__nav-links">
        <li
          className={selectedTab === "outreach" ? "active" : ""}
          onClick={() => handleTabChange("outreach")}
        >
          <Link to="outreach">Outreach</Link>
        </li>
        <li
          className={selectedTab === "startup" ? "active" : ""}
          onClick={() => handleTabChange("startup")}
        >
          <Link to="startup"> StartUp</Link>
        </li>
        <li
          className={selectedTab === "DOA" ? "active" : ""}
          onClick={() => handleTabChange("DOA")}
        >
          <Link to="DOA">DOA</Link>
        </li>
        <li
          className={selectedTab === "accrual" ? "active" : ""}
          onClick={() => handleTabChange("accrual")}
        >
          <Link to="accrual">Accrual</Link>
        </li>
      </ul>
    </div>
  );
};

export default DataPoints;
