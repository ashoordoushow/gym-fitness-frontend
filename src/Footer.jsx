import { Link } from "react-router-dom";
import "./index.css";

export function Footer() {
  return (
    <footer className="custom-footer">
      <div className="container">
        <div className="row">
          {/* Copyright Section */}
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} All rights are reserved.
            </p>
          </div>

          {/* Resources Section */}
          <div className="col-md-4 text-center">
            <h5 className="mb-3" style={{ fontSize: "1.2rem" }}>
              Resources
            </h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/terms-of-service" className="text-light text-decoration-none">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-light text-decoration-none">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="col-md-4 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light mx-2"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light mx-2"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light mx-2"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light mx-2"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light mx-2"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light mx-2"
              >
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
