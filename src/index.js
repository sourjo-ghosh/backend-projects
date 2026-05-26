import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import dns from "dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

import connectDB from "./db/index.js";

connectDB();
