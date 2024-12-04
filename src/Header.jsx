import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import apiClient from "./config/axios";
import './index.css'; // Custom CSS
import { LogoutLink } from './LogoutLink';

export function Header() {
  const [currentUser, setCurrentUser] = useState({});
  const location = useLocation(); 

  // Fetch current user from backend
  const getUserData = () => {
    apiClient.get("/users/current")
      .then(response => {
        setCurrentUser(response.data);
      })
      .catch(() => {
        setCurrentUser(null); 
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  let authenticationLinks;
  let userDisplay;
  let myRoutineLink;

  if (localStorage.jwt === undefined) {
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
    myRoutineLink = null; 
  } else {
    authenticationLinks = (
      <li className="nav-item">
        <LogoutLink className="nav-link text-decoration-none" />
      </li>
    );
    userDisplay = (
      <div className="navbar-text d-flex align-items-center" style={{ color: '#fff', fontSize: '1.1rem' }}>
        <img
          src={currentUser?.profilePic || "/default-profile.png"}
          alt="Profile"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            marginRight: '10px',
            transition: 'transform 0.3s ease', // Smooth transition for hover effect
          }}
          className="profile-img"
        />
        <span className="ms-2">Welcome, <span style={{ fontWeight: 'bold' }}>{currentUser?.name || "User"}</span>!</span>
      </div>
    );
    myRoutineLink = (
      <li className="nav-item">
        <Link className="nav-link text-decoration-none" to="/routines-new">My Routine</Link>
      </li>
    ); 
  }

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand text-light fw-bold" to="/">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgYHqWA1exOY9nBRTsUR0pLW6rmYQ2bF4kWw&s" 
            alt="Logo" 
            className="navbar-logo"
          />
          <span className="brand-text">BUILT TO CONQUER</span> 
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
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_the_Assyrians_%28gold_and_blue_Assur%29.svg/2560px-Flag_of_the_Assyrians_%28gold_and_blue_Assur%29.svg.png" 
            alt="Assyrian Flag" 
            className="assyria-flag"
          />
        </div>
      </div>
    </nav>
  );
}
