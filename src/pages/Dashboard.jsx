import { useNavigate, Outlet } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
const Dashboard = () => {
  const navigate = useNavigate();

  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <Navbar expanded={expanded} expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home">Med Gaurd</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#" onClick={() => navigate("/")}>
              Home
            </Nav.Link>

            <Nav.Link
              href="#"
              onClick={() => navigate("/dashboard/medications")}
            >
              Medications
            </Nav.Link>
            <Nav.Link
              href="#"
              onClick={() => navigate("/dashboard/notifications")}
            >
              Notifications
            </Nav.Link>
            <Nav.Link href="#" onClick={() => navigate("/dashboard/profile")}>
              Profile
            </Nav.Link>
            <Nav.Link
              href="#"
              onClick={() => navigate("/dashboard/patients")}
            >
              Patient
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
