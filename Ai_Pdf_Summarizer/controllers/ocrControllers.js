import { extractTextFromImage } from "../services/GeminiOCR.js";

export const handleOCR = async (req, res) => {
  try {
    console.log(req.file);

    const text = await extractTextFromImage(
      req.file.path,
      req.file.mimetype
    );

    console.log("OCR RESULT:");
    console.log(text);

    res.json({
      success: true,
      text,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};