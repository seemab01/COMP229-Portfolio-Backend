export default function crud(Model) {
  const fail = (res, err, code = 400) =>
    res.status(code).json({ error: err.message || err });

  return {
    list: async (req, res) => {
      try { res.json(await Model.find()); } catch (e) { fail(res, e); }
    },
    read: async (req, res) => {
      try {
        const doc = await Model.findById(req.params.id);
        if (!doc) return fail(res, "Not found", 404);
        res.json(doc);
      } catch (e) { fail(res, e); }
    },
    create: async (req, res) => {
      try { res.status(201).json(await Model.create(req.body)); }
      catch (e) { fail(res, e); }
    },
    update: async (req, res) => {
      try {
        const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!doc) return fail(res, "Not found", 404);
        res.json(doc);
      } catch (e) { fail(res, e); }
    },
    remove: async (req, res) => {
      try {
        const doc = await Model.findByIdAndDelete(req.params.id);
        if (!doc) return fail(res, "Not found", 404);
        res.json({ message: "Deleted", deleted: doc });
      } catch (e) { fail(res, e); }
    },
    removeAll: async (req, res) => {
      try {
        const r = await Model.deleteMany({});
        res.json({ message: `${r.deletedCount} deleted` });
      } catch (e) { fail(res, e); }
    },
  };
}
