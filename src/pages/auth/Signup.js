import "./auth.css";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { SiGnuprivacyguard } from "react-icons/si";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    //check password match
    if (password === confirmPassword) {
      onSignup({ username, email, password });

      //clear inputs
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } else {
      alert("password do not match. try again..");
    }
  };

  return (
    <div className="container signup__container">
      <h3>
        <SiGnuprivacyguard /> Signup
      </h3>
      <form onSubmit={handleSignup}>
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
            <AiOutlineMail />
          </span>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <div className="form__labal">
          <span>
            <RiLockPasswordFill />
          </span>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn__signup">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
