import axios from "axios";
import { useState } from "react";

export function SignupPage() {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState ([]);
  const [email, setEmail] = useState ([]);
  const [password, setPassword] = useState ([]);
  const [confirmPassword, setConfirmPassword] = useState ([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/";
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
      <div className="card shadow-lg p-4" style={{ width: "400px", zIndex: 1 }}>
        <h2
          className="text-center mb-4"
          style={{
            fontFamily: "'Bangers', cursive", // Matching the font style
            fontSize: "2.5rem",
            color: "#333",
          }}
        >
          Signup
        </h2>

        {/* Error Messages */}
        {errors.length > 0 && (
          <div className="alert alert-danger">
            {errors.map((error) => (
              <li key={error}>{error}</li>
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
              className="form-control"
              placeholder="Name"
              required
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
              className="form-control"
              placeholder="Email"
              required
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
              className="form-control"
              placeholder="Password"
              required
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
              className="form-control"
              placeholder="Confirm Password"
              required
            />
          </div>

          {/* Profile Picture Field */}
          <div className="mb-3">
            <input
              name="image_url"
              type="text"
              className="form-control"
              placeholder="Profile Picture URL"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Create Account
          </button>
        </form>

        <div className="text-center mt-3">
          <a href="/login" className="text-decoration-none">
            Already have an account? Login
          </a>
        </div>
      </div>
    </div>
  );
}
