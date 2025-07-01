import React, { useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChnge = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullname, email, password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      alert("password should be same ");
      return;
    } else {
      console.log(formData);
      navigate("/login");
      localStorage.setItem("name", formData.fullname);
      localStorage.setItem("password", formData.password);
    }
  };

  return (
    <div className="auth-section">
      <div className="auth-container">
        <h2>
          Sign Up <span style={{ color: "hotpink" }}>Flower Shop</span>
        </h2>
        <br />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            name="fullname"
            onChange={handleChnge}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChnge}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChnge}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={handleChnge}
          />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
