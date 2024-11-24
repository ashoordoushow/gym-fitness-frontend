import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom"; // Import Navigate

export function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(false); // Track the redirection

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/password/reset", {
        email,
        reset_code: resetCode,
        new_password: newPassword,
        confirm_password: confirmPassword,
      })
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
    return <Navigate to="/login" />; // Redirect to login page after reset
  }

  return (
    <div
      id="reset-password"
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

      {/* Reset Password Card */}
      <div className="card shadow-lg p-4" style={{ width: "400px", zIndex: 1 }}>
        <h1
          className="text-center mb-4"
          style={{
            fontFamily: "'Bangers', cursive",
            fontSize: "2.5rem",
            color: "#333",
          }}
        >
          Reset Password
        </h1>

        {/* Success or Error Messages */}
        {message && <p className="alert alert-success">{message}</p>}
        {error && <p className="alert alert-danger">{error}</p>}

        {/* Reset Password Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="resetCode" className="form-label">
              Reset Code
            </label>
            <input
              type="text"
              id="resetCode"
              value={resetCode}
              onChange={(e) => setResetCode(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Reset Password
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
