import mongoose from 'mongoose';
import { DP_USER, DB_PASSWORD } from '../Config.js';

const uri=`mongodb+srv://${DP_USER}:${DB_PASSWORD}@patients.wwqdgmg.mongodb.net/?appName=Patients`

mongoose.connect(uri)

.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

export default mongoose;