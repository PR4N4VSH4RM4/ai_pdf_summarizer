import fs from "fs";
import { PDFParse } from "pdf-parse";

export async function extractPdfText(pdfPath) {

  const pdfBuffer = fs.readFileSync(pdfPath);

  const parser = new PDFParse({
    data: pdfBuffer,
  });

  const result = await parser.getText();

  return result.text;
}