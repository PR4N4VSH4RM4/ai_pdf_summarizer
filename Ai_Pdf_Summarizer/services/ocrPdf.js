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

  // Test ke liye pehle 3 pages
  for (let i = 1; i <= 3; i++) {
    const page = await convert(i);

    const result = await Tesseract.recognize(
      page.path,
      "eng+hin+guj"
    );

    fullText += result.data.text + "\n";

    fs.unlinkSync(page.path);
  }

  return fullText;
}