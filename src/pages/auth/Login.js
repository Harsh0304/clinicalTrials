import "./auth.css";
import { AiOutlineUser } from "react-icons/ai";
import { SiGnuprivacyguard } from "react-icons/si";
import { RiLockPasswordFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin, setNavColor }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setNavColor("#000");
  }, [setNavColor]);
  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };
  return (
    <div className="container signup__container">
      <h3>
        <SiGnuprivacyguard /> Login
      </h3>
      <form onSubmit={handleLogin}>
        <div className="form__labal">
          <span>
            <AiOutlineUser />
          </span>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form__labal">
          <span>
            <RiLockPasswordFill />
          </span>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn__signup">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
