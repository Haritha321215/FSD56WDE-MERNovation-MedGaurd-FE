import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import LoginWrapper from "./LoginWrapper";
import Register from "../pages/Register";
import Login from "../pages/Login";
import DashboardWrapper from "./DashboardWrapper";
import Dashboard from "../pages/Dashboard";

import Profile from "../pages/Profile";
import { loader as userLoader } from "./DashboardWrapper";

import MedicationList from "../components/MedicationList";
import { loader as medicationLoader } from "./MedicationList";

import PatientList from "./PatientList";
import { loader as patientLoader } from "./PatientList";

import NotificationCenter from "../components/NotificationCenter";



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
            path: "medications",
            element: <MedicationList />,
            loader: medicationLoader,
          },
          {
            path: "notifications",
            element: <NotificationCenter />,
            loader: userLoader,
          },
          {
            path: "profile",
            element: <Profile />,
            loader: userLoader,
          },
          {
            path: "patients",
            element: <PatientList/>,
            loader: patientLoader,
          },
        ],
      },
    ],
  },
]);

function Body() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default Body;
