import { createBrowserRouter } from "react-router-dom";
import { WelcomePage } from "../pages/WelcomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
]);
