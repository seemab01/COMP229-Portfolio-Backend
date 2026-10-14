import express from "express";
import ctrl from "../controllers/user.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

// POST /api/users = sign up (public)
// GET list/read and delete all require sign in
router.route("/api/users")
  .get(authCtrl.requireSignin, ctrl.list)
  .post(ctrl.create)
  .delete(authCtrl.requireSignin, ctrl.removeAll);

// update / delete: own account only (token _id must match the url id)
router.route("/api/users/:id")
  .get(authCtrl.requireSignin, ctrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, ctrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, ctrl.remove);

export default router;
