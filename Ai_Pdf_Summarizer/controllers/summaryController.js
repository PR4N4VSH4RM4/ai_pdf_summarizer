import { GoogleGenerativeAI } from "@google/generative-ai";

export const summarizeText = async (req, res) => {
  try {
    const { text } = req.body;

    const genAI = new GoogleGenerativeAI(
      process.env.GEMINI_API_KEY
    );

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const result = await model.generateContent(
      `Summarize this PDF in concise bullet points:

      ${text}`
    );

    res.json({
      success: true,
      summary: result.response.text(),
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};