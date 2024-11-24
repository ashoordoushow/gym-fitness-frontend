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
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      ></div>

      {/* Forgot Password Card */}
      <div className="card shadow-lg p-4" style={{ width: "400px", zIndex: 1 }}>
        <h1
          className="text-center mb-4"
          style={{
            fontFamily: "'Bangers', cursive",
            fontSize: "2.5rem",
            color: "#333",
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
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Send Code
          </button>
        </form>

        <div className="text-center mt-3">
          <a href="/login" className="text-decoration-none">
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
}
