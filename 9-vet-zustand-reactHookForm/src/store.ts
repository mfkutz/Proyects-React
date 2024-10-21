import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import { DraftPatient, Patient } from "./types";

type PatientState = {
  patients: Patient[];
  activeId: Patient["id"];
  addPatient: (data: DraftPatient) => void;
  deletePatient: (id: Patient["id"]) => void;
  getPatientById: (id: Patient["id"]) => void;
  updatePatient: (data: DraftPatient) => void;
};

const createPatient = (patient: DraftPatient): Patient => {
  return { ...patient, id: uuidv4() };
};

export const usePatientStore = create<PatientState>()(
  devtools(
    persist(
      (set) => ({
        //////////// FUNCTION 1 - CREATE /////////////
        patients: [],
        activeId: "",
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
          set((state) => ({
            patients: state.patients.filter((patient) => patient.id !== id),
          }));
        },

        //////////// FUNCTION 3 - GET /////////////
        getPatientById: (id) => {
          console.log(id);
          set(() => ({
            activeId: id,
          }));
        },

        //////////// FUNCTION 3 - UPDATE DATA /////////////
        updatePatient: (data) => {
          set((state) => ({
            patients: state.patients.map((patient) =>
              patient.id === state.activeId ? { id: state.activeId, ...data } : patient
            ),
            activeId: "",
          }));
        },
      }),
      { name: "Patiente-storage" }
    )
  )
);
