import { useState } from "react";
import patientServices from "../services/patientServices";
import { useLoaderData } from "react-router-dom";
import Patient from "./Patient";

export const loader = async () => {
  const patients = await patientServices.getPatients();
  return { patients };
};
const PatientList = () => {
  const { patients } = useLoaderData();
  // console.log(patients.data.patients)
  const [pats, setPats] = useState(patients.data.patients);
  const [selectedPatient, setSelectedPatient] = useState();
  const handleAddPatient= async (newPatient) => {
    patientServices
      .addPatient(
        newPatient.name,
        newPatient.caregiver,
        newPatient.medication,
      )
      .then((response) => {
        setPats([...pats, response.data.patient]);
        alert("Added patient successful");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed adding patient");
      });
  };

  const handleEditPatient = async (updatePat) => {
    // console.log(updateMed)
    patientServices
      .updatePatient(
        updatePat.name,
        updatePat.dosage,
        updatePat.schedule,
        selectedPatient._id
      )
      .then((response) => {
        const updatedPatients = pats.map((pat) =>
          pat._id === pat._id
            ? response.data.medication
            : pat
        );
        setPats(updatedPatients);
        console.log(updatedPatients);
        alert("Edited patient successful");
        setSelectedPatient(null);
      })
      .catch((error) => {
        console.log(error);
        alert("Failed editing patient");
      });
  };
  const handleDeletePatient = async (patientId) => {
    try {
      await patientServices.deletePatient(patientId);
      alert("Deleted patient successful");
      setPats(pats.filter((pat) => pat._id !== patientId));
    } catch (error) {
      console.error("Error deleting patient", error);
    }
  };

  return (
    <div>
      <div>
        {selectedPatient ? (
          <Patient
          onAddPatient={handleEditPatient}
            selected={selectedPatient}
          />
        ) : (
          <Patient
          onAddPatient={handleAddPatient}
            selected={selectedPatient}
          />
        )}
      </div>
      <h2>Patients</h2>
      <div className="table-responsive m-2">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Patient Name</th>
              {/* <th scope="col">Medication</th> */}
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pats.length > 0 ? (
              pats.map((patient, index) => (
                <tr key={patient._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{patient.name}</td>
                  {/* <td>{patient.medication}</td> */}
                  <td>
                    <div className="d-flex">
                      <button
                        onClick={() => setSelectedPatient(patient)}
                        className="btn btn-warning btn-sm m-1"
                      >
                        edit
                      </button>
                      <button
                        onClick={() => handleDeletePatient(patient._id)}
                        className="btn btn-danger btn-sm m-1"
                      >
                        delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <li>No patients added yet.</li>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientList;
