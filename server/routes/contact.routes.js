import express from "express";
import ctrl from "../controllers/contact.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

// Public: anyone can read (GET) and add (POST)
// Protected: update / delete require sign in
router.route("/api/contacts")
  .get(ctrl.list)
  .post(ctrl.create)
  .delete(authCtrl.requireSignin, ctrl.removeAll);

router.route("/api/contacts/:id")
  .get(ctrl.read)
  .put(authCtrl.requireSignin, ctrl.update)
  .delete(authCtrl.requireSignin, ctrl.remove);

export default router;
