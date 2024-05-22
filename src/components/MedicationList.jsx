import { useState } from "react";
import medicationServices from "../services/medicationServices";
import { useLoaderData } from "react-router-dom";
import MedicationForm from "./MedicationForm";

export const loader = async () => {
  const medications = await medicationServices.getMedications();
  return { medications };
};
const MedicationList = () => {
  const { medications } = useLoaderData();
  // console.log(medications.data.medications)
  const [medicines, setMedicines] = useState(medications.data.medications);
  const [selectedMedicine, setSelectedMedicine] = useState();
  const handleAddMedication = async (newMed) => {
    medicationServices
      .addMedication(
        newMed.name,
        newMed.dosage,
        newMed.schedule,
        newMed.instructions
      )
      .then((response) => {
        setMedicines([...medicines, response.data.medication]);
        alert("Added medication successful");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed adding medication");
      });
  };

  const handleEditMedication = async (updateMed) => {
    // console.log(updateMed)
    medicationServices
      .updateMedication(
        updateMed.name,
        updateMed.dosage,
        updateMed.schedule,
        updateMed.instructions,
        selectedMedicine._id
      )
      .then((response) => {
        const updatedMedicines = medicines.map((medicine) =>
          medicine._id === selectedMedicine._id
            ? response.data.medication
            : medicine
        );
        setMedicines(updatedMedicines);
        console.log(updatedMedicines);
        alert("Edited medicine successful");
        setSelectedMedicine(null);
      })
      .catch((error) => {
        console.log(error);
        alert("Failed editing medicine");
      });
  };
  const handleDeleteMedication = async (medicineId) => {
    try {
      await medicationServices.deleteMedication(medicineId);
      alert("Deleted medication successful");
      setMedicines(medicines.filter((med) => med._id !== medicineId));
    } catch (error) {
      console.error("Error deleting medication", error);
    }
  };

  return (
    <div>
      <div>
        {selectedMedicine ? (
          <MedicationForm
            onAddMedication={handleEditMedication}
            selected={selectedMedicine}
          />
        ) : (
          <MedicationForm
            onAddMedication={handleAddMedication}
            selected={selectedMedicine}
          />
        )}
      </div>
      <h2>Your Medications</h2>
      <div className="table-responsive m-2">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Medicinename</th>
              <th scope="col">Dosage</th>
              <th scope="col">Schedule</th>
              <th scope="col">Instructions</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {medicines.length > 0 ? (
              medicines.map((medicine, index) => (
                <tr key={medicine._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{medicine.name}</td>
                  <td>{medicine.dosage}</td>
                  <td>{medicine.schedule}</td>
                  <td>{medicine.instructions}</td>
                  <td>
                    <div className="d-flex">
                      <button
                        onClick={() => setSelectedMedicine(medicine)}
                        className="btn btn-warning btn-sm m-1"
                      >
                        edit
                      </button>
                      <button
                        onClick={() => handleDeleteMedication(medicine._id)}
                        className="btn btn-danger btn-sm m-1"
                      >
                        delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <li>No medications added yet.</li>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MedicationList;
