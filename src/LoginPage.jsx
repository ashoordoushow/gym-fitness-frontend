import axios from "axios";
import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa"; // For icons (react-icons library)

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function LoginPage() {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div
      id="login"
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

      {/* Login Card */}
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
        <h1
          className="text-center mb-4"
          style={{
            fontFamily: "'Bangers', cursive",
            fontSize: "2.5rem",
            color: "#fff", // Changed to white
            letterSpacing: "1px",
          }}
        >
          Login
        </h1>

        {/* Error Messages */}
        {errors.length > 0 && (
          <div className="alert alert-danger">
            {errors.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-3 position-relative">
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
            <FaEnvelope
              style={{
                position: "absolute",
                top: "50%",
                right: "15px",
                transform: "translateY(-50%)",
                color: "#888",
                fontSize: "18px",
              }}
            />
          </div>

          {/* Password Field */}
          <div className="mb-3 position-relative">
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
            <FaLock
              style={{
                position: "absolute",
                top: "50%",
                right: "15px",
                transform: "translateY(-50%)",
                color: "#888",
                fontSize: "18px",
              }}
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label
                className="form-check-label"
                htmlFor="rememberMe"
                style={{ color: "#fff" }} // Changed to white
              >
                Remember Me
              </label>
            </div>
            <a href="/forgot-password" className="text-decoration-none text-white">
              Forgot Password?
            </a>
          </div>

          {/* Button */}
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
            Login
          </button>
        </form>

        <div className="text-center mt-3">
          <a href="/signup" className="text-decoration-none text-white">
            New? Create an account
          </a>
        </div>
      </div>
    </div>
  );
}
