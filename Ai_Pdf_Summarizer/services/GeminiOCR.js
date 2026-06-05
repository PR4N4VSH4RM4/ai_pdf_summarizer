import fs from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

export async function extractTextFromImage(
  imagePath,
  mimeType
) {

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const imageData = fs.readFileSync(imagePath);

  const result = await model.generateContent([
    "Extract all text from this image exactly as written.",
    {
      inlineData: {
        mimeType,
        data: imageData.toString("base64"),
      },
    },
  ]);

  return result.response.text();
} 