import { Router } from "express";
import { register, login } from "../controllers/auth.controllers";

const router = Router();
const PATH = '/auth';

router.post(`${PATH}/register`, register);
router.post(`${PATH}/login`, login);

export default router;


// router.post("/api/user/createUser", createUser);
// router.post("/api/user/login", loginUser);
// router.get("/api/user/getUser", authMiddleware, getUser);