import { Router } from "express";
import { userController } from "../controllers/user-controller.js";
import { checkAuthTokenCookies } from "../middlewares/check-auth.js";
import { checkRole } from "../middlewares/check-role.js";
import { ROLES } from "../utils/role-enum.js";

const router = Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get(
  "/profile-user",
  checkAuthTokenCookies,
  checkRole([ROLES.USUARIO]),
  userController.getInfoUser
);

router.get(
    "/profile-admin",
    checkAuthTokenCookies,
    checkRole([ROLES.ADMIN]),
    userController.getInfoUser
  );

  router.get(
    "/test",
    checkAuthTokenCookies,
    checkRole([ROLES.ADMIN, ROLES.USUARIO, ROLES.INVITADO]),
    (req,res)=>res.send('ok')
  );

/* ----------------------------- ROUTER BOOKS ---------------------------- */
/*
router.get("/", checkAuthTokenCookies, checkRole([1, 2, 3]), bookControllers.getAll);
router.get("/:id", checkAuthTokenCookies, checkRole([1, 2]), bookControllers.getById);
router.post("/", checkAuthTokenCookies, checkRole([1, 2]), bookControllers.create);
router.put("/:id", checkAuthTokenCookies, checkRole([1, 2]), bookControllers.update);
router.delete("/:id", checkAuthTokenCookies, checkRole([1]), bookControllers.delete);
*/

export default router;
