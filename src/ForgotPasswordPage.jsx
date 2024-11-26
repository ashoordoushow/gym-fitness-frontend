import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom"; // Import Navigate

export function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(false); // Track the redirection

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/password/forgot", { email })
      .then((response) => {
        setMessage(response.data.message);
        setError("");
        setRedirect(true); // Trigger redirection after successful submission
      })
      .catch((error) => {
        setError(error.response?.data?.error || "An error occurred");
        setMessage("");
      });
  };

  if (redirect) {
    return <Navigate to="/verify-code" />; // Redirect to the Verify Code page
  }

  return (
    <div
      id="forgot-password"
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

      {/* Forgot Password Card */}
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
            color: "#fff", // Set to white for consistency
            letterSpacing: "1px",
          }}
        >
          Forgot Password
        </h1>

        {/* Success or Error Messages */}
        {message && <p className="alert alert-success">{message}</p>}
        {error && <p className="alert alert-danger">{error}</p>}

        {/* Forgot Password Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3 position-relative">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control pe-5"
              placeholder="Enter your email"
              required
              style={{
                borderRadius: "50px",
                border: "1px solid #ddd",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
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
            Send Code
          </button>
        </form>

        <div className="text-center mt-3">
          <a href="/login" className="text-decoration-none text-white">
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
}
