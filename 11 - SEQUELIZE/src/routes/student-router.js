import { Router } from "express";
import { studentControllers } from "../controllers/student-controllers.js";

const router = Router();

router.get('/', studentControllers.getAll);
router.get('/:id', studentControllers.getById);

export default router;