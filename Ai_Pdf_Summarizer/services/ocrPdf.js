import { fromPath } from "pdf2pic";
import Tesseract from "tesseract.js";
import fs from "fs";

export async function ocrPdf(pdfPath) {
  const convert = fromPath(pdfPath, {
    density: 200,
    saveFilename: "page",
    savePath: "./temp",
    format: "png",
    width: 1200,
    height: 1600,
  });

  let fullText = "";

  for (let i = 1; i <= 3; i++) {
    try {
      const page = await convert(i);

      console.log("PAGE OBJECT:", page);

      const result = await Tesseract.recognize(
        page.path,
        "eng+hin+guj"
      );

      console.log("OCR TEXT:", result.data.text);

      fullText += result.data.text + "\n";


      // fs.unlinkSync(page.path);

    } catch (err) {
      console.error("OCR PAGE ERROR:", err);
    }
  }

  return fullText;
}