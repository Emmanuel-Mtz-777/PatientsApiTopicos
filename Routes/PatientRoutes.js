import { Router } from "express";
import { PatientController } from "../Controllers/PatientController.js";
import { authenticateToken } from "../middlewares/authentication.js";

const PatientRouter = Router();

PatientRouter.post("/create", authenticateToken, PatientController.createPatient);
PatientRouter.get("/", authenticateToken, PatientController.getAll);
PatientRouter.get("/:patientId", authenticateToken, PatientController.getPatientById);
PatientRouter.put("/:patientId", authenticateToken, PatientController.updatePatient);
PatientRouter.delete("/:patientId", authenticateToken, PatientController.deletePatient);

export default PatientRouter;
