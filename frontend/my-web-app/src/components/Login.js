// import React, { useState } from "react";
// import api from "../api";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const result = await api.login(email, password);
//     if (result) {
//       alert("Login successful!");
//       // Redirect or update UI accordingly
//     } else {
//       alert("Invalid email or password");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;










import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!user.email || !user.password) {
      setError("All fields are required!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/login", user);
      if (res.data.success) {
        alert("Login Successful!");
        navigate("/home");
      } else {
        setError(res.data.message);
      }
    } catch (err) {
      setError("Server error! Try again later.");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        </div>
        <div className="input-group">
          <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <span onClick={() => navigate("/")}>Sign Up</span></p>
    </div>
  );
};

export default Login;
