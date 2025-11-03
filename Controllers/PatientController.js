import { PatientModel } from "../Models/PatientModel.js";

export class PatientController {

    static async createPatient(req, res) {
        try {
            const patientData = req.body;
            const newPatient = await PatientModel.createPatient(patientData);
            res.status(201).json(newPatient);
        } catch (error) {
            res.status(500).json({ error: 'Error creating patient' });
        }
    }
    static async getAll(req, res) {
        try{
            const patients= await PatientModel.getAll();
            if (!patients || patients.length === 0) {
                return res.status(404).json({ error: 'Patient not found' });
            }
            res.status(200).json(patients);
        }catch(error){
            res.status(500).json({ error: 'Error to fetching patient' });
        }
    }

    static async getPatientById(req, res) {
        try {
            const {patientId} = req.params;
            const patient = await PatientModel.getPatientById(patientId);
            if (!patient) {
                return res.status(404).json({ error: 'Patient not found' });
            }
            res.status(200).json(patient);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching patient' });
        }
    }

    static async updatePatient(req, res) {
        try {
            const {patientId} = req.params;
            const updateData = req.body;
            const updatedPatient = await PatientModel.updatePatient(patientId, updateData);
            if (!updatedPatient) {
                return res.status(404).json({ error: 'Patient not found' });
            }
            res.status(200).json(updatedPatient);
        } catch (error) {
            res.status(500).json({ error: 'Error updating patient' });
        }
    }
    static async deletePatient(req, res) {
        try{
            const {patientId} = req.params;
            const deletedPatient = await PatientModel.deletePatient(patientId);
            if (!deletedPatient) {
                return res.status(404).json({ error: 'Patient not found' });
            }
            res.status(200).json({ message: 'Patient deleted successfully' });
        }catch(error){
            res.status(500).json({ error: 'Error deleting patient' });
        }
    }
}