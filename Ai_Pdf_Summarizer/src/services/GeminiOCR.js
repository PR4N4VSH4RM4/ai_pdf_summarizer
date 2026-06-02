import fs from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

export async function extractTextFromImage(
  imagePath
) {

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const imageData = fs.readFileSync(imagePath);

  const result = await model.generateContent([
    {
      inlineData: {
        mimeType: "image/png",
        data: imageData.toString("base64"),
      },
    },


  ]);

  return result.response.text();
}