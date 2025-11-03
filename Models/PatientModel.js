import MongoDB from '../Contracts/MongoDb.js';
import { Schema } from 'mongoose';

const projectSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    age: { type: Number, required: true },
    genre:{ type: String, required: true },
    diagnosis: [{ type: String, required: true }],
    registrationDate: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now }
});

export const Patient = MongoDB.model('Patient', projectSchema);

export class PatientModel {
    static async createPatient(patientData) {
        return await Patient.create(patientData);
    }
    static async getPatientById(patientId) {
        return await Patient.findById(patientId);
    }
    static async getAll() {
        return await Patient.find({});
    }
    static async updatePatient(patientId, updateData) {
        return await Patient.findByIdAndUpdate(patientId, updateData, { new: true });
    }
    static async deletePatient(patientId) {
        return await Patient.findByIdAndDelete(patientId);
    }

}