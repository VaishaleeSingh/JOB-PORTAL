import express from 'express';
import userAuth from '../middelwares/authMiddleware.js';
import { updateUserCOntroller } from '../controllers/userController.js';
//router object
const router = express.Router()

//routes
//GET USERS || GET

// UPDATE USER || PUT
router.put('/update-user', userAuth, updateUserCOntroller)
export default router ;