import express from "express";
import dotenv from "dotenv";
import cors from "cors";


// import { extractTextFromImage } from "./services/GeminiOCR.js";
import ocrRoutes from "./routes/ocrRoutes.js";
import pdfRoutes from "./routes/pdfRoutes.js";

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());

app.use("/api", ocrRoutes);
app.use("/api", pdfRoutes);


app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
  console.log(process.env.GEMINI_API_KEY);
});