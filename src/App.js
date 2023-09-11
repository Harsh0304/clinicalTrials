import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useNavigate } from "react-router-dom";

import About from "./pages/about/About";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import Login from "./pages/auth/Login";
import Programs from "./pages/programs/Programs";
import DataPoints from "./pages/dataPoints/DataPoints";
import Outreach from "./pages/dataPoints/Outreach";
import StartUp from "./pages/dataPoints/StartUp";
import DOA from "./pages/dataPoints/DOA";
import Accrual from "./pages/dataPoints/Accrual";
import Help from "./pages/help/Help";

const App = () => {
  const [users, setUsers] = useState([
    { username: "harsh", password: "harsh" },
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [navColor, setNavColor] = useState("#fff");

  const navigate = useNavigate();

  const handleLogin = (username, password) => {
    const user = users?.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(username);
      navigate("/programs");
    } else {
      alert("login faild. invalid credentials.");
    }
  };

  return (
    <>
      <Navbar
        navColor={navColor}
        setNavColor={setNavColor}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        setIsLoggedIn={setIsLoggedIn}
      />
      <Routes>
        <Route path="/" element={<Home setNavColor={setNavColor} />} />
        <Route path="about" element={<About setNavColor={setNavColor} />} />

        <Route
          path="programs"
          element={
            isLoggedIn ? (
              <Programs currentUser={currentUser} />
            ) : (
              <Login onLogin={handleLogin} setNavColor={setNavColor} />
            )
          }
        />
        <Route path="help" element={<Help setNavColor={setNavColor} />} />
        <Route
          path="login"
          element={<Login onLogin={handleLogin} setNavColor={setNavColor} />}
        />
        <Route
          path="/data-points"
          element={<DataPoints setNavColor={setNavColor} />}
        >
          <Route path="outreach" element={<Outreach />} />
          <Route path="startup" element={<StartUp />} />
          <Route path="DOA" element={<DOA />} />
          <Route path="accrual" element={<Accrual />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
