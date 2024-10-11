import { Activity } from "../types";

export type ActivityActions = {
  type: "save-activity";
  payload: { newActivity: Activity };
};

//Definicion del estado inicial//////////////////
type ActivityState = {
  activities: Activity[];
};

export const initialState: ActivityState = {
  activities: [],
};
///////////////////////////////////////////////

export const activityReducer = (state: ActivityState = initialState, action: ActivityActions) => {
  if (action.type === "save-activity") {
    //Este codigo maneja la logica para actualizar el state
    // console.log("desde el type de save-activity");

    // console.log(action.payload.newActivity);

    return {
      ...state, //Mantenemos todas las propiedades del estado actual
      activities: [...state.activities, action.payload.newActivity], // agregamos a activities una nueva accion con action.payload.newActivity al final del arreglo
    };
  }

  return state;
};
