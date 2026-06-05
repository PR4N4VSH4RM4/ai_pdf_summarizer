import express from "express";
import dotenv from "dotenv";


import { extractTextFromImage } from "./services/GeminiOCR.js";
import ocrRoutes from "./routes/ocrRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api", ocrRoutes);


app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
  console.log(process.env.GEMINI_API_KEY);
});