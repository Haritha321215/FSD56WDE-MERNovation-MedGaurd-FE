import { useNavigate } from "react-router-dom";

function LoginWrapper() {
  const navigate = useNavigate();

  return (
    <div>
      <button className="btn btn-light btn-lg m-1" onClick={() => navigate("/register")}>Register</button>
      <button className="btn btn-light btn-lg m-1" onClick={() => navigate("/login")}>Login</button>
    </div>
  );
}
export default LoginWrapper;
