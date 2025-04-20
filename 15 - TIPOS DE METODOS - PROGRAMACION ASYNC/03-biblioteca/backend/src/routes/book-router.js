import { Router } from "express";
import { bookControllers } from "../controllers/book-controllers.js";
const router = Router();

router.get("/", bookControllers.getAll);
router.get("/:id", bookControllers.getById);
router.post("/", bookControllers.create);
router.put("/:id", bookControllers.update);
router.delete("/:id", bookControllers.delete);

export default router;
