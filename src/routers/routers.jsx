import { createBrowserRouter } from "react-router";
import { Home } from "../pages/home";
import { Login } from "../auth/login";
import { Registration } from "../auth/registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/registration",
    element: <Registration />
  },
  {
    path: "/home/:id",
    element: <Home />
  }
]);