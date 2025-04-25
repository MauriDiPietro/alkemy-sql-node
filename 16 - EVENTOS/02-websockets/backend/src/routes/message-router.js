import { Router } from "express";
import { messageControllers } from "../controllers/message-controllers.js";
const router = Router();

router.get("/", messageControllers.getAll);
router.get("/:id", messageControllers.getById);
router.post("/", messageControllers.create);
router.put("/:id", messageControllers.update);
router.delete("/:id", messageControllers.delete);

export default router;
