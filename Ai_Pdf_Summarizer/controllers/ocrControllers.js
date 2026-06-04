import { extractTextFromImage }
from "../services/GeminiOCR.js";

export async function handleOCR(
  req,
  res
) {

  try {

    if (!req.file) {

      return res.status(400).json({
        message: "No file uploaded",
      });

    }

    const extractedText =
      await extractTextFromImage(
        req.file.path
      );

    res.status(200).json({
      success: true,
      text: extractedText,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "OCR Failed",
    });

  }

}