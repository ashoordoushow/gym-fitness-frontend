import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './index.css';
import { LogoutLink } from './LogoutLink';

export function Header() {
  const [currentUser, setCurrentUser] = useState({});

  // Fetch current user from backend
  const getUserData = () => {
    console.log('Getting user data...');
    axios.get("/users/current.json")
      .then(response => {
        console.log(response.data);
        setCurrentUser(response.data);
      })
      .catch(() => {
        setCurrentUser(null); // Set to null if not logged in
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  // Determine the authentication links and user display
  let authenticationLinks;
  let userDisplay;
  let myRoutineLink;

  if (localStorage.jwt === undefined) {
    // Logged out
    authenticationLinks = (
      <>
        <li className="nav-item">
          <Link className="nav-link text-decoration-none" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-decoration-none" to="/signup">Signup</Link>
        </li>
      </>
    );
    userDisplay = null;
    myRoutineLink = null; // Hide "My Routine" when not logged in
  } else {
    // Logged in
    authenticationLinks = (
      <li className="nav-item">
        <LogoutLink className="nav-link text-decoration-none" />
      </li>
    );
    userDisplay = (
      <div className="navbar-text d-flex align-items-center">
        <img
          src={currentUser?.profilePic || "/default-profile.png"} // Default profile picture if none provided
          alt="Profile"
          style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
        />
        <span>Welcome, {currentUser?.name || "User"}!</span>
      </div>
    );
    myRoutineLink = (
      <li className="nav-item">
        <Link className="nav-link text-decoration-none" to="/routines-new">My Routine</Link>
      </li>
    ); // Show "My Routine" when logged in
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary">
      <div className="container-fluid">
        <Link className="navbar-brand text-black fw-bold" to="/">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgYHqWA1exOY9nBRTsUR0pLW6rmYQ2bF4kWw&s" 
            alt="Logo" 
            style={{ width: '40px', height: '40px', marginRight: '10px' }} 
          />
          <span style={{ fontFamily: 'Bangers, sans-serif' }}>BUILT TO CONQUER</span> 
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-decoration-none" to="/">Home</Link>
            </li>
            {myRoutineLink}
            {authenticationLinks}
          </ul>
          {userDisplay}
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-dark" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}
