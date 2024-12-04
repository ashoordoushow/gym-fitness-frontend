import apiClient from "./config/axios";
import { useState } from "react";

export function SignupPage() {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    apiClient
      .post("/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/login";
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div
      id="signup"
      className="d-flex justify-content-center align-items-center vh-100 position-relative"
      style={{ backgroundColor: "#222", overflow: "hidden" }}
    >
      {/* Background Video */}
      <video autoPlay loop muted className="position-absolute w-100 h-100">
        <source
          src="/videos/vecteezy_animated-icon-of-a-weightlifting-athlete-with-a-glowing-neon_35888286.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div
        className="position-absolute w-100 h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      ></div>

      {/* Title Above the Card */}
      <h1
        className="text-center mb-4"
        style={{
          color: 'white',
          fontSize: '2.5rem',
          fontFamily: "'Bangers', cursive", // Matching the Signup title's font style
          zIndex: 1,
          position: 'absolute',  // Positioning it above the card
          top: '20px',           // Adjust as needed to position it above the card
          width: '100%',
        }}
      >
        New? Create an Account for FREE!
      </h1>

      {/* Signup Card */}
      <div
        className="card shadow-lg p-4 rounded-lg"
        style={{
          width: "400px",
          zIndex: 1,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
        }}
      >
        <h2
          className="text-center mb-4"
          style={{
            fontFamily: "'Bangers', cursive",
            fontSize: "2.5rem",
            color: "#fff", // Changed to white
            letterSpacing: "1px",
          }}
        >
          Signup
        </h2>

        {/* Error Messages */}
        {errors.length > 0 && (
          <div className="alert alert-danger">
            {errors.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}

        {/* Signup Form */}
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-3">
            <input
              name="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              maxLength={30}
              className="form-control pe-5"
              placeholder="Name"
              required
              style={{
                borderRadius: "50px",
                border: "1px solid #ddd",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>

          {/* Email Field */}
          <div className="mb-3">
            <input
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              maxLength={100}
              className="form-control pe-5"
              placeholder="Email"
              required
              style={{
                borderRadius: "50px",
                border: "1px solid #ddd",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>

          {/* Password Field */}
          <div className="mb-3">
            <input
              name="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              maxLength={50}
              className="form-control pe-5"
              placeholder="Password"
              required
              style={{
                borderRadius: "50px",
                border: "1px solid #ddd",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-3">
            <input
              name="password_confirmation"
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              maxLength={50}
              className="form-control pe-5"
              placeholder="Confirm Password"
              required
              style={{
                borderRadius: "50px",
                border: "1px solid #ddd",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>

          {/* Profile Picture Field */}
          <div className="mb-3">
            <input
              name="image_url"
              type="text"
              className="form-control pe-5"
              placeholder="Profile Picture URL"
              style={{
                borderRadius: "50px",
                border: "1px solid #ddd",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-100"
            style={{
              borderRadius: "50px",
              background: "linear-gradient(135deg, #007bff, #00d2ff)",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              fontSize: "1.1rem",
              transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
            }}
            onMouseOver={(e) => {
              e.target.style.background = "linear-gradient(135deg, #0056b3, #00c1d4)";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.target.style.background = "linear-gradient(135deg, #007bff, #00d2ff)";
              e.target.style.transform = "scale(1)";
            }}
          >
            Create Account
          </button>
        </form>

        <div className="text-center mt-3">
          <a href="/login" className="text-decoration-none text-white">
            Already have an account? Login
          </a>
        </div>
      </div>
    </div>
  );
}
