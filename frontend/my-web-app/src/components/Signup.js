// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../api";

// const Signup = ({ setUser }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const user = await api.signup(email, password);
//     if (user) {
//       setUser(user);
//       navigate("/");
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;




import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Signup = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!user.name || !user.email || !user.password) {
      setError("All fields are required!");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(user.email)) {
      setError("Invalid email format!");
      return;
    }
    if (user.password.length < 6) {
      setError("Password must be at least 6 characters long!");
      return;
    }

    // Send data to backend
    try {
      const res = await axios.post("http://localhost:5000/signup", user);
      if (res.data.success) {
        alert("Signup Successful! Please Login.");
        navigate("/login");
      } else {
        setError(res.data.message);
      }
    } catch (err) {
      setError("Server error! Try again later.");
    }
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
        </div>
        <div className="input-group">
          <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        </div>
        <div className="input-group">
          <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <span onClick={() => navigate("/login")}>Login Here</span></p>
    </div>
  );
};

export default Signup;
