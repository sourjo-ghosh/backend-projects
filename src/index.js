import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import dns from "dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);
import connectDB from "./db/index.js";
import app from "./app.js";

const port = process.env.PORT;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`app is running on ${port}`);
    });
  })
  .catch((err) => {
    console.log("Database connection failed", err);
  });
