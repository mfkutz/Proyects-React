import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"
import { usePatientStore } from "../store"

type PatientsDetailsProps = {
    patient: Patient
}

export default function PatientsDetails({ patient }: PatientsDetailsProps) {

    const deletePatient = usePatientStore(state => state.deletePatient)
    const getPatientById = usePatientStore(state => state.getPatientById)

    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatientDetailItem label="ID" data={patient.id} />
            <PatientDetailItem label="Paciente" data={patient.name} />
            <PatientDetailItem label="Propietario" data={patient.caretaker} />
            <PatientDetailItem label="E-mail" data={patient.email} />
            <PatientDetailItem label="Fecha de alta" data={patient.date.toString()} />
            <PatientDetailItem label="Síntomas" data={patient.symptoms} />

            <div className="flex flex-col lg:flex-row justify-between mt-10 gap-2">
                <button
                    onClick={() => getPatientById(patient.id)}
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                >Editar
                </button>
                <button
                    onClick={() => deletePatient(patient.id)}
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                >Eliminar
                </button>
            </div>
        </div>
    )
}
