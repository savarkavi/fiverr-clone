import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import { getGigs, getGig, createGig, deleteGig } from "../controllers/gig.js";

const router = express.Router();

router.post("/", verifyToken, createGig);
router.delete("/:id", verifyToken, deleteGig);
router.get("/:id", getGig);
router.get("/", getGigs);

export default router;
