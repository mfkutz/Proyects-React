//Principal TYPE with ID (for registration)
export type Patient = {
  id: string;
  name: string;
  caretaker: string;
  email: string;
  date: Date;
  symptoms: string;
};

//Temporal TYPE (For logic manipulation, without ID )
export type DraftPatient = Omit<Patient, "id">;
