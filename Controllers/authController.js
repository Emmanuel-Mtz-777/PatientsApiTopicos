import jwt from 'jsonwebtoken';
import { randomUUID } from 'crypto';
import { SECRET_KEY } from '../Config.js';
import { CustomError } from "../middlewares/customError.js";

export class AuthController {

    static async Login(req, res, next) {
        try {
            const { email, password } = req.body;

            if (!email || !password) 
                throw new CustomError(400, 'Email and password are required');

            const userId = randomUUID();
            const token = jwt.sign({ id: userId }, SECRET_KEY, { expiresIn: '1h' });

            res.json({ token });
        } catch (error) {
            next(error);
        }
    }
}
