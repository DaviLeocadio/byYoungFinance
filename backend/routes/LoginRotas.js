import express from 'express';
import { LoginController } from "../controllers/LoginController.js";
const router = express.Router();

router.post('/', LoginController);


export default router;