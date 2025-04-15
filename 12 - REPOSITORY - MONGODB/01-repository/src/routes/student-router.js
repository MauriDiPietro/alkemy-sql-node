import { Router } from "express";
import { studentControllers } from "../controllers/student-controllers.js";

const router = Router();

router.get("/", studentControllers.getAll);
router.get("/:id", studentControllers.getById);
router.post("/", studentControllers.create);
router.put("/:id", studentControllers.update);
router.delete("/:id", studentControllers.delete);

export default router;
