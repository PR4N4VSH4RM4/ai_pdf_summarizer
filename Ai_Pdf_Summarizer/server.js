import express from "express";
import dotenv from "dotenv";

import { extractTextFromImage } from "./services/GeminiOCR.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});