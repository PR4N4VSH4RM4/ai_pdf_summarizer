import express from "express";
import multer from "multer";
import { handlePdf } from "../controllers/pdfController.js";

const router = express.Router();

const upload = multer({
  dest: "uploads/",
});

router.post(
  "/pdf",
  upload.single("file"),
  handlePdf
);

export default router;