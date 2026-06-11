// controllers/pdfController.js

import fs from "fs";
import { extractPdfText } from "../services/extractPdfText.js";
import { ocrPdf } from "../services/ocrPdf.js";

export const handlePdf = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No PDF uploaded",
      });
    }

    const pdfPath = req.file.path;

    let text = "";
    let source = "pdf-text";

    try {
      text = await extractPdfText(pdfPath);
    } catch (err) {
      console.log("Normal extraction failed");
    }
    text = await ocrPdf(pdfPath);
    source = "ocr";

    if (fs.existsSync(pdfPath)) {
      fs.unlinkSync(pdfPath);
    }

    return res.status(200).json({
      success: true,
      source,
      text,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to process PDF",
      error: error.message,
    });

  }
  try {
    text = await extractPdfText(pdfPath);
    console.log("PDF.js extracted chars:", text?.length || 0);
  } catch (err) {
    console.log("Normal extraction failed");
  }
  
  if (!text || text.trim().length < 100) {
    console.log("OCR Triggered");
    text = await ocrPdf(pdfPath);
    console.log("OCR extracted chars:", text?.length || 0);
    source = "ocr";
  }
};