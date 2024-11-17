import { Link } from "react-router-dom";
import './index.css';

export function Header() {
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
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-decoration-none" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-decoration-none" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-decoration-none" to="/signup">Signup</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-dark" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}


{/* <header>
      <nav>
        <Link to="/">Home</Link> | <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link> | <Link to="/logout">Logout</Link>
      </nav>
    </header> */}