import { PatientModel } from "../Models/PatientModel.js";
import { CustomError } from "../middlewares/customError.js";

export class PatientController {

    static async createPatient(req, res, next) {
        try {
            const patientData = req.body;
            const newPatient = await PatientModel.createPatient(patientData);
            
            if (!newPatient) throw new CustomError(400, 'Error creating patient');

            res.status(201).json(newPatient);
        } catch (error) {
            next(error);
        }
    }
    static async getAll(req, res, next) {
        try {
            const patients = await PatientModel.getAll();
            if (!patients || patients.length === 0) throw new CustomError(404, 'No patients found');

            res.status(200).json(patients);
        } catch (error) {
            next(error);
        }
    }

    static async getPatientById(req, res, next) {
        try {
            const {patientId} = req.params;
            const patient = await PatientModel.getPatientById(patientId);
            if (!patient) throw new CustomError(404, 'No patients found');

            res.status(200).json(patient);
        } catch (error) {
            next(error);
        }
    }

    static async updatePatient(req, res, next) {
        try {
            const {patientId} = req.params;
            const updateData = req.body;
            const updatedPatient = await PatientModel.updatePatient(patientId, updateData);
            if (!updatedPatient) throw new CustomError(404, 'No patients found');

            res.status(200).json(updatedPatient);
        } catch (error) {
            next(error);
        }
    }
    static async deletePatient(req, res, next) {
        try{
            const {patientId} = req.params;
            const deletedPatient = await PatientModel.deletePatient(patientId);
            if (!deletedPatient) throw new CustomError(404, 'No patients found');

            res.status(200).json({ message: 'Patient deleted successfully' });
        }catch(error){
            next(error);
        }
    }
}