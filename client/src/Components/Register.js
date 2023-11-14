import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser, setId } = useContext(UserContext);

  async function register(e) {
    e.preventDefault();
    const { data } = await axios.post("/register", {
      username,
      password,
    });

    setUser(username);
    setId(data.id);
  }

  return (
    <div className="register-div">
      <form className="form" onSubmit={register}>
        <h1 style={{ textAlign: "center", color: "white" }}>Register</h1>
        <div className="input-div">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="register-btn">
          <button>Register</button>
        </div>
      </form>
    </div>
  );
}
