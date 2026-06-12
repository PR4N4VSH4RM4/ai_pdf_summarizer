import fs from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function extractTextFromImage(
  imagePath,
  mimeType
) {
  console.log("OCR KEY:", process.env.GEMINI_API_KEY);

  const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
  );

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const imageData = fs.readFileSync(imagePath);

  console.log("MIME:", mimeType);
  console.log("IMAGE SIZE:", imageData.length);


  for (let i = 0; i < 3; i++) {
    try {
      console.log("Before Gemini Call");

      const result = await Promise.race([
        model.generateContent([
          `You are an OCR engine.
          Extract all text exactly as written.
          Do not summarize.
          Do not translate.
          Preserve original language, line breaks and formatting.`,,
          {
            inlineData: {
              mimeType,
              data: imageData.toString("base64"),
            },
          },
        ]),
        new Promise((_, reject) =>
          setTimeout(
            () => reject(new Error("Gemini Timeout")),
            30000
          )
        ),
      ]);
      
      console.log("After Gemini Call");
  
      return result.response.text();
  
    } catch (error) {
  
      if (error.status === 503 && i < 2) {
        console.log("Retrying Gemini...");
        await new Promise(resolve => setTimeout(resolve, 3000));
        continue;
      }
  
      throw error;
    }
  }


}