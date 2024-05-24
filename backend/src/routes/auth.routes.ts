import { Router } from "express";
import { register, login, updateUser, deleteUser } from "../controllers/auth.controllers";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();
const PATH = '/auth';

router.post(`${PATH}/register`, register);
router.post(`${PATH}/login`, login);
router.put(`${PATH}/update`, updateUser);
router.delete(`${PATH}/delete`, deleteUser);

export default router;
