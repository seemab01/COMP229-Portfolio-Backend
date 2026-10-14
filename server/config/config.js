import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// .env lives in the project root, no matter where the server is started from
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const config = {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET,
  mongoUri: process.env.MONGO_URI,
};

export default config;
