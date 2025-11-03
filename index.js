import dotenv from 'dotenv';
import express from 'express';
import PatientRouter from './Routes/PatientRoutes.js';

const app=express();
dotenv.config();
const PORT=process.env.PORT || 3000;

app.use(express.json());
app.use("/", PatientRouter);


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
