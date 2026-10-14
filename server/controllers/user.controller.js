import User from "../models/user.model.js";

const fail = (res, err, code = 400) =>
  res.status(code).json({ error: err.message || err });

const clean = (u) => {
  const o = u.toObject();
  delete o.password;
  return o;
};

const list = async (req, res) => {
  try { res.json(await User.find().select("-password")); }
  catch (e) { fail(res, e); }
};

const read = async (req, res) => {
  try {
    const u = await User.findById(req.params.id).select("-password");
    if (!u) return fail(res, "User not found", 404);
    res.json(u);
  } catch (e) { fail(res, e); }
};

const create = async (req, res) => {
  try {
    const u = await new User(req.body).save();
    res.status(201).json(clean(u));
  } catch (e) { fail(res, e); }
};

const update = async (req, res) => {
  try {
    const u = await User.findById(req.params.id);
    if (!u) return fail(res, "User not found", 404);
    Object.assign(u, req.body);
    await u.save();
    res.json(clean(u));
  } catch (e) { fail(res, e); }
};

const remove = async (req, res) => {
  try {
    const u = await User.findByIdAndDelete(req.params.id);
    if (!u) return fail(res, "User not found", 404);
    res.json({ message: "Deleted", deleted: clean(u) });
  } catch (e) { fail(res, e); }
};

const removeAll = async (req, res) => {
  try {
    const r = await User.deleteMany({});
    res.json({ message: `${r.deletedCount} deleted` });
  } catch (e) { fail(res, e); }
};

export default { list, read, create, update, remove, removeAll };
