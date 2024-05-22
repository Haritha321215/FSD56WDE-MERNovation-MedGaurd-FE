// import React from "react";
import { useState } from "react";
function MedicationForm({ onAddMedication, selected }) {
  const [newMed, setNewMed] = useState({ selected });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMed({ ...newMed, [name]: value });
  };

  const handleSubmit = (e) => {
    // prevent the default form submission
    e.preventDefault();

    console.log(newMed);
    onAddMedication(newMed);
    setNewMed({ name: "", dosage: "", schedule: "", instructions: "" });
  };

  return (
    <div>
      <div className="col-sm-12 col-md-12 col-lg-md d-flex flex-column align-items-center justify-content-center m-1">
        <h4>Add Medicine</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-1">
            <input
              type="text"
              name="name"
              placeholder="Medicine Name"
              value={newMed.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-1">
            <input
              type="text"
              name="dosage"
              placeholder="Dosage"
              value={newMed.dosage}
              onChange={handleChange}
            />
          </div>
          <div className="mb-1">
            <input
              type="text"
              name="schedule"
              placeholder="Schedule"
              value={newMed.schedule}
              onChange={handleChange}
            />
          </div>
          <div className="mb-1">
            <input
              type="text"
              name="instructions"
              placeholder="Instructions"
              value={newMed.instructions}
              onChange={handleChange}
            />
          </div>
          {selected ? (
            <button
              className="mr-1 btn btn-outline-primary btn-sm"
              type="submit"
            >
              update Medication
            </button>
          ) : (
            <button
              className="mr-1 btn btn-outline-primary btn-sm"
              type="submit"
            >
              Add Medication
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default MedicationForm;
