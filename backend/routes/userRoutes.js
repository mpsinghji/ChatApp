import express from 'express';
import protectedRoute from '../middleware/protectedRoute.js';
import { getAllUsersForSidebar } from '../controllers/userController.js';

const router = express.Router();

router.get("/",protectedRoute,getAllUsersForSidebar);

export default router;


