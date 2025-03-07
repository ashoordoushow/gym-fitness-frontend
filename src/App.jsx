import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { ExercisesPage } from "./ExercisesPage";
import { Footer } from "./Footer";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { LogoutLink } from "./LogoutLink";
import { RoutinesNew } from "./RoutinesNew";
import { ForgotPasswordPage } from "./ForgotPasswordPage";  // Import the ForgotPasswordPage
import { VerifyCodePage } from "./VerifyCodePage";  // Import the VerifyCodePage
import { ResetPasswordPage } from "./ResetPasswordPage";  // Import the ResetPasswordPage
import { TermsOfServicePage } from "./TermsOfServicePage";  // Import the TermsOfServicePage
import { PrivacyPolicyPage } from "./PrivacyPolicyPage"; // Import the PrivacyPolicyPage
import apiClient from "./config/axios";
import '@fortawesome/fontawesome-free/css/all.min.css';

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <ExercisesPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/logout",
        element: <LogoutLink />,
      },
      {
        path: "/routines-new",
        element: <RoutinesNew />,
        loader: () => apiClient.get("/routines.json").then((response) => response.data),
      },
      {
        path: "/forgot-password",
        element: <ForgotPasswordPage />,  // Route for Forgot Password
      },
      {
        path: "/verify-code",
        element: <VerifyCodePage />,  // Route for Verify Code
      },
      {
        path: "/reset-password",
        element: <ResetPasswordPage />,  // Route for Reset Password
      },
      {
        path: "/terms-of-service",  // Route for Terms of Service page
        element: <TermsOfServicePage />,
      },
      {
        path: "/privacy",  // Route for Privacy Policy page
        element: <PrivacyPolicyPage />,  // Add Privacy Policy Page route here
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

