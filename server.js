import mongoose from "mongoose";
import config from "./server/config/config.js";
import app from "./server/express.js";
import router from "./server/assets-router.js";

mongoose.Promise = global.Promise;
mongoose
  .connect(config.mongoUri)
  .then(() => console.log("Connected to the Portfolio database!"))
  .catch((err) => console.error("Database connection error:", err.message));

app.use("/src", router);
app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Portfolio application." });
});

app.listen(config.port, () =>
  console.log(`Server running at http://localhost:${config.port}/`)
);

export default app;
