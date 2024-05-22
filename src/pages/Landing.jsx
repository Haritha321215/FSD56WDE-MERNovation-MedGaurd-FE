import { Outlet } from "react-router-dom";
function Landing() {
  return (
    <div>
      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4">
              <img
                src="track.jpg"
                style={{height:"200px", width:"200px"}}
                alt="Feature 1"
                className="img-fluid mb-3"
              />
              <h3>Track Medication</h3>
              <p>Keep track of your medication schedules with ease.</p>
            </div>
            <div className="col-md-4">
              <img
                src="reminder.jpg"
                alt="Feature 2"
                style={{height:"200px", width:"200px"}}
                className="img-fluid mb-3"
              />
              <h3>Get Reminders</h3>
              <p>Receive timely reminders for your medication intake.</p>
            </div>
            <div className="col-md-4">
              <img
                src="alert.jpg"
                alt="Feature 3"
                style={{height:"200px", width:"200px"}}
                className="img-fluid mb-3"
              />
              <h3>Caregiver Alerts</h3>
              <p>
                Caregivers can monitor and get alerts on medication adherence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>About MedGuard</h2>
              <p>
                MedGuard is a comprehensive solution designed to help you manage
                your medications effectively. Whether you're a patient or a
                caregiver, our system ensures you never miss a dose.
              </p>
            </div>
            <div className="col-md-6">
              <img src="medguard.jpg" style={{height:"200px", width:"200px"}} alt="About MedGuard" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-5 text-center bg-primary text-white">
        <div className="container">
          <h2>Get Started with MedGuard Today</h2>
          <p className="lead">
            Sign up now and take the first step towards better medication
            management.
          </p>
          {/* <a href="#" className="btn btn-light btn-lg">
            Sign Up
          </a> */}
          <Outlet />
        </div>
      </section>
        
    </div>
  );
}
export default Landing;
