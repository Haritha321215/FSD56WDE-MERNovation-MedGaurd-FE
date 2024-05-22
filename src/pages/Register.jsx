import { Link, useNavigate } from "react-router-dom";
import userServices from "../services/userServices";

const Register = () => {

    const navigate = useNavigate();

    

    const handleRegister = (e) => {
        // prevent the default form submission
        e.preventDefault();

        // get the details from the form
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const location = e.target[3].value;
        // console.log(name, email, password, location);

        // send the details to the API
        userServices.register(name, email, password, location)
            .then(response => {
                // clear the form
                e.target.reset();

                alert('Registration successful');
                // if the registration is successful, redirect to the login page
                setTimeout(() => {
                    navigate('/login');
                }, 500);
            })
            .catch(error => {
                // if there is an error, log the error to the console
                alert('Registration failed');
            });
    }

    const styles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px',
        border: '1px solid #ccc',
        padding: '45px',
    }

    const itemStyle = {
        marginBottom: '10px',
    }

  return (
    <div className="d-flex flex-column align-items-center justify-content-between p-5">
        <form onSubmit={handleRegister}>
            <div className="mb-2">
                <input
                    type="text" 
                    placeholder="Name..."      
                />
              </div> 
              <div  className="mb-2">
                  <input 
                      type="email"
                      placeholder="Email..."
                  />
              </div>  
                <div  className="mb-2">
                    <input 
                        type="password"
                        placeholder="Password..."
                  />
              </div>
              <div  className="mb-2">
                  <input 
                      type="text"
                      placeholder="Location..."
                  />
              </div>
              <button  className="btn btn-outline-dark btn-sm" type="submit">Register</button>
              <p>Already have an account? <Link className="text-light" to='/login'>Login</Link></p>
        </form>      
    </div>
  )
}

export default Register;