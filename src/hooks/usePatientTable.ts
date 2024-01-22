import { PatientTableContext } from "@/app/context/PatientTableContext";
import { useContext } from "react";

export const usePatientTable = () => {
  return useContext(PatientTableContext);
};
