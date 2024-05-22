// import React from "react";
import { useState } from "react";
function MedicationForm({ onAddPatient, selected }) {
  const [newPatient, setNewPatient] = useState({ selected });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPatient({ ...newPatient, [name]: value });
  };

  const handleSubmit = (e) => {
    // prevent the default form submission
    e.preventDefault();

    console.log(newPatient);
    onAddPatient(newPatient);
    setNewPatient({ name: "", caregivername:"", medication:"" });
  };

  return (
    <div>
      <div className="col-sm-12 col-md-12 col-lg-md d-flex flex-column align-items-center justify-content-center m-1">
        <h4>Add Patient</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-1">
            <input
              type="text"
              name="name"
              placeholder="Patient Name"
              value={newPatient.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-1">
            <input
              type="text"
              name="caregivername"
              placeholder="caregiver name"
              value={newPatient.caregivername}
              onChange={handleChange}
            />
          </div>
          <div className="mb-1">
            <input
              type="text"
              name="medication"
              placeholder="medication"
              value={newPatient.medication}
              onChange={handleChange}
            />
          </div>
          {selected ? (
            <button
              className="mr-1 btn btn-outline-primary btn-sm"
              type="submit"
            >
              update Patient
            </button>
          ) : (
            <button
              className="mr-1 btn btn-outline-primary btn-sm"
              type="submit"
            >
              Add Patient
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default MedicationForm;
