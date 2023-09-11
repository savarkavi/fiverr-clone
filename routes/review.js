import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import {
  createReview,
  deleteReview,
  getReviews,
} from "../controllers/review.js";

const router = express.Router();

router.get("/:gigId", getReviews);
router.post("/", verifyToken, createReview);
router.delete("/:id", verifyToken, deleteReview);

export default router;
