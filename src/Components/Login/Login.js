import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Firebase } from "../../firebase/config";
import RoundLoading from "../Loading/RoundLoading";
import "./Login.css";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loading, setLoading] = useState(false)
  const history = useHistory()
  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    Firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      history.push("/")
    }).catch((error) => {
      alert(error.message)
    })

  };
  return (<>
    {loading && <RoundLoading />}
    <div>
      <div className="loginParentDiv">
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>VIT Tradestation</p>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <br />
          <input
            className="input"
            type="email"
            placeholder="abc@xyz.com"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Password</label>
          <br />
          <input
            className="input"
            type="password"
            name="password"
            placeholder="super-secure-password-here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  </>
  );
}

export default Login;
