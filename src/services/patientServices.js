import { instance, protectedInstance } from "./instance";

const patientServices = {
  getPatients: async () => {
    try {
      return protectedInstance.get("/patients");
    } catch (error) {
      throw new Error("Error fetching patients");
    }
  },
  addPatient: async (name, caregivername, medications) => {
    try {
      return protectedInstance.post("/patients/addPatient", {
        name: name,
        caregivername: caregivername,
        medications: medications,
      });
    } catch (error) {
      throw new Error("Error in adding patient");
    }
    // make a POST request to the register endpoint
  },
  updatePatient: async (name, patientId) => {
    try {
      return protectedInstance.put(`/patients/${patientId}`, {
        name: name,
      });
    } catch (error) {
      throw new Error("Error in update patients");
    }
  },
  deletePatient: async (patientId) => {
    try {
      return protectedInstance.delete(`/patients/${patientId}`);
    } catch (error) {
      throw new Error("Error in deleting patient");
    }
  },
};

export default patientServices;
