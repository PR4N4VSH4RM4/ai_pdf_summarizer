import express from "express";
import multer from "multer";

import { handleOCR } from "../controllers/ocrControllers.js";

const router = express.Router();

const upload = multer({
  dest: "uploads/",
});

router.post(
  "/ocr",
  upload.single("file"),
  handleOCR
);

export default router;