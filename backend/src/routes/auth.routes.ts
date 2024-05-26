import { Router } from "express";
import { register, login, updateUser, deleteUser, getUser, logoutUser, getUsers } from "../controllers/auth.controllers";
import { authMiddleware, authRoleMiddleware } from "../middlewares/auth.middleware";

const router = Router();
const PATH = '/auth';

router.get(`${PATH}/get`, authMiddleware, getUser);
router.get(`${PATH}/getUsers`, authMiddleware, authRoleMiddleware, getUsers);
router.post(`${PATH}/register`, authMiddleware, authRoleMiddleware, register);
router.post(`${PATH}/login`, login);
router.put(`${PATH}/update`, authMiddleware, authRoleMiddleware, updateUser);
router.delete(`${PATH}/delete`, authMiddleware, authRoleMiddleware, deleteUser);
router.post(`${PATH}/logout`, logoutUser);

export default router;
