import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../Config.js';
import { CustomError } from './customError.js';

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']; // espera "Bearer <token>"
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return next(new CustomError(401, 'Access denied: No token provided'));

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return next(new CustomError(403, 'Invalid token'));
        req.user = user; // guarda la info del token para usarla en el controlador si quieres
        next();
    });
};
