import express from 'express';
import { loginController, regiterController } from '../controllers/authController.js';

//router object
const router = express.Router();

//routes

// REGISTER || POPST
router.post("/register", regiterController);

// LOGIN || POST
router.post('/login', loginController);
//export
export default router;