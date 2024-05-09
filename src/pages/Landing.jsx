import { Outlet } from "react-router-dom";
function Landing() {
 
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h3 className="text-primary">"A pill for every ill, but only if you remember to take it."</h3>
      <h3 className="text-success">"Your health is your wealth, so don't forget to invest in it daily – one pill at a time."</h3>
      <h3 className="text-warning">"Medicine only works if you remember to take it. Let our reminders be your guide."</h3>
      <h3 className="text-danger">"Don't let forgetfulness be the reason for your illness. Stay on track with your meds."</h3>
      
      <Outlet />
    </div>
  )
}
export default Landing;
