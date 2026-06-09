import { extractPdfText } from "../services/extractPdfText.js";

export const handlePdf = async (req, res) => {
  try {
    const text = await extractPdfText(req.file.path);

    res.json({
      success: true,
      text,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "PDF Processing Failed",
    });
  }
};