import dotenv from 'dotenv';
import express from 'express';
import PatientRouter from './Routes/PatientRoutes.js';
import { PatientErrorHandler } from './middlewares/patientErrors.js';
import AuthRouter from './Routes/AuthRoutes.js';

const app = express();
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/", PatientRouter);
app.use("/", AuthRouter);

app.use(PatientErrorHandler.handle);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
