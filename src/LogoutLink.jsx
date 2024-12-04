import apiClient from "./config/axios";

export function LogoutLink({ className }) {
  const handleClick = (event) => {
    event.preventDefault(); // Prevent the default anchor link behavior
    delete apiClient.defaults.headers.common["Authorization"]; // Remove the Authorization header
    localStorage.removeItem("jwt"); // Clear the token from localStorage
    window.location.href = "/"; // Redirect to the homepage or another desired route
  };

  return (
    <a href="#" className={className} onClick={handleClick}>
      Logout
    </a>
  );
}
