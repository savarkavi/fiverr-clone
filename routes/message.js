import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import {
  getConversations,
  getConversation,
  createConversation,
  updateConversation,
} from "../controllers/message.js";

const router = express.Router();

router.get("/", verifyToken, getConversations);
router.post("/", verifyToken, createConversation);
router.get("/:id", verifyToken, getConversation);
router.patch("/:id", verifyToken, updateConversation);

export default router;
