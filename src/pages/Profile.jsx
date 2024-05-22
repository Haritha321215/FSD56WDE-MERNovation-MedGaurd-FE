import userServices from "../services/userServices";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
export async function loader() {
  // get the currently logged in user
  const user = await userServices.getCurrentUser();
  // return the user
  return { user };
}
function Profile() {
  const navigate = useNavigate();
  const { user } = useLoaderData();
  const [formData, setFormData] = useState(user.data.user);

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const location = e.target[1].value;

    console.log(name, location);
    // send the details to the API
    userServices
      .updateUser(name, location)
      .then((response) => {
        // clear the form
        e.target.reset();
        alert("Updated successfully");
        setFormData(response.data);
      
      })
      .catch((error) => {
        // if there is an error, log the error to the console
        alert("Admin only can update user profile");
      });
  };

  const handleDelete = () => {
    userServices.deleteUser().then((response) => {
      alert("Deleted successfully");
      setTimeout(() => {
        navigate("/login");
      }, 500);
    });
  };
  return (
    <div className="d-flex flex-column justify-content-center">
      <center>
      <form onSubmit={handleUpdate}>
        <div>
          <input className="mt-2" type="text" placeholder={formData.name} />
        </div>
        <div>
          <input  className="mt-2" type="text" placeholder={formData.location} />
        </div>
        <button className="btn btn-warning btn-sm mt-2 w-20" onClick={() => setSelectedCategory(category) }>Edit</button>
      </form>
      <button onClick={handleDelete} className="btn btn-danger btn-sm mt-2 w-20">
        Delete
      </button>
      </center>

      
    </div>
  );
}

export default Profile;
