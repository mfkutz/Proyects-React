import { useContext } from "react";
import { ActivityContext } from "../context/ActivityContext";

export const useActivity = () => {
  const context = useContext(ActivityContext); //this have "state" and "dispatch"
  if (!context) throw new Error("El hook useActivity debe ser utilizado en un ActivityProvider");
  return context;
};
