import { instance, protectedInstance } from "./instance";

const medicationServices = {
  getMedications: async () => {
    try {
      return protectedInstance.get("/medications");
    } catch (error) {
      throw new Error("Error fetching categories");
    }
  },
  addMedication: async (name, dosage,schedule,instructions) => {
    try {
      return protectedInstance.post("/medications/addMedication", {
        name: name,
        dosage: dosage,
        schedule: schedule,
        instructions: instructions,
      });
    } catch (error) {
      throw new Error("Error in adding categories");
    }
    // make a POST request to the register endpoint
  },
  updateMedication: async (name, dosage,schedule,instructions,medicationId) => {
    try {
      return protectedInstance.put(`/medications/${medicationId}`, {
        name: name,
        dosage: dosage,
        schedule: schedule,
        instructions: instructions,
      });
    } catch (error) {
      throw new Error("Error in adding categories");
    }
  },
  deleteMedication: async (medicationId) => {
    try {
      return protectedInstance.delete(`/medications/${medicationId}`);
    } catch (error) {
      throw new Error("Error in deleting medication");
    }
  },
};

export default medicationServices;
