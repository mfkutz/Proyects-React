import { Activity } from "../types";

export type ActivityActions =
  | { type: "save-activity"; payload: { newActivity: Activity } }
  | { type: "set-activId"; payload: { id: Activity["id"] } }
  | { type: "delete-activity"; payload: { id: Activity["id"] } }
  | { type: "restart-app" };

//Definicion del estado inicial//////////////////
export type ActivityState = {
  activities: Activity[];
  activeId: Activity["id"];
};

const localStorageActivities = (): Activity[] => {
  const activities = localStorage.getItem("activities");
  return activities ? JSON.parse(activities) : [];
};

export const initialState: ActivityState = {
  activities: localStorageActivities(),
  activeId: "",
};
///////////////////////////////////////////////

export const activityReducer = (state: ActivityState = initialState, action: ActivityActions) => {
  let updatedActivities: Activity[] = [];

  if (action.type === "save-activity") {
    //Este codigo maneja la logica para actualizar el state
    // console.log("desde el type de save-activity");
    // console.log(action.payload.newActivity);
    if (state.activeId) {
      updatedActivities = state.activities.map((activity) =>
        activity.id === state.activeId ? action.payload.newActivity : activity
      );
    } else {
      updatedActivities = [...state.activities, action.payload.newActivity];
    }
    return {
      ...state, //Mantenemos todas las propiedades del estado actual
      activities: updatedActivities, // agregamos a activities una nueva accion con action.payload.newActivity al final del arreglo
      activeId: "", //reiniciamos id
    };
  }

  if (action.type === "set-activId") {
    return {
      ...state,
      activeId: action.payload.id,
    };
  }

  if (action.type === "delete-activity") {
    return {
      ...state,
      activities: state.activities.filter((activity) => activity.id !== action.payload.id),
    };
  }

  if (action.type === "restart-app") {
    return {
      activities: [],
      activeId: "",
    };
  }

  return state;
};
