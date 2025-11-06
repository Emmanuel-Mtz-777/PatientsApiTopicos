import { AuthController } from "../Controllers/authController.js";
import { Router } from "express";

const AuthRouter = Router();

AuthRouter.post('/login', AuthController.Login);

export default AuthRouter;
