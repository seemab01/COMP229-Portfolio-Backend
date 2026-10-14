import jwt from "jsonwebtoken";
import { expressjwt } from "express-jwt";
import User from "../models/user.model.js";
import config from "../config/config.js";

// POST /auth/signin
const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: "User not found" });

    const ok = await user.authenticate(password || "");
    if (!ok) return res.status(401).json({ error: "Email and password don't match." });

    const token = jwt.sign({ _id: user._id }, config.jwtSecret, { expiresIn: "1d" });
    res.cookie("t", token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });

    return res.json({
      token,
      user: { _id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    return res.status(401).json({ error: "Could not sign in" });
  }
};

// GET /auth/signout
const signout = (req, res) => {
  res.clearCookie("t");
  return res.status(200).json({ message: "signed out" });
};

// Read the token from the Authorization header (Bearer ...) or from the 't' cookie
const requireSignin = expressjwt({
  secret: config.jwtSecret,
  algorithms: ["HS256"],
  requestProperty: "auth",
  getToken: (req) => {
    const h = req.headers.authorization;
    if (h && h.startsWith("Bearer ")) return h.split(" ")[1];
    return req.cookies?.t;
  },
});

// A user can only update/delete their own account
const hasAuthorization = (req, res, next) => {
  const authorized = req.auth && req.params.id && req.auth._id === req.params.id;
  if (!authorized) {
    return res.status(403).json({ error: "User is not authorized" });
  }
  next();
};

export default { signin, signout, requireSignin, hasAuthorization };
