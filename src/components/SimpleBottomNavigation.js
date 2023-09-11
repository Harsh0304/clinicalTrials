// import Box from "@mui/material/Box";
// import BottomNavigation from "@mui/material/BottomNavigation";
// import BottomNavigationAction from "@mui/material/BottomNavigationAction";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import { FaHands } from "react-icons/fa";
// import { BsFillRocketFill } from "react-icons/bs";
// import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SimpleBottomNavigation.css";

export default function SimpleBottomNavigation() {
  return (
    <div className="container bottom__nav-container">
      <ul className="bottom__nav-links">
        <li>
          <NavLink to="/outreach">Outreach</NavLink>
        </li>
        <li>
          <NavLink to="/startup">StartUp</NavLink>
        </li>
        <li>
          <NavLink to="/DOA">DOA</NavLink>
        </li>
        <li>
          <NavLink to="/acrual">Accrual</NavLink>
        </li>
      </ul>
    </div>
  );
}
