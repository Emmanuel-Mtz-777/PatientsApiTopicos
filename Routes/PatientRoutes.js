import { Router } from "express";
import { PatientController } from "../Controllers/PatientController.js";

const PatientRouter = Router();

PatientRouter.post("/create", PatientController.createPatient);
PatientRouter.get("/", PatientController.getAll);
PatientRouter.get("/:patientId", PatientController.getPatientById);
PatientRouter.put("/:patientId", PatientController.updatePatient);
PatientRouter.delete("/:patientId", PatientController.deletePatient);

export default PatientRouter;
