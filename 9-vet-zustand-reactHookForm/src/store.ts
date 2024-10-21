import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { DraftPatient, Patient } from "./types";

type PatientState = {
  patients: Patient[];
  addPatient: (data: DraftPatient) => void;
  deletePatient: (id: Patient["id"]) => void;
};

const createPatient = (patient: DraftPatient): Patient => {
  return { ...patient, id: uuidv4() };
};

export const usePatientStore = create<PatientState>((set) => ({
  //////////// FUNCTION 1 - CREATE /////////////
  patients: [],
  addPatient: (data) => {
    //create id calling function
    const newPatient = createPatient(data);
    //Here, state recovery patients:[] of this function (usePatientStore)
    set((state) => ({
      //So, ...state.patients recovery data
      patients: [...state.patients, newPatient],
    }));
  },

  //////////// FUNCTION 2 - DELETE /////////////
  deletePatient: (id) => {
    console.log(id);
  },
}));
