import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import axios from 'axios'
import { Header } from "./Header";
import { ExercisesPage } from "./ExercisesPage";
import { Footer } from "./Footer";
import { SignupPage } from "./SignupPage"
import { LoginPage } from "./LoginPage";
import { LogoutLink } from "./LogoutLink";
import { RoutinesNew } from "./RoutinesNew";
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
        loader: () => axios.get("http://localhost:3000/routines.json").then(response => response.data)
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;


