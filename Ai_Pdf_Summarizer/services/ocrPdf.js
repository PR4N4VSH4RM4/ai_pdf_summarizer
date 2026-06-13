import fs from "fs";
import { fromPath } from "pdf2pic";
import { extractTextFromImage } from "./GeminiOCR.js";

export async function ocrPdf(pdfPath) {
  const convert = fromPath(pdfPath, {
    density: 300,
    saveFilename: "page",
    savePath: "./temp",
    format: "png",
    width: 2000,
    height: 3000,
  });

  let fullText = "";

  for (let i = 1; i <= 3; i++) {
    try {
      const page = await convert(i);

      console.log(`OCR Page ${i}`);
      console.log("Image Path:", page.path);

      const text = await extractTextFromImage(
        page.path,
        "image/png"
      );

      fullText += text + "\n\n";

      if (fs.existsSync(page.path)) {
        fs.unlinkSync(page.path);
      }

    } catch (error) {
      console.log(
        `OCR PAGE ${i} ERROR:`,
        error.message
      );
      break;
    }
  }

  return fullText;
}