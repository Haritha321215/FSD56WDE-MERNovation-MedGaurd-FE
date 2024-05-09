import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import LoginWrapper from "./LoginWrapper";
import Register from "../pages/Register";
import Login from "../pages/Login";
import DashboardWrapper from "./DashboardWrapper";
import Dashboard from "../pages/Dashboard";
import { loader as userLoader } from "./DashboardWrapper";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    children: [
      {
        index: true,
        element: <LoginWrapper />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardWrapper />,
    loader: userLoader,
    children: [
      {
        path: "",
        element: <Dashboard />,
        children: [
          {
            path: "profile",
            element: <Profile />,
            loader: userLoader,
          },
        ],
      },
    ],
  },
]);

function Body() {
  return (
    <div className="col-lg-8 col-md-10 col-sm-12 mx-auto mt-3" style={{ minHeight: '73vh' }}>
      <center>
        <RouterProvider router={router} />
      </center>
    </div>
  );
}

export default Body;
